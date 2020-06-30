// get table from base
let table = base.getTable("Stocks");

// get stock name from 'Name' field
let queryResult = await table.selectRecordsAsync();
let record = queryResult.records;
for(let i=0; i<record.length; i++){
  console.log(record[i].name);
}

// function to fetch stock info

  let url = "https://financialmodelingprep.com/api/v3/historical-chart/1min/";
  let stockName = record[0].name;
  let stockId = record[0].id;
  let stockIds = [];
  for(let i=0; i<record.length; i++){
    stockIds.push(record[i].id)
  }
  let apiKey = "?apikey=1057dbc2b304d02fd3cba17464756fbe";
  let resultsContainer = [];

  await fetch(url + stockName + apiKey).then(function(response){
    return response.json();
  }).then(async function(data) {
    resultsContainer.push(data);
    let latestStock = resultsContainer[0].splice(0,1);
    let latestStockClose = Number(latestStock[0].close);
    console.log(latestStockClose);
    await table.updateRecordsAsync([
      {
          id: stockId,
          fields: {
              "Last close": latestStockClose,
          },
      }
  ]);
  }).catch(function(err) {
    console.warn('Something went wrong.', err);
  });
  console.log('done')
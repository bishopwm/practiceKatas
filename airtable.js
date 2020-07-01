// get table from base
let table = base.getTable("Stocks");

// get stock name from 'Name' field
let queryResult = await table.selectRecordsAsync();
let record = queryResult.records;

// stock info:
  let stockNames = [];
  let stockIds = [];
  for(let i=0; i<record.length; i++){
    stockNames.push(record[i].name);
    stockIds.push(record[i].id);
  }

  console.log(stockNames);
  console.log(stockIds);

// request options:
  let url = "https://financialmodelingprep.com/api/v3/historical-chart/1min/";
  let apiKey = "?apikey=1057dbc2b304d02fd3cba17464756fbe";

// requests
  for(let i=0; i<record.length; i++){
    await fetch(url + stockNames[i] + apiKey).then(function(response){
      return response.json();
    }).then(async function(data) {
      let latestStock = data.splice(0,1);
      let latestStockClose = Number(latestStock[0].close);
      console.log('Latest close: ', latestStockClose);
      await table.updateRecordsAsync([
        {
            id: stockIds[i],
            fields: {
                "Last close": latestStockClose,
            }
        }
    ]);
    }).catch(function(err) {
      console.warn('Something went wrong.', err);
    });
    console.log('Done Fetching ' + stockNames[i])
  }
// get table from base
let table = base.getTable("Stocks");

// get stock name from 'Name' field
let queryResult = await table.selectRecordsAsync();
let record = queryResult.records;
for(let i=0; i<record.length; i++){
  console.log(
    record[i].name,
    record[i].id
    );
}
// request options:
  let url = "https://financialmodelingprep.com/api/v3/historical-chart/1min/";
  let apiKey = "?apikey=1057dbc2b304d02fd3cba17464756fbe";
  let resultsContainer1 = [];
  let resultsContainer2 = [];
  let resultsContainer3 = [];

// stock info:
  let stockNames = [];
  for(let i=0; i<record.length; i++){
    stockNames.push(record[i].name);
  }
  let stockIds = [];
  for(let i=0; i<record.length; i++){
    stockIds.push(record[i].id)
  }
  console.log(stockNames);
  console.log(stockIds);

  //request 1
  await fetch(url + stockNames[0] + apiKey).then(function(response){
    return response.json();
  }).then(async function(data) {
    resultsContainer1.push(data);
    let latestStock = resultsContainer1[0].splice(0,1);
    let latestStockClose = Number(latestStock[0].close);
    console.log(latestStockClose);
    await table.updateRecordsAsync([
      {
          id: stockIds[0],
          fields: {
              "Last close": latestStockClose,
          }
      }
  ]);
  }).catch(function(err) {
    console.warn('Something went wrong.', err);
  });
  console.log('done1')

// request 2
    await fetch(url + stockNames[1] + apiKey).then(function(response){
    return response.json();
  }).then(async function(data) {
    resultsContainer2.push(data);
    let latestStock = resultsContainer2[0].splice(0,1);
    let latestStockClose = Number(latestStock[0].close);
    console.log(latestStockClose);
    await table.updateRecordsAsync([
      {
          id: stockIds[1],
          fields: {
              "Last close": latestStockClose,
          }
      }
  ]);
  }).catch(function(err) {
    console.warn('Something went wrong.', err);
  });
  console.log('done1')

  // request 2
    await fetch(url + stockNames[2] + apiKey).then(function(response){
    return response.json();
  }).then(async function(data) {
    resultsContainer3.push(data);
    let latestStock = resultsContainer3[0].splice(0,1);
    let latestStockClose = Number(latestStock[0].close);
    console.log(latestStockClose);
    await table.updateRecordsAsync([
      {
          id: stockIds[2],
          fields: {
              "Last close": latestStockClose,
          }
      }
  ]);
  }).catch(function(err) {
    console.warn('Something went wrong.', err);
  });
  console.log('done2')
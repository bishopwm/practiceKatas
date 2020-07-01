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
  let url = "https://financialmodelingprep.com/api/v3/historical-price-full/";
  let apiKey = "?apikey=1057dbc2b304d02fd3cba17464756fbe";

// requests
  for(let i=0; i<record.length; i++){
    await fetch(url + stockNames[i] + apiKey).then(function(response){
      return response.json();
    }).then(async function(data) {
      let latestStock = data.historical[0];
      let lastFiveStockDays = data.historical.splice(0,5);
      let latestStockClose = Number(latestStock.close);
      console.log('Latest close: ', latestStockClose);

      // five day average close price:
      let sum = 0;
      for(let i=0; i<lastFiveStockDays.length; i++){
        sum += lastFiveStockDays[i].close
      }
      let fiveDayAverage = Number(sum/lastFiveStockDays.length);
      console.log('5 day average ' + stockNames[i] + ' = ' + fiveDayAverage)


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
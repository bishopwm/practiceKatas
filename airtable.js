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

// percent change holder
let allPercents = [];

// requests
  for(let i=0; i<record.length; i++){
    await fetch(url + stockNames[i] + apiKey).then(function(response){
      return response.json();
    }).then(async function(data) {
      let latestStock = data.historical[0];
      let lastFiveStockDays = [...data.historical].splice(0,5);
      let previousFiveStockDays = [...data.historical].splice(5,5)
      let latestStockClose = Number(latestStock.close);
      console.log(`Latest close ${stockNames[i]} = `, latestStockClose);

      // calculate five day average close price:
      let sum = 0;
      for(let i=0; i<lastFiveStockDays.length; i++){
        sum += lastFiveStockDays[i].close
      }
      let fiveDayAverage = Number(sum/lastFiveStockDays.length);
      console.log('5 day average close' + stockNames[i] + ' = ', fiveDayAverage)

      // calculate previous five day average close price:
      let previousSum = 0;
      for(let i=0; i<previousFiveStockDays.length; i++){
        previousSum += previousFiveStockDays[i].close
      }
      let previousFiveDayAvg = Number(previousSum/previousFiveStockDays.length);
      let fiveDayBaseline = previousFiveDayAvg;
      console.log(`Previous 5 day average close ${stockNames[i]} = `, fiveDayBaseline);

      // calculate percent change in average 5 day close price since previous 5 days
      let percentChange = Number((fiveDayAverage/fiveDayBaseline)/100);
      console.log(`Percent change from previous 5 day average for ${stockNames[i]} = `, percentChange);

      // calculate largest pecent change among stocks
      allPercents.push(percentChange);

      await table.updateRecordsAsync([
        {
            id: stockIds[i],
            fields: {
                "Last close": latestStockClose,
                "Change": percentChange
            }
        }
    ]);
    }).catch(function(err) {
      console.warn('Something went wrong.', err);
    });
    console.log('Done Fetching ' + stockNames[i])
  }

  // calculate largest percent change:
  let maxChange = Math.max(...allPercents) * 100
  let roundedMaxChange = Math.round(100*maxChange)/100

  // summary of updates
  console.log(`Total records updated: ${stockNames.length}`);
  console.log(roundedMaxChange + '%');
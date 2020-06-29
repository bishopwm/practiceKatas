// // get table from base
// let table = base.getTable("Stocks");

// // get stock name from 'Name' field
// let queryResult = await table.selectRecordsAsync();
// let record = queryResult.records;
// console.log(record);



// let updates = await table.updateRecordsAsync([
//     {
//         id: record[2].id,
//         fields: {
//             "Last close": 20,
//             "Name": "BLURP"
//         }
//     }
// ]);




// function to fetch stock info
stockies = async () => {
    fetch("https://financialmodelingprep.com/api/v3/historical-chart/1min/AAPL?apikey=1057dbc2b304d02fd3cba17464756fbe").then(function(response){
        // Succes
      return response.json();
    }).then(function(data) {
      console.log(data[0].date);
    }).catch(function(err) {
      // Error
      console.warn('Something went wrong.', err);
    });
  }
  // call stock function
stockies();
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY;
const appId = process.env.APPLICATION_ID;

const algoliasearch = require('algoliasearch');
const client = algoliasearch(appId, apiKey);
const index = client.initIndex('Sample_Index');
const testJSON = require('../assets/algolia_5k_sample.json');


index.saveObjects(testJSON, {
  autoGenerateObjectIDIfNotExist: true
}).then(({ objectIDs }) => {
  console.log(objectIDs);
});

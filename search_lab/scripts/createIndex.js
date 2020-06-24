// initialize dotenv to access credentials
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const apiKey = process.env.API_KEY;
const appId = process.env.APPLICATION_ID;

// initialize algoliasearch and json data
const algoliasearch = require('algoliasearch');
const client = algoliasearch(appId, apiKey);
const index = client.initIndex('sampleIndex2');
const testJSON = require('../data/algolia_5k_sample.json');

// save json data to index
index.saveObjects(testJSON, {
  autoGenerateObjectIDIfNotExist: true
}).then(({ objectIDs }) => {
  console.log(objectIDs);
});
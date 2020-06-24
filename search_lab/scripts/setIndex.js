const algoliasearch = require('algoliasearch');
// initialize dotenv to access credentials
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const apiKey = process.env.API_KEY;
const appId = process.env.APPLICATION_ID;

// initialize index to set settings on
const client = algoliasearch(appId, apiKey);
const index = client.initIndex('sampleIndex2');

index.setSettings({
    searchableAttributes: [
      'name',
      'brand',
      'type',
      'price',
      'rating',
      'hierarchicalCategories',
      'categories',
      'description'
    ],
    customRanking: ["desc(rating)"],
    attributesForFaceting: [
        'brand',
        'hierarchicalCategories',
        'categories',
        'price'
      ]
  }).then(() => {
    // done
  });
  


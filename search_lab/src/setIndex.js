const algoliasearch = require('algoliasearch');
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY;
const appId = process.env.APPLICATION_ID;

const client = algoliasearch(appId, apiKey);
const index = client.initIndex('test_index_4');

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
  


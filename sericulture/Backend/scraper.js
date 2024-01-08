const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ProductsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const MarketDataSchema = new mongoose.Schema({
  marketName: String,
  breedType: String,
  minPrice: String,
  maxPrice: String,
  avgPrice: String,
  date: String
});

const MarketData = mongoose.model('MarketData', MarketDataSchema);

const url = 'https://tnsericulture.tn.gov.in/cocoonmarket';

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    const marketTable = $('table.table');
    const dateText = $('p.date').text().trim();
    const dateRegex = /\d{2}-\d{2}-\d{4}/;
    const extractedDate = dateRegex.exec(dateText);
    const date = extractedDate ? extractedDate[0] : '';

    const marketRows = marketTable.find('tbody > tr');
    const promises = [];

    marketRows.each((index, element) => {
      const marketName = $(element).find('td:nth-child(2)').text().trim();
      const minPrice = $(element).find('td:nth-child(3)').text().trim();
      const maxPrice = $(element).find('td:nth-child(4)').text().trim();
      const avgPrice = $(element).find('td:nth-child(6)').text().trim();

      const marketData = new MarketData({
        marketName: marketName,
        breedType: 'Hybrid Bivoltine',
        minPrice: minPrice,
        maxPrice: maxPrice,
        avgPrice: avgPrice,
        date: date
      });

      const savePromise = marketData.save();
      promises.push(savePromise);
    });

    Promise.all(promises)
      .then(() => {
        console.log('All data saved successfully');
        mongoose.disconnect();
      })
      .catch(error => {
        console.error('Error saving data:', error);
        mongoose.disconnect();
      });
  })
  .catch(error => {
    console.log('Error fetching and parsing data:', error);
  });

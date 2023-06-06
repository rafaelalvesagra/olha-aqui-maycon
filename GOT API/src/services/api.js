const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://game-of-thrones1.p.rapidapi.com/Characters'+ nome,
  headers: {
    'X-RapidAPI-Key': 'f09a90cbeamsh9ae56a390f806b3p10bb28jsn92a613ea8a36',
    'X-RapidAPI-Host': 'game-of-thrones1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
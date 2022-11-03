const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.get('/', (req,res) => {
    res.json('hi');
});

app.get('/food', (req,res) => {

    const options = {
        method: 'GET',
        url: 'https://game-of-thrones1.p.rapidapi.com/Characters',
        headers: {
          'X-RapidAPI-Key': '8cb910c87cmsh7fa5bccb169469bp10ef42jsn86fdd980bc79',
          'X-RapidAPI-Host': 'game-of-thrones1.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          res.json(response.data);
      }).catch(function (error) {
          console.error(error);
      });

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
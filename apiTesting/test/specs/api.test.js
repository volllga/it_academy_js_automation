const axios = require('axios');
const { Validator } = require('jsonschema');
const schema = require('../../jsonSchema/SimpleBooksAPI_v1.json');

const validator = new Validator();

const encodedParams = new URLSearchParams();
encodedParams.append("q", "cat and dog");
encodedParams.append("target", "es");
encodedParams.append("source", "en");

const optionsPOST = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  },
  data: encodedParams
};

describe('Simple Books API tests', () => {
  it('Status code of GET /status should be 200', async () => {
    const response = await axios.get(`https://simple-books-api.glitch.me/status`,)
    expect(await response.status).toEqual(200);
  });

  it('Response of GET /books?limit=2 should have appropriate json schema', async () => {
    const response = await axios.get(`https://simple-books-api.glitch.me/books?limit=2`,)
    let validationResult = await validator.validate(response.data, schema)
    expect(validationResult.errors.length).toEqual(0);
  });
});

describe('Google Translate API tests', () => {
  it('Status code of GET /languages should be 200', async () => {
    const options = {
      method: 'GET',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
      headers: {
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '82b05199c2msh799e0d1c857e6ffp1ec665jsn7029289a5b36',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      }
    };
      const response = await axios.request(options)
      expect(response.status).toEqual(200);
  });

  it('Status code of POST /translate/v2 should be 200', async () => {
    const response = await axios.request(optionsPOST)
    // console.log(await response.data.data.translations[0].translatedText);
    expect(response.status).toEqual(200);
  });

  it('Translated text of en "cat and dog" should be es "gato y perro" ', async () => {
    const response = await axios.request(optionsPOST)
    const translatedText = await response.data.data.translations[0].translatedText;
    expect(translatedText).toEqual('gato y perro');
  });
});


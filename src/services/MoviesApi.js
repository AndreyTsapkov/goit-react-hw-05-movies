import axios from 'axios';

const API_KEY = 'e5517ae4303f5ec2cd4c7059ec556fc9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  include_adult: false,
  language: 'en-US',
};

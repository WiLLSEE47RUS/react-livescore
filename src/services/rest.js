import axios from 'axios';
import {getBaseUrl, paramsSerializer} from '../utils/url';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getHeader = () => {
  return {
    'x-rapidapi-host': 'sportscore1.p.rapidapi.com',
    'x-rapidapi-key': '309b3078f4mshfd8ebe60fa07d5ep1bbf5ejsn2af1e6f78228'
  };
};

export const baseURL = getBaseUrl();

const instance = axios.create({
  baseURL,
  paramsSerializer
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const restGet = (url, config) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-assignment
  return instance.get(url, {params: {...config}, headers: {...getHeader()}});
};

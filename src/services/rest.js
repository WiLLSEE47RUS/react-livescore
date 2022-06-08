import axios from 'axios';
import {getBaseUrl, paramsSerializer} from '../utils/url';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getHeader = () => {
  return {
    'x-rapidapi-host': 'sportscore1.p.rapidapi.com',
    'x-rapidapi-key': 'fcf0f94828mshe4442eea88a7d01p15a177jsn1344e9c69c0e'
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

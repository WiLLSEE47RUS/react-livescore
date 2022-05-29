import axios from 'axios';
import {getBaseUrl, paramsSerializer} from '../utils/url';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getHeader = () => {
  return {
    'x-rapidapi-host': 'sportscore1.p.rapidapi.com',
    'x-rapidapi-key': 'f7c3c72c18msh967fd33ec16c0fbp18a933jsn6e9e2ea14099'
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

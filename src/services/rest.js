import axios from 'axios';
import {getBaseUrl, paramsSerializer} from '../utils/url';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getHeader = () => {
  return {
    'x-rapidapi-host': 'sportscore1.p.rapidapi.com',
    'x-rapidapi-key': '6288613dd3msha86578bf731ee12p163163jsn613e83c122df'
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

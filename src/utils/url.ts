import qs from 'qs';

export function getBaseUrl(): string | undefined {
  return 'https://sportscore1.p.rapidapi.com';
}

export const paramsSerializer = (obj): string =>
  qs.stringify(obj);

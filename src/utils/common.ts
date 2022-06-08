import moment from 'moment-timezone';

export const groupBy = <T>(array: T[], predicate: (v: T) => string | number) =>
  array.reduce((acc, value) => {
    (acc[predicate(value)] ||= []).push(value);
    return acc;
  }, {} as { [key: string]: T[] });

export const formatEventStartDate = (date: string) => {
  return moment.tz(date, 'Etc/GMT+0');
};

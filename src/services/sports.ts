import {restGet} from './rest';
import {ApiVersion} from '../constants/api.constants';
import {ISportPayload} from '../model/sport.model';

export const getSportTypes = async (): Promise<ISportPayload> => {
  const response = await restGet(`${ApiVersion.Sports}`);
  return response.data as ISportPayload;
};

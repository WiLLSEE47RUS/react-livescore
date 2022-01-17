import {ISectionPayload, ISectionRequest} from '../model/sections.model';
import {ApiVersion} from '../constants/api.constants';
import {restGet} from './rest';

export const getSectionsList = async (params: ISectionPayload): Promise<ISectionRequest> => {
  const response = await restGet(`${ApiVersion.Sections}`, {params});
  return response.data as ISectionRequest;
};

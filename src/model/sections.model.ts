import {INameTranslation, ISportModel} from './sport.model';

export interface ISectionModel {
  id: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  sport_id: string;
  slug: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  name_translations: INameTranslation;
  priority: number;
  flag: string;
  sport: ISportModel;
}
export interface ISectionPayload{
  page: number;
}
export interface ISectionRequest{
  data: ISectionModel[]
}

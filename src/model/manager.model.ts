import { INameTranslation } from './sport.model';

export interface IManagerModel {
  id: number;
  sport_id: number;
  slug: string;
  name: string;
  name_translations: INameTranslation;
  name_short: string;
  has_photo:false
  photo: string;
  date_birth: string;
  nationality_code: string;
  preferred_formation: string;
}

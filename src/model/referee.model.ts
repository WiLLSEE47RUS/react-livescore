import { INameTranslation, ISportModel } from './sport.model';

export interface IRefereeModel {
  id:	number
  slug:	string
  name:	string
  name_translations: INameTranslation;
  date_birth:	string;
  date_debut:	string;
  age: string;
  has_photo: boolean;
  photo:	string;
  nationality_code:	string;
  country: {
    name: string;
    flag: string;
  }
  yellow_cards:	number;
  red_cards:	number;
  yellow_red_cards:	number;
  games:	number;
  sport:	ISportModel;
}

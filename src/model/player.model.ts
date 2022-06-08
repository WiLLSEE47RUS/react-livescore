import { INameTranslation, ISportModel } from './sport.model';
import { ITeam } from './team.model';

export interface IPlayerModel {
  id: number;
  slug: string;
  name: string;
  name_translations: INameTranslation;
  name_short: string;
  has_photo: boolean;
  photo: string;
  position: string;
  position_name: string;
  weight: number;
  age: number;
  date_birth_at: string;
  height_meters: number;
  shirt_number: number;
  preferred_foot: string;
  nationality_code: string;
  flag: string;
  market_currency: string;
  market_value: number;
  contract_until: string;
  rating: number;
  //positions characteristics ability
  sport: ISportModel;
  main_team: ITeam;
}

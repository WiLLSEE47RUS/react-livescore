import { INameTranslation } from './sport.model';

export interface ITeam {
  category_id: number,
  country: string,
  country_code: string,
  flag: string,
  foundation?: string,
  gender: string,
  has_logo: boolean,
  has_sub: boolean,
  id: number,
  is_nationality: boolean,
  logo: string,
  manager_id : number,
  name: string,
  name_code: string,
  name_full: string,
  name_short: string,
  name_translations: INameTranslation,
  slug: string,
  sport_id: number,
  venue_id: number,
}

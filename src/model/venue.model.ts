import { INameTranslation } from './sport.model';

export interface IVenueModel {
  id: number;
  slug: string;
  city: INameTranslation;
  stadium: INameTranslation;
  stadium_capacity: string;
  country_name: string;
  country_flag: string;
}

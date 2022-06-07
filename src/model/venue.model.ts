import { INameTranslation } from './sport.model';

export interface IVenueModel {
  id: number;
  slug: string;
  city: string;
  stadium: INameTranslation;
  stadium_capacity: string;
  country_name: string;
  country_flag: string;
}

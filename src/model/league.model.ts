import { INameTranslation } from './sport.model';

export interface ILeague{
  has_logo: boolean;
  id: number;
  logo: string;
  name: string;
  name_translations: INameTranslation;
  section_id: number;
  slug: string;
  sport_id: number;
}

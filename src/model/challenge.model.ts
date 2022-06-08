import { INameTranslation, ISportModel } from './sport.model';
import { ISectionModel } from './sections.model';
import { ILeague } from './league.model';

export interface IChallengeModel {
  id: number;
  name_translations: INameTranslation;
  slug: string;
  name: string;
  priority: number;
  order: number;
  sport: ISportModel;
  section: ISectionModel;
  league: ILeague;
}

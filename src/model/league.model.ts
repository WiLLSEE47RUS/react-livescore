import { INameTranslation } from './sport.model';
import { ITeam } from './team.model';

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

export interface ISeason {
  id: number;
  slug: string;
  name: string;
  year_start: string;
  year_end: string;
  league: ILeague;
}

export interface IKeys {
  [field: string]: string,
}
export interface IStandingRow {
  id: number;
  position: number;
  home_position: number;
  away_position: number;
  points: number;
  home_points: number;
  away_points: number;
  fields: IKeys;
  away_fields: IKeys;
  home_fields: IKeys;
  details: IKeys;
  team: ITeam;
}
export interface ISeasonTable {
  id: number;
  name: string;
  round: string;
  total_keys: IKeys;
  home_keys: IKeys;
  away_keys: IKeys;
  standings_rows: IStandingRow[];
}

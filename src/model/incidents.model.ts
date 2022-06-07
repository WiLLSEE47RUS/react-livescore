import { IPlayerModel } from './player.model';

export interface IIncidentsModel {
  id: number;
  incident_type: string;
  time: number;
  order: number;
  text: string;
  scoring_team: number;
  player_team: number;
  home_score: number;
  away_score: number;
  card_type: string;
  reason: string;
  length: string;
  player: IPlayerModel;
  player_two_in: IPlayerModel;
}

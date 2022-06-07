import football from '../assets/backgrounds/football.jpg';
import tennis from '../assets/backgrounds/tennis.jpg';
import basketball from '../assets/backgrounds/basketball.jpg';
import hockey from '../assets/backgrounds/hockey.jpg';
import volleyball from '../assets/backgrounds/volleyball.jpg';
import handball from '../assets/backgrounds/handball.jpg';

export enum EventsViewModes {
  ALL = 'ALL',
  LIVE = 'LIVE',
}

export const EventsViewModesTitle = {
  [EventsViewModes.ALL]: 'Все',
  [EventsViewModes.LIVE]: 'Лайв',
};

export enum EventsStatuses {
  NOT_STARTED = 'notstarted',
  INPROGRESS = 'inprogress',
  FINISHED = 'finished',
  POSTPONED = 'postponed',
  CANCELED = 'canceled',
}

export const EventsStatusesTranslations = {
  [EventsStatuses.NOT_STARTED]: 'не начат',
  [EventsStatuses.INPROGRESS]: 'лайв',
  [EventsStatuses.FINISHED]: 'матч закончен',
  [EventsStatuses.POSTPONED]: 'матч перенесен',
  [EventsStatuses.CANCELED]: 'матч отменен',
};

export const EventsStatusesColors = {
  [EventsStatuses.NOT_STARTED]: 'var(--white)',
  [EventsStatuses.INPROGRESS]: 'var(--lightGreen)',
  [EventsStatuses.FINISHED]: 'var(--lightCyan)',
  [EventsStatuses.POSTPONED]: 'var(--lightGray)',
  [EventsStatuses.CANCELED]: 'var(--lightRed)',
};


export enum EventTypes {
  FOOTBALL = 'football',
  TENNIS = 'tennis',
  BASKETBALL = 'basketball',
  HOCKEY = 'hockey',
  VOLLEYBALL = 'volleyball',
  HANDBALL = 'handball',
}

export const EventTypesBackgrounds = {
  [EventTypes.FOOTBALL]: football,
  [EventTypes.TENNIS]: tennis,
  [EventTypes.BASKETBALL]: basketball,
  [EventTypes.HOCKEY]: hockey,
  [EventTypes.VOLLEYBALL]: volleyball,
  [EventTypes.HANDBALL]: handball,
};

export enum EventsStatusesMore {
  FIRST_HALF = '1st half',
  FIRST_SET = '1st set',
  SECOND_HALF = '2nd half',
  SECOND_SET = '2nd set',
  THIRD_HALF = '3rd half',
  THIRD_SET = '3rd set',
  FOURTH_HALF = '4th half',
  WALKOVER = 'walkover',
  CANCELED = 'Canceled',
  POSTPONED = 'Postponed',
  ENDED = 'Ended',
  FT = 'FT',
  ET = 'ET',
  AET = 'AET',
}

export const EventsStatusesMoreTranslations = {
  [EventsStatusesMore.FIRST_HALF]: '1-ый тайм',
  [EventsStatusesMore.FIRST_SET]: '1-ый сет',
  [EventsStatusesMore.SECOND_HALF]: '2-ой тайм',
  [EventsStatusesMore.SECOND_SET]: '2-ой сет',
  [EventsStatusesMore.THIRD_HALF]: '3-ий тайм',
  [EventsStatusesMore.THIRD_SET]: '3-ий сет',
  [EventsStatusesMore.FOURTH_HALF]: '4-ый тайм',
  [EventsStatusesMore.WALKOVER]: 'техническое поражение',
  [EventsStatusesMore.CANCELED]: 'матч отменен',
  [EventsStatusesMore.POSTPONED]: 'матч перенесен',
  [EventsStatusesMore.ENDED]: 'матч окончен',
  [EventsStatusesMore.ET]: 'овертайм',
  [EventsStatusesMore.FT]: 'закончен в осн. время',
  [EventsStatusesMore.AET]: 'закончен в доп. время',
};

export enum MatchInfoViewModes {
  LINEUPS = 'LINEUPS',
  H2H = 'H2H',
}

export const MatchInfoViewModesTitle = {
  [MatchInfoViewModes.LINEUPS]: 'Составы',
  [MatchInfoViewModes.H2H]: 'H2H',
};


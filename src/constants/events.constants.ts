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

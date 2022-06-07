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
  STATISTICS = 'STATISTICS',
}

export const MatchInfoViewModesTitle = {
  [MatchInfoViewModes.LINEUPS]: 'Составы',
  [MatchInfoViewModes.H2H]: 'H2H',
  [MatchInfoViewModes.STATISTICS]: 'Статистика',
};


export enum EventPeriods {
  FIRST = '1st',
  SECOND = '2nd',
  THIRD = '3rd',
  FOURTH = '4th',
  FIRSTQ = '1q',
  SECONDQ = '2q',
  THIRDQ = '3q',
  FOURTHQ = '4q',
  FIFTH = '5th',
  ALL = 'all'
}

export const EventPeriodsTranslations = {
  [EventPeriods.FIRST]: '1-ый период',
  [EventPeriods.SECOND]: '2-ой период',
  [EventPeriods.THIRD]: '3-йй период',
  [EventPeriods.FOURTH]: '4-ый период',
  [EventPeriods.FIFTH]: '5-ый период',
  [EventPeriods.FIRSTQ]: '1-ая четверть',
  [EventPeriods.SECONDQ]: '2-ая четверть',
  [EventPeriods.THIRDQ]: '3-я четверть',
  [EventPeriods.FOURTHQ]: '4-ая четверть',
  [EventPeriods.ALL]: 'Весь матч',
};

export const EventStatisticsNameTranslations = {
  ball_possession: 'Владение мячом',
  total_shots: 'Ударов всего',
  shots: 'Броски',
  penalty_minutes: 'Штрафное время',
  goals: 'Голы',
  goals_in_powerplay: 'Голы в большинстве',
  shorthanded_goals: 'Голы в меньшинстве',
  faceoffs_won: 'Вбрасываний выиграно',
  blocked: 'Бросков заблокировано',
  takeaways: 'Перехваты шайбы',
  giveaways: 'Потери шайбы',
  hits: 'Силовые приемы',
  shots_on_target: 'Ударов по воротам',
  shots_off_target: 'Ударов мимо ворот',
  blocked_shots: 'Заблокировано ударов',
  corner_kicks: 'Угловые',
  offsides: 'Оффсайды',
  hit_woodwork: 'Попаданий в штангу',
  shots_inside_box: 'Ударов из штрафной',
  shots_outside_box: 'Ударов вне штрафной',
  goalkeeper_saves: 'Сейвы',
  fouls: 'Нарушения',
  passes: 'Количество пасов',
  accurate_passes: 'Точных пасов',
  long_balls: 'Длинных передач',
  crosses: 'Кроссы',
  dribbles: 'Удачных дриблингов',
  possession_lost: 'Потери мяча',
  duels_won: 'Единоборств выиграно',
  aerials_won: 'Единоборств в воздухе выиграно',
  tackles: 'Отборы мяча',
  interceptions: 'Перехваты',
  clearances: 'Выносы мяча',
  big_chances: 'Голевые моменты',
  yellow_cards: 'Желтые карточки',
  big_chances_missed: 'Упущенных голевых моментов',
  aces: 'Эйсы',
  double_faults: 'Двойных ошибок на подаче',
  first_serve: 'Первая подача',
  second_serve: 'Вторая подача',
  first_serve_points: 'Очков с первой подачи',
  second_serve_points: 'Очков с второй подачи',
  break_points_saved: 'Отыгранных брейк-поинтов',
  service_games_played: 'Сыграно геймов с подачей',
  first_serve_return_points: 'Выигранных очков на приме первой подачи',
  second_serve_return_points: 'Выигранных очков на приме второй подачи',
  break_points_converted: 'Реализация брейк-поинтов',
  return_games_played: 'Выиграно геймов на приеме',
  service_points_won: 'Выиграно очков на подаче',
  receiver_points_won: 'Выиграно очков на приеме',
  total_points_won: 'Всего выиграно очков',
  max_points_in_a_row: 'Максимум очков подряд',
  max_games_in_a_row: 'Максимум геймов подряд',
  tiebreaks: 'Выигранных тай-брейков',
  '2_pointers': 'Двух-очковые',
  '3_pointers': 'Трех-очковые',
  field_goals: 'Попадания с игры',
  rebounds: 'Подборы',
  timeouts: 'Таймауты',
  time_spent_in_lead: 'Времени лидерства',
  lead_changes: 'Смены лидерства в счете',
  biggest_lead: 'Наибольшее преимущество',
  service_errors: 'Ошибок на подаче',
  '7_meters': '7-метровые',
  'goal_streak': 'Голевая серия',
  '2_min_penalty': 'Двухминутные удаления',
};

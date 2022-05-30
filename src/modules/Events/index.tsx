import React, { ChangeEvent, FC, useEffect, useMemo, useState } from 'react';
import {
  Content,
  EventItem,
  EventsHeader,
  EventsList,
  EventsModeButton,
  GridItem,
  SectionItem,
  SectionsList,
  TeamInfo,
  Wrapper,
} from './Events.styled';
import { EventsPropsType } from './Events.types';
import Fade from 'react-reveal/Fade';
import { useParams } from 'react-router';
import { TransitionGroup } from 'react-transition-group';
import { useGetEventsBySportIdQuery, useGetSectionsBySportIdQuery } from '../../services/api';
import { getTranslations } from '../../utils/translations';
import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import { InputAdornment, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { FlexContainer } from '../../components/common.styled';
import {
  EventsStatusesTranslations,
  EventsViewModes,
  EventsViewModesTitle,
  EventTypes,
} from '../../constants/events.constants';
import { useAppDispatch, useAppSelector } from '../../store';
import { DEFAULT_DEBOUNCE, DEFAULT_SPORT_ID } from '../../constants/api.constants';
import { Spinner } from '../../components/Spinner';
import { setSearchValue } from '../../store/events/events.slice';
import { Search } from '@mui/icons-material';
import { useDebounce } from '../../hooks/useDebounce';
import { eventModalActions } from '../../store/eventModal/eventModal.slice';
import Event from '../../components/Event';

const Events: FC<EventsPropsType> = () => {
  const [date, setDate] = useState(moment());
  const [isInit, setIsInit] = useState(false);
  const [eventsViewMode, setEventsViewMode] = useState<EventsViewModes>(EventsViewModes.ALL);
  const debouncedDate = useDebounce(date, DEFAULT_DEBOUNCE);
  const { id } = useParams<{ id: EventTypes }>();

  const { sportTypes } = useAppSelector(state => state.sportTypes);
  const { searchValue } = useAppSelector(state => state.events);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsInit(true);
  }, []);

  const sportId = useMemo(() => {
    return sportTypes?.find(el => el.slug === id)?.id || DEFAULT_SPORT_ID;
  }, [id, sportTypes]);

  const { data, isLoading: isSectionsLoading, isFetching: isSectionsFetching } = useGetSectionsBySportIdQuery(sportId);
  const { data: eventsData, isLoading: isEventsLoading, isFetching: isEventsFetching } = useGetEventsBySportIdQuery({
    id: sportId,
    mode: eventsViewMode,
    date: moment(isInit ? debouncedDate : date).format('YYYY-MM-DD'),
  }, {
    // скрыто дабы не тратить кол-во запросов доступных
    // ...(eventsViewMode === EventsViewModes.LIVE && { pollingInterval: DEFAULT_LIVE_POLLING_INTERVAL })
  });

  const sections = useMemo(() =>
    data && [...data.data]
      .sort((a, b) => a.name_translations.ru && b.name_translations.ru
        ? a.name_translations.ru.localeCompare(b?.name_translations?.ru) : a.name.localeCompare(b.name))
    || [], [data]);

  const events = useMemo(() => eventsData && [...eventsData.data]
    .filter(event => event.home_team.name.toLowerCase().includes(searchValue.toLowerCase())
      || getTranslations(event.home_team).toLowerCase().includes(searchValue.toLowerCase())
      || getTranslations(event.away_team).toLowerCase().includes(searchValue.toLowerCase())
      || getTranslations(event.away_team).toLowerCase().includes(searchValue.toLowerCase()))
    .sort((a, b) => moment(a.start_at, 'YYYY-MM-DD HH:mm:ss')
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      .isBefore(moment(b.start_at, 'YYYY-MM-DD HH:mm:ss')) ? -1 : 1) || [], [eventsData, searchValue]);

  const handleChangeSearchValue = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  const handleOpenEventModal = (id: number) => {
    dispatch(eventModalActions.openEventModal(id));
  };

  return (
    <Wrapper>
      <Content>
        <GridItem id={id || EventTypes.FOOTBALL}>
          <SectionsList>
            {!isSectionsLoading && !isSectionsFetching ? sections.map(section => (
              <SectionItem key={section.slug}>
                <span className={`flags flags--category flags--md flags--${section.flag}`} />
                {getTranslations(section)}
              </SectionItem>
            )) : <Spinner width='50' />}
          </SectionsList>
        </GridItem>
        <TransitionGroup appear enter exit key={id}>
          <Fade>
            <GridItem id={id || EventTypes.FOOTBALL}>
              <EventsHeader>
                <FlexContainer>
                  <EventsModeButton
                    active={eventsViewMode === EventsViewModes.ALL}
                    onClick={() => setEventsViewMode(EventsViewModes.ALL)}
                    mode={EventsViewModes.ALL}
                  >
                    {EventsViewModesTitle[EventsViewModes.ALL]}
                  </EventsModeButton>
                  <EventsModeButton
                    active={eventsViewMode === EventsViewModes.LIVE}
                    onClick={() => setEventsViewMode(EventsViewModes.LIVE)}
                    mode={EventsViewModes.LIVE}
                  >
                    {EventsViewModesTitle[EventsViewModes.LIVE]}
                  </EventsModeButton>
                </FlexContainer>
                <TextField
                  value={searchValue}
                  onChange={handleChangeSearchValue}
                  variant='standard'
                  placeholder='Название команды'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />
                {eventsViewMode === EventsViewModes.ALL && (
                  <LocalizationProvider dateAdapter={AdapterMoment} locale={'ru'}>
                    <DatePicker
                      value={date}
                      onChange={(date) => {
                        date && setDate(date);
                      }}
                      renderInput={(params) =>
                        <TextField
                          {...params}
                          classes={{ root: 'datePickerInput' }}
                        />}
                    />
                  </LocalizationProvider>
                )}
              </EventsHeader>
              <EventsList>
                {!isEventsLoading && !isEventsFetching ? events.map(el => (
                  <EventItem
                    key={el.id}
                    status={el.status}
                    onClick={() => handleOpenEventModal(el.id)}
                  >
                    <TeamInfo>
                      {el.home_team.has_logo && (<img src={el.home_team.logo} alt='homeTeamLogo' />)}
                      {getTranslations(el.home_team)}
                    </TeamInfo>
                    <div className='score'>
                      <span>
                        {moment(el.start_at, 'YYYY-MM-DD HH:mm:ss').format('HH:mm')}
                      </span>
                      {el.home_score ? el.home_score.current : 0} - {el.away_score ? el.away_score.current : 0}
                      <span className='status'>
                        {EventsStatusesTranslations[el.status]}
                      </span>
                    </div>
                    <TeamInfo className='awayTeam'>
                      {el.away_team.has_logo && (<img src={el.away_team.logo} alt='awayTeamLogo' />)}
                      {getTranslations(el.away_team)}
                    </TeamInfo>
                  </EventItem>
                )) : (
                  <Spinner width='50' />
                )}
              </EventsList>
            </GridItem>
          </Fade>
        </TransitionGroup>
      </Content>
      <Event />
    </Wrapper>
  );
};

export default Events;

import React, { ChangeEvent, FC, useEffect, useMemo, useState } from 'react';
import { EventItemWrapper, EventsHeader, EventsListContainer, EventsModeButton, TeamInfo } from './EventsList.styled';
import { FlexContainer } from '../common/common.styled';
import {
  EventsStatusesTranslations,
  EventsViewModes,
  EventsViewModesTitle,
} from '../../constants/events.constants';
import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers';
import { getTranslations } from '../../utils/translations';
import { formatEventStartDate, groupBy } from '../../utils/common';
import { DEFAULT_TIME_FORMAT, DEFAULT_TIME_ZONE } from '../../constants/common.constants';
import { Spinner } from '../Spinner';
import moment from 'moment-timezone';
import { useDebounce } from '../../hooks/useDebounce';
import { DEFAULT_DEBOUNCE } from '../../constants/api.constants';
import { useAppDispatch, useAppSelector } from '../../store';
import { useGetEventsBySportIdQuery } from '../../services/api';
import { setSearchValue } from '../../store/events/events.slice';
import { eventModalActions } from '../../store/eventModal/eventModal.slice';
import EventItem from '../EventItem';
import { challengeModalActions } from '../../store/challengeModal/challengeModal.slice';

const EventsList:FC<{ sportId: number }> = ({ sportId }) => {
  const [date, setDate] = useState(moment());
  const [isInit, setIsInit] = useState(false);
  const [eventsViewMode, setEventsViewMode] = useState<EventsViewModes>(EventsViewModes.ALL);
  const debouncedDate = useDebounce(date, DEFAULT_DEBOUNCE);

  const { searchValue, selectedSectionId } = useAppSelector(state => state.events);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsInit(true);
  }, []);


  const { data: eventsData, isLoading: isEventsLoading, isFetching: isEventsFetching } = useGetEventsBySportIdQuery({
    id: sportId,
    mode: eventsViewMode,
    date: moment(isInit ? debouncedDate : date).format('YYYY-MM-DD'),
  }, {
    // скрыто дабы не тратить кол-во запросов доступных
    // ...(eventsViewMode === EventsViewModes.LIVE && { pollingInterval: DEFAULT_LIVE_POLLING_INTERVAL })
  });

  const events = useMemo(() => eventsData && [...eventsData.data]
    .filter(event => event.home_team.name.toLowerCase().includes(searchValue.toLowerCase())
      || getTranslations(event.home_team).toLowerCase().includes(searchValue.toLowerCase())
      || getTranslations(event.away_team).toLowerCase().includes(searchValue.toLowerCase())
      || getTranslations(event.away_team).toLowerCase().includes(searchValue.toLowerCase()))
    .sort((a, b) => moment(a.start_at, 'YYYY-MM-DD HH:mm:ss')
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      .isBefore(moment(b.start_at, 'YYYY-MM-DD HH:mm:ss')) ? -1 : 1)
    .filter(event => event.section.id === selectedSectionId || !selectedSectionId) || [],
  [eventsData, searchValue, selectedSectionId]);

  const handleChangeSearchValue = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const groupedByChallenge = Object.values(groupBy(
    events,
    event => event?.league?.slug || event.challenge.slug || event.section.slug)
  ).sort((a, b) => b[0].section.priority - a[0].section.priority);

  const handleOpenChallengeModal = (id: number) => {
    dispatch(challengeModalActions.openChallengeModal(id));
  };

  return (
    <>
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
      <EventsListContainer>
        {!isEventsLoading && !isEventsFetching ? (groupedByChallenge.map(group => (
          <>
            <h2 onClick={() => handleOpenChallengeModal(group[0].league_id)}>
              {getTranslations(group[0]?.league || group[0]?.challenge)}
            </h2>
            {group.map (el => <EventItem event={el} key={el.id}/>)}
          </>
        ))) : (
          <Spinner width='50' />
        )}
      </EventsListContainer>
    </>
  );
};

export default EventsList;

import React, { FC, useMemo, useState } from 'react';
import { Content, EventItem, EventsHeader, EventsModeButton, GridItem, SectionItem, Wrapper } from './Events.styled';
import { EventsPropsType } from './Events.types';
import Fade from 'react-reveal/Fade';
import { useParams } from 'react-router';
import { TransitionGroup } from 'react-transition-group';
import { useGetEventsBySportIdQuery, useGetSectionsBySportIdQuery } from '../../services/api';
import { getTranslations } from '../../utils/translations';
import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { FlexContainer } from '../../components/common.styled';
import { EventsViewModes, EventsViewModesTitle } from '../../constants/events.constants';
import { useAppSelector } from '../../store';
import { DEFAULT_SPORT_ID } from '../../constants/api.constants';
import { Spinner } from '../../components/Spinner';

const Events: FC<EventsPropsType> = () => {
  const [date, setDate] = useState(moment());
  const [eventsViewMode, setEventsViewMode] = useState<EventsViewModes>(EventsViewModes.ALL);
  const { id } = useParams();
  const { sportTypes } = useAppSelector(state => state.sportTypes);

  const sportId = useMemo(() => {
    return sportTypes && sportTypes.find(el => el.slug === id)?.id || DEFAULT_SPORT_ID;
  }, [id, sportTypes]);

  const { data, isLoading: isSectionsLoading } = useGetSectionsBySportIdQuery(sportId);
  const { data: eventsData } = useGetEventsBySportIdQuery({
    id: sportId,
    mode: eventsViewMode,
    date: moment(date).format('YYYY-MM-DD')
  });

  const sections = useMemo(() =>
    data && [...data.data]
      .sort((a, b) => a.name_translations.ru && b.name_translations.ru
        ? a.name_translations.ru.localeCompare(b?.name_translations?.ru) : a.name.localeCompare(b.name))
    || [], [data]);

  const events = useMemo(() => eventsData && [...eventsData.data]
    .sort((a, b) => moment(a.start_at, 'YYYY-MM-DD HH:mm:ss')
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      .isBefore(moment(b.start_at, 'YYYY-MM-DD HH:mm:ss')) ? -1 : 1) || [], [eventsData]);
  console.log(events);
  return (
    <Wrapper>
      <TransitionGroup appear enter exit key={id}>
        <Fade>
          <Content>
            <GridItem>
              {!isSectionsLoading ? sections.map(section => (
                <SectionItem key={section.slug}>
                  <span className={`flags flags--category flags--md flags--${section.flag}`} />
                  {getTranslations(section)}
                </SectionItem>
              )) : <Spinner width='50' />}
            </GridItem>
            <GridItem>
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
                        disabled={true}
                      />}
                  />
                </LocalizationProvider>
              </EventsHeader>
              {events.map(el => (
                <EventItem key={el.id}>
                  <div>
                    {el.home_team.has_logo && (<img src={el.home_team.logo} alt='homeTeamLogo' />)}
                    {getTranslations(el.home_team)}
                  </div>
                  <div className="score">
                    {moment(el.start_at, 'YYYY-MM-DD HH:mm:ss').format('HH:mm')} <br/>
                    {el.home_score ? el.home_score.current : 0} - {el.away_score ? el.away_score.current : 0} <br/>
                    {el.status}
                  </div>
                  <div className="awayTeam">
                    {el.away_team.has_logo && (<img src={el.away_team.logo} alt='awayTeamLogo' />)}
                    {getTranslations(el.away_team)}
                  </div>
                </EventItem>
              ))}
            </GridItem>
          </Content>
        </Fade>
      </TransitionGroup>

    </Wrapper>
  );
};

export default Events;

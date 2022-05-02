import React, {FC, useMemo, useState} from 'react';
import {Content, EventsHeader, EventsModeButton, GridItem, SectionItem, Wrapper} from './Events.styled';
import {EventsPropsType} from './Events.types';
import Fade from 'react-reveal/Fade';
import {useParams} from 'react-router';
import {TransitionGroup} from 'react-transition-group';
import {useGetSectionsBySportIdQuery} from '../../services/sections';
import {Spinner} from '../../components/Spinner';
import {getTranslations} from '../../utils/translations';
import {DatePicker} from '@mui/x-date-pickers';
import moment from 'moment';
import {TextField} from '@mui/material';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {FlexContainer} from '../../components/common.styled';
import {EventsViewModes, EventsViewModesTitle} from '../../constants/events.constants';

const Events: FC<EventsPropsType> = () => {
  const [date, setDate] = useState(moment());
  const [eventsViewMode, setEventsViewMode] = useState<EventsViewModes>(EventsViewModes.ALL);
  const { id } = useParams();

  const { data, isLoading } = useGetSectionsBySportIdQuery(1);
  const sections = useMemo(() =>
    data && [...data.data].sort((a,b) => a.name.localeCompare(b.name)) || [], [data]);

  if(isLoading) return <Spinner width="50"/>;
  console.log(sections);

  return (
    <Wrapper>
      <TransitionGroup appear enter exit key={id}>
        <Fade>
          <Content>
            <GridItem>{sections.map(section => (
              <SectionItem key={section.slug}>
                <span className={`flags flags--category flags--md flags--${section.flag}`}/>
                {getTranslations(section)}
              </SectionItem>
            ))}
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
                    onChange={(date) => { date && setDate(date); }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </EventsHeader>
            </GridItem>
          </Content>
        </Fade>
      </TransitionGroup>

    </Wrapper>
  );
};

export default Events;

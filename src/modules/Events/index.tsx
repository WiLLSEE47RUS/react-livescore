import React, { FC, useMemo } from 'react';
import {
  Content,
  GridItem,
  Wrapper,
} from './Events.styled';
import { EventsPropsType } from './Events.types';
import Fade from 'react-reveal/Fade';
import { TransitionGroup } from 'react-transition-group';
import {
  EventTypes,
} from '../../constants/events.constants';

import Event from '../../components/Event';
import SectionsList from '../../components/SectionsList';
import EventsList from '../../components/EventsList';
import { useParams } from 'react-router';
import { DEFAULT_SPORT_ID } from '../../constants/api.constants';
import { useAppSelector } from '../../store';
import ChallengeModal from '../../components/ChallengeModal';
import TeamModal from '../../components/TeamModal';
const Events: FC<EventsPropsType> = () => {

  const { id } = useParams<{ id: EventTypes }>();
  const { sportTypes } = useAppSelector(state => state.sportTypes);

  const sportId = useMemo(() => {
    return sportTypes?.find(el => el.slug === id)?.id || DEFAULT_SPORT_ID;
  }, [id, sportTypes]);

  return (
    <Wrapper>
      <Content>
        <GridItem id={id || EventTypes.FOOTBALL}>
          <SectionsList sportId={sportId} />
        </GridItem>
        <TransitionGroup appear enter exit key={id}>
          <Fade>
            <GridItem id={id || EventTypes.FOOTBALL}>
              <EventsList sportId={sportId}/>
            </GridItem>
          </Fade>
        </TransitionGroup>
      </Content>
      <Event />
      <ChallengeModal/>
      <TeamModal/>
    </Wrapper>
  );
};

export default Events;

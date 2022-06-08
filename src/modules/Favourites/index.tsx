import React from 'react';
import { Content, Wrapper, GridItem } from '../Events/Events.styled';
import { EventTypes, EventTypesBackgroundColors, EventTypesTranslations } from '../../constants/events.constants';
import { IEvent } from '../../model/events.model';
import EventItem from '../../components/EventItem';
import { groupBy } from '../../utils/common';
import Event from '../../components/Event';
import { Tooltip } from '@mui/material';
import { getTranslations } from '../../utils/translations';
import { SectionItem, SectionsListContainer } from '../../components/SectionsList/SectionsList.styled';
import { ILeague } from '../../model/league.model';
import { challengeModalActions } from '../../store/challengeModal/challengeModal.slice';
import { useAppDispatch } from '../../store';
import ChallengeModal from '../../components/ChallengeModal';


const Favourites = () => {
  const currentFavourites: IEvent[] = JSON.parse(localStorage.getItem('favouritesEvents') || '[]');
  const currentFavouritesLeagues: ILeague[] = JSON.parse(localStorage.getItem('favouritesLeagues') || '[]');
  const groupedBy = Object.values(groupBy(currentFavourites, el => el.sport.slug));
  const dispatch = useAppDispatch();

  const handleOpenChallengeModal = (id: number) => {
    dispatch(challengeModalActions.openChallengeModal(id));
  };

  return (
    <Wrapper>
      <Content>
        <GridItem id={EventTypes.FOOTBALL}>
          <h2 style={{ background: 'var(--lightGray)', textAlign: 'center', color: '#333'}}>
            Чемпионаты
          </h2>
          <SectionsListContainer>
            {currentFavouritesLeagues.map(league => (
              <Tooltip
                key={league.slug}
                title={'Выбрать категорию: ' + getTranslations(league)}
                placement="top-end"
              >
                <SectionItem
                  onClick={() => handleOpenChallengeModal(league.id)}
                  isActive={false}
                >
                  {league.has_logo && <img src={league.logo} alt='logo' />}
                  {getTranslations(league)}
                </SectionItem>
              </Tooltip>
            ))}
          </SectionsListContainer>
        </GridItem>
        <GridItem id={EventTypes.FOOTBALL}>
          <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(15px)', height: '100%'}}>
            {groupedBy.map((group) => (
              <>
                <h2 style={{ background: EventTypesBackgroundColors[group[0].sport.slug], textAlign: 'center', color: '#353535'}}>
                  {EventTypesTranslations[group[0].sport.slug]}
                </h2>
                {group.map(el => <EventItem event={el} key={el.id}/>)}
              </>
            ))}
          </div>
        </GridItem>
      </Content>
      <Event />
      <ChallengeModal />
    </Wrapper>
  );
};

export default Favourites;

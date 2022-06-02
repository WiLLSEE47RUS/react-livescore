import React, { FC, useMemo } from 'react';
import { Box, Modal } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { eventModalActions, eventModalSelector } from '../../store/eventModal/eventModal.slice';
import { useGetEventDataByIdQuery } from '../../services/api';
import { Spinner } from '../Spinner';
import { getTranslations } from '../../utils/translations';
import { EventsStatusesTranslations } from '../../constants/events.constants';
import { EventItem } from '../../modules/Events/Events.styled';
import { DEFAULT_TIME_FORMAT, DEFAULT_TIME_ZONE } from '../../constants/common.constants';
import { formatEventStartDate } from '../../utils/common';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1140,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'text.primary',
  overflow: 'hidden',
};

const Event: FC = () => {
  const { eventId, isOpen } = useAppSelector(eventModalSelector);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(eventModalActions.closeEventModal());
  };

  const { data, isLoading, isFetching } = useGetEventDataByIdQuery(eventId, { skip: !eventId });

  const eventsData = useMemo(() => data?.data, [data]);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
    >
      <Box sx={style}>
        {!isLoading && !isFetching && eventsData ? (
          <EventItem status={eventsData.status}>
            <div>
              {eventsData.home_team.has_logo && (<img src={eventsData.home_team.logo} alt='homeTeamLogo' />)}
              {getTranslations(eventsData.home_team)}
            </div>
            <div className='score'>
              <span>
                {formatEventStartDate(eventsData.start_at).tz(DEFAULT_TIME_ZONE).format(DEFAULT_TIME_FORMAT)}
              </span>
              {eventsData.home_score ? eventsData.home_score.current : 0}
              -
              {eventsData.away_score ? eventsData.away_score.current : 0}
              <span className='status'>
                {EventsStatusesTranslations[eventsData.status]}
              </span>
            </div>
            <div className='awayTeam'>
              {getTranslations(eventsData.away_team)}
              {eventsData.away_team.has_logo && (<img src={eventsData.away_team.logo} alt='awayTeamLogo' />)}
            </div>
          </EventItem>
        ) : (
          <Spinner width='50' />
        )}
      </Box>
    </Modal>
  );
};

export default Event;

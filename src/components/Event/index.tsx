import React, { FC, useMemo } from 'react';
import { Box, Modal } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { eventModalActions, eventModalSelector } from '../../store/eventModal/eventModal.slice';
import { useGetEventDataByIdQuery } from '../../services/api';
import { Spinner } from '../Spinner';
import { getTranslations } from '../../utils/translations';
import {
  EventsStatuses,
  EventsStatusesMoreTranslations,
  EventsStatusesTranslations,
} from '../../constants/events.constants';
import { DEFAULT_EVENT_TIME_FORMAT, DEFAULT_TIME_ZONE } from '../../constants/common.constants';
import { formatEventStartDate } from '../../utils/common';
import {
  EventTeamInfo,
  EventScoreInfo,
  EventInfoWrapper,
  EventHeaderWrapper,
  EventsHeaderDivider,
  EventWrapper,
} from './Event.styled';
// import StadiumIcon from '@mui/icons-material/Stadium';
// import { FlexContainer } from '../common/common.styled';
import CountDownTimer from '../common/CountDownTimer';
import MatchInfo from '../MatchInfo';
// import moment from 'moment';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1340,
  height: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'text.primary',
  overflow: 'auto',
};

const Event: FC = () => {
  const { eventId, isOpen } = useAppSelector(eventModalSelector);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(eventModalActions.closeEventModal());
  };

  const { data, isLoading, isFetching } = useGetEventDataByIdQuery(eventId, { skip: !eventId });

  const eventData = useMemo(() => data?.data, [data]);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
    >
      <Box sx={style}>
        {!isLoading && !isFetching && eventData ? (
          <EventWrapper>
            <EventHeaderWrapper>
              <span className={`flags flags--category flags--md flags--${eventData.section.flag}`} />
              <EventsHeaderDivider />
              {eventData.league
                ? (<span>{getTranslations(eventData.league)}</span>)
                : (<span>{getTranslations(eventData.challenge)}</span>)
              }
              <EventsHeaderDivider />
              <span>{eventData.name}</span>
              <EventsHeaderDivider />
              <span>{EventsStatusesTranslations[eventData.status]}</span>
              {eventData.result_only && (
                <>
                  <EventsHeaderDivider />
                  <span>только результат</span>
                </>
              )}
              {/*{!!eventData?.venue?.stadium && (*/}
              {/*  <FlexContainer ai="center" cg="5px">*/}
              {/*    <StadiumIcon />*/}
              {/*    {eventData?.venue?.stadium.ru ? eventData?.venue?.stadium.ru : eventData?.venue?.stadium.en}*/}
              {/*  </FlexContainer>*/}
              {/*)}*/}
            </EventHeaderWrapper>
            <EventInfoWrapper>
              <EventTeamInfo>
                {eventData.home_team.has_logo && (<img src={eventData.home_team.logo} alt='homeTeamLogo' />)}
                {getTranslations(eventData.home_team)}
              </EventTeamInfo>
              <EventScoreInfo status={eventData.status}>
                <>
                  <span>
                    {formatEventStartDate(eventData.start_at).tz(DEFAULT_TIME_ZONE).format(DEFAULT_EVENT_TIME_FORMAT)}
                  </span>
                  {eventData.status === EventsStatuses.NOT_STARTED ? (
                    <CountDownTimer
                      eventTime={formatEventStartDate(eventData.start_at).tz(DEFAULT_TIME_ZONE).valueOf()}
                      interval={1000}
                    />
                  ) : (
                    eventData.status !== EventsStatuses.POSTPONED && eventData.status !== EventsStatuses.CANCELED && (
                      <>
                        {eventData.home_score ? eventData.home_score.current : 0}
                          -
                        {eventData.away_score ? eventData.away_score.current : 0}
                      </>
                    )
                  )}
                  <span className='status'>
                    {!eventData.status_more
                      ? EventsStatusesTranslations[eventData.status]
                      : eventData.status_more in EventsStatusesMoreTranslations
                        ? EventsStatusesMoreTranslations[eventData.status_more]
                        : !isNaN(parseInt(eventData.status_more, 10)) ? eventData.status_more + '\'' : ''
                    }
                  </span>
                </>
              </EventScoreInfo>
              <EventTeamInfo>
                {eventData.away_team.has_logo && (<img src={eventData.away_team.logo} alt='awayTeamLogo' />)}
                {getTranslations(eventData.away_team)}
              </EventTeamInfo>
            </EventInfoWrapper>
            {!eventData.result_only
              && eventData.status !== EventsStatuses.POSTPONED
              && eventData.status !== EventsStatuses.CANCELED
              && <MatchInfo eventData={eventData} />
            }
          </EventWrapper>
        ) : (
          <Spinner width='50' />
        )}
      </Box>
    </Modal>
  );
};

export default Event;

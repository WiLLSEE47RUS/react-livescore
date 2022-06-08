import styled from 'styled-components';
import { EventsStatuses, EventsStatusesColors } from '../../constants/events.constants';

export const EventWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  overflow-y: scroll;
`;

export const EventHeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  font-size: 20px;
  background-color: var(--lightGray);
  color: var(--midGray);
`;
export const EventsHeaderDivider = styled.div`
  height: 32px;
  margin: 0 15px;
  border: none;
  border-left: 4px var(--darkGray) solid;
  transform: rotate(30deg);
`;
export const EventInfoWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 250px 1fr;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const EventTeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 150px;
    width: 150px;
  }
`;

export const EventScoreInfo = styled.div<{ status: EventsStatuses }>`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 700;
  color: var(--white);
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(50px);

  span {
    font-size: 18px;
    font-weight: 400;
    color: var(--gray)
  }

  .status {
    font-size: 20px;
    font-weight: 600;
    color: ${props => EventsStatusesColors[props.status]}
  }
`;


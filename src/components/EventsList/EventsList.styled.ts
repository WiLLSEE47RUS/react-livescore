import styled from 'styled-components';
import { FlexContainer } from '../common/common.styled';
import { EventsStatuses, EventsStatusesColors, EventsViewModes } from '../../constants/events.constants';

export const EventsHeader = styled(FlexContainer)`
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid var(--lightGray);
  position: sticky;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(50px);
  height: 80px;
  div:last-child {
    justify-self: end;
  }
`;


export const EventsListContainer = styled.div`
  height: calc(100% - 80px);
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const EventsModeButton = styled.div<{ mode: EventsViewModes, active?: boolean }>`
  display: flex;
  width: 60px;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: 700;
  background-color: ${props => props.mode === EventsViewModes.ALL ? 'var(--darkBlue)' : 'var(--darkOrange)'};
  cursor: pointer;
  border-bottom: ${props => props.active ? '1px solid var(--white)' : 'none'};
  margin-right: 10px;
  transition: all 0.5s ease;
`;
export const EventItem = styled.div<{ status: EventsStatuses }>`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 150px 1fr;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  font-size: 24px;

  .score {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: 700;
    color: var(--white);
    line-height: 20px;
    background-color: rgba(0,0,0,0.4);
    backdrop-filter: blur(50px);
    span {
      font-size: 12px;
      font-weight: 400;
      color: var(--gray)
    }

    .status {
      font-size: 14px;
      font-weight: 600;
      color: ${props => EventsStatusesColors[props.status]}
    }
  }

  .awayTeam {
    justify-self: end;
    text-align: end;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray);
  }

  transition: all 0.3s ease;

  &:hover {
    background-color: var(--darkBlueTP);
    cursor: pointer;
  }
`;

export const TeamInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  color: var(--white);

`;

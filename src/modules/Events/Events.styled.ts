import styled from 'styled-components';
import {FlexContainer} from '../../components/common.styled';
import { EventsStatuses, EventsStatusesColors, EventsViewModes } from '../../constants/events.constants';
export const Wrapper = styled.div`
  height: calc(100vh - 60px - 10vh);
  padding-top: 15px;
`;

export const Content = styled.main`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100%;
  max-height: calc(100vh - 60px - 15vh);
  gap: 15px;
`;
export const GridItem = styled.div`
  border-radius: 15px 0 0 15px;
  border: 1px solid #aaa;
  height: calc(100vh - 60px - 10vh);
  color: #aaa;
  font-size: 20px;
  font-weight: 700;
  overflow-y: scroll;
`;

export const SectionItem = styled(FlexContainer)`
  column-gap: 5px;
  margin: 5px;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
`;

export const EventsHeader = styled(FlexContainer)`
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid var(--lightGray);
  position: sticky;
  top: 0;
  left: 0;
  background: var(--midGray);
`;

export const EventsModeButton = styled.div<{mode: EventsViewModes, active?: boolean}>`
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
  grid-template-columns: 1fr 150px 1fr;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 0 5px;
  font-size: 24px;

  .score{
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: 700;
    color: var(--white);
    line-height: 20px;
    span{
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
  .awayTeam{
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
  img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  color: var(--white);

`;

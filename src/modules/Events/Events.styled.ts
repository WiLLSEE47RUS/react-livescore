import styled from 'styled-components';
import {FlexContainer} from '../../components/common.styled';
import {EventsViewModes} from '../../constants/events.constants';
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
  border-radius: 15px;
  border: 1px solid #aaa;
  min-height: calc(100vh - 60px - 10vh);
  padding: 5px;
  color: #aaa;
  font-size: 20px;
  font-weight: 700;
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

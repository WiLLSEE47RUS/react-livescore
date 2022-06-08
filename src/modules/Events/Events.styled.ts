import styled from 'styled-components';
import {
  EventTypes,
  EventTypesBackgrounds,
} from '../../constants/events.constants';

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
export const GridItem = styled.div<{id: EventTypes}>`
  height: calc(100vh - 60px - 15vh);
  color: #aaa;
  font-size: 20px;
  font-weight: 700;
  background: url(${props => EventTypesBackgrounds[props.id]})  no-repeat;
  overflow: overlay;
  &:last-child {
    background-position: bottom;
    background-size: cover;
  }
`;



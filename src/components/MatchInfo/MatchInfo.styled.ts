import styled from 'styled-components';
import { MatchInfoViewModes } from '../../constants/events.constants';

export const MatchInfoWrapper = styled.div`
  width: 100%;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 20px;
  background-color: var(--lightGray);
  color: var(--midGray);
  h2{
    text-align: center;
    font-size: inherit;
    border-bottom: 1px solid var(--midGray);
  }
`;

export const MatchInfoViewModesWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 5px 0;
`;
export const MatchInfoViewModeButton = styled.div<{ mode: MatchInfoViewModes, active?: boolean }>`
  display: flex;
  min-height: 40px;
  padding: 0 5px;
  align-items: center;
  justify-content: center;
  color: ${props => !props.active ? 'var(--lightGray)' : 'var(--darkGray)'};
  font-weight: 700;
  background-color: ${props => !props.active ? 'var(--gray)' : 'var(--activeLinkBackground)'};
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.5s ease;
  border-radius: 4px;
`;

export const MatchInfoContent = styled.div`
  width: 100%;
  color: var(--darkBlue);
`;

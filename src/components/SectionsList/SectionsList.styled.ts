import styled from 'styled-components';
import { FlexContainer } from '../common/common.styled';

export const SectionsListContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  padding: 5px;
  row-gap: 5px;
  overflow-y: scroll;
  height: 100%    ;
`;
export const SectionItem = styled(FlexContainer)<{isActive: boolean}>`
  column-gap: 5px;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
  background: ${props => props.isActive ? 'rgba(255,255,255,0.4)' : 'none'};
  transition: all 0.3s ease;
  &:hover {
    background: ${props => !props.isActive ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)'};
    cursor: pointer;
  }
`;

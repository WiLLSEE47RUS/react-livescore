import styled from 'styled-components';

export const FlexContainer = styled.div<{ jc?: string }>`
  display: flex;
  justify-content: ${props => props.jc};
`;

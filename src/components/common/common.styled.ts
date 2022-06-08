import styled from 'styled-components';

export const FlexContainer = styled.div<{ jc?: string; ai?: string, cg?: string; fd?: string; rg?: string; }>`
  display: flex;
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
  column-gap: ${props => props.cg};
  row-gap: ${props => props.rg};
  flex-direction: ${props => props.fd || 'row'};
`;

export const Divider = styled.div`
  width: 2px;
  height: 100%;
  background-color: var(--darkBlue);
`;

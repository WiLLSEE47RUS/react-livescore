import styled from 'styled-components';

const borderPath = 0.1;

export const Spinner = styled.div<{ width: string }>`
  height: ${(props): string => props.width + 'px'};
  width: ${(props): string => props.width + 'px'}; 
  margin: 0 auto;
  border-radius: 50%;
  border: var(--midGray) ${(props): string => `${+props.width * borderPath}` + 'px'} solid;
  border-top-color: var(--activeLinkBackground);
  border-bottom-color: #eee;
  animation: spin 2s infinite ease-in-out;
  @keyframes spin {
    50% {
      transform: rotate(360deg);
      border-bottom-color: var(--activeLinkBackground);
      border-top-color: #eee;
    }
    100%{
      transform: rotate(0deg);
      border-top-color: var(--activeLinkBackground);
      border-bottom-color: #eee;
    }
  }
`;

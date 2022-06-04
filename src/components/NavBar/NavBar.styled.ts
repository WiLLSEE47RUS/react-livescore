import styled from 'styled-components';

export const Wrapper = styled.div`
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .active, .active:hover {
    background: var(--activeLinkBackground);

    span {
      color: var(--darkGray)
    }
  }
`;

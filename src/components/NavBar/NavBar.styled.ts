import styled from 'styled-components';

export const Wrapper = styled.div`
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .active, .active:hover {
    background: #ff9700;

    span {
      color: #333;
    }
  }
`;

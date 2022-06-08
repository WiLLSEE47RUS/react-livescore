import styled from 'styled-components';
import { FC } from 'react';
const Container = styled.div`
  height: 20px;
  width: 100px;
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 10s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: var(--gray);
  width: 100%;
`;

const Progress = styled(BaseBox)<{ percent: number }>`
  padding: 0 5px;
  background: var(--darkBlue);
  width: ${({ percent }) => percent}%;
  color: var(--white);
  font-size: 16px;
  font-weight: 700;
`;
const ProgressBar: FC<{ percent: number }> = ({ percent }) => {
  return (
    <Container>
      <Background />
      <Progress percent={percent}>
        {percent}%
      </Progress>
    </Container>
  );
};

export default ProgressBar;

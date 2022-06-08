import React, { FC } from 'react';
import { IVenueModel } from '../../model/venue.model';
import { StadiumInfoWrapper } from './StadiumInfo.styled';
import { FlexContainer } from '../common/common.styled';
import StadiumIcon from '@mui/icons-material/Stadium';

const StadiumInfo: FC<{ venue: IVenueModel }> = ({ venue }) => {
  return (
    <StadiumInfoWrapper>
      <FlexContainer jc="space-evenly" style={{ width: '70%' }}>
        <FlexContainer fd="column" rg="5px" ai="center">
          <span>{venue?.country_name || 'H/Д'}</span>
          <span style={{ fontWeight: 700 }}>Страна проведения</span>
        </FlexContainer>
        <FlexContainer fd="column" rg="5px" ai="center">
          <span>{venue?.city.ru ? venue?.city.ru : venue?.city.en || 'H/Д'}</span>
          <span style={{ fontWeight: 700 }}>Город проведения</span>
        </FlexContainer>
        <FlexContainer fd="column" rg="5px" ai="center">
          <span>{venue?.stadium.ru ? venue?.stadium.ru : venue?.stadium.en || 'H/Д'}</span>
          <span style={{ fontWeight: 700 }}><StadiumIcon /> Стадион</span>
        </FlexContainer>
        <FlexContainer fd="column" rg="5px" ai="center">
          <span>{venue?.stadium_capacity || 'H/Д'}</span>
          <span style={{ fontWeight: 700 }}>Вместимость</span>
        </FlexContainer>
      </FlexContainer>
    </StadiumInfoWrapper>
  );
};

export default StadiumInfo;

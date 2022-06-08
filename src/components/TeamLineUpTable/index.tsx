import React, { FC } from 'react';
import { ILineupRow } from '../../model/lineup.model';
import { TeamLineUpGridTemplate, TeamLineUpHeader, TeamLineUpTableWrapper } from './TeamLineupTable.styled';

const TeamLineupTable: FC<{ rows: ILineupRow[] }> = ({ rows }) => {
  return (
    <TeamLineUpTableWrapper>
      <TeamLineUpHeader>
        <span>
          #
        </span>
        <span>
          Игрок
        </span>
        <span>
          Позиция
        </span>
        <span>
          Возраст
        </span>
        <span>
          Рейтинг
        </span>
      </TeamLineUpHeader>
      {rows.map(el => (
        <TeamLineUpGridTemplate key={el?.id}>
          <span>
            {el?.shirt_number}
          </span>
          <span>
            {el?.name}
          </span>
          <span>
            {el?.position}
          </span>
          <span>
            {el?.age}
          </span>
          <span>
            {el?.rating}
          </span>
        </TeamLineUpGridTemplate>
      ))}
    </TeamLineUpTableWrapper>
  );
};

export default TeamLineupTable;

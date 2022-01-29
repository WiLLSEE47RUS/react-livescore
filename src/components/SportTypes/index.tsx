import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {Container} from './SportTypes.styled';
import {useSportTypesFetch} from '../../hooks/useSportTypesFetch';
import {useAppSelector} from '../../store';
import {Spinner} from '../Spinner';
import {Outlet} from 'react-router-dom';

const SportTypes: FC = () => {
  const {loading, error} = useSportTypesFetch();
  const state = useAppSelector(state => state.sportTypes);
  return (
    <>
      <Container>
        {!loading && !error ?
          (
            <>
              {state.sportTypes.map(type => (
                <NavLink key={type.slug} to={'/events/' + type.slug}>{type?.name_translations?.ru}</NavLink>))}
            </>
          ) :
          <Spinner width="50"/>
        }
      </Container>
      <Outlet/>
    </>

  );
};

export default SportTypes;

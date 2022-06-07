import React, { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import {SportTypesContainer} from './SportTypes.styled';
import {useSportTypesFetch} from '../../hooks/useSportTypesFetch';
import { useAppDispatch, useAppSelector } from '../../store';
import {Spinner} from '../Spinner';
import {Outlet} from 'react-router-dom';
import { setSelectedSection } from '../../store/events/events.slice';
import { useLocation } from 'react-router';

const SportTypes: FC = () => {
  const {loading, error} = useSportTypesFetch();
  const state = useAppSelector(state => state.sportTypes);
  const dispatch = useAppDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(setSelectedSection(null));
  }, [location, dispatch]);

  return (
    <>
      <SportTypesContainer>
        {!loading && !error ?
          (
            <>
              {state.sportTypes.map(type => (
                <NavLink key={type.slug} to={'/events/' + type.slug}>{type?.name_translations?.ru}</NavLink>))}
            </>
          ) :
          <Spinner width="50"/>
        }
      </SportTypesContainer>
      <Outlet/>
    </>

  );
};

export default SportTypes;

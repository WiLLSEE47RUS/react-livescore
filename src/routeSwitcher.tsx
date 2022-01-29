import {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router';
import SportTypes from './components/SportTypes';
import {useAppSelector} from './store';

export const RouteSwitcher: FC = () => {
  const sportTypes = useAppSelector(state => state.sportTypes.sportTypes);
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Routes>
          <Route path="/events" element={<SportTypes/>}>
            {sportTypes.map(el => <Route key ={el.slug} path={el.slug} element={el.slug}/>)}
          </Route>
          <Route path="/favourites" element={<p>favourites</p>}/>
          <Route
            path="*"
            element={
              <Navigate to="/events"/>
            }
          />
        </Routes>
      </div>
    </div>

  );
};

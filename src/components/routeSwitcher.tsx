import {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router';
import SportTypes from './SportTypes';
import Events from '../modules/Events';
import Favourites from '../modules/Favourites';
import News from '../modules/News';

export const RouteSwitcher: FC = () => {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Routes>
          <Route path="/events" element={<SportTypes />}>
            <Route path=":id" element={<Events />} />
          </Route>
          <Route path="/favourites" element={<Favourites />}/>
          <Route path="/news" element={<News />}/>
          <Route
            path="*"
            element={
              <Navigate to="/events/football"/>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

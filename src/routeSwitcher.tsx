import {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router';
import SportTypes from './components/SportTypes';
import Events from './modules/Events';

export const RouteSwitcher: FC = () => {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Routes>
          <Route path="/events" element={<SportTypes/>}>
            <Route path=":id" element={<Events />} />
          </Route>
          <Route path="/favourites" element={<p>favourites</p>}/>
          <Route path="/news" element={<p>news</p>}/>
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

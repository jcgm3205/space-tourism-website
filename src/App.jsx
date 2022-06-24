import React from 'react'
import { BrowserRouter,
         Routes,
         Route } from 'react-router-dom';

import Crew from './pages/Crew/Crew';
import Destination from './pages/Destination/Destination';
import Home from './pages/Home/Home';
import Technology from './pages/Technology/Technology';

export default function App(){
  return(
      <BrowserRouter basename="/space-tourism-website">
          <Routes>
              <Route index element={<Home />} />
              <Route path='/destination' element={ <Destination /> } />
              <Route path='/crew' element={ <Crew /> } />
              <Route path='/technology' element={ <Technology /> } />
          </Routes>              
      </BrowserRouter>
  );
}


import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppLayout } from './components/common/AppLayout/AppLayout';
import { Hero } from './components/pages/Hero/Hero';
import { Heroes } from './components/pages/Heroes/Heroes';
import { NotFound } from './components/pages/NotFound/NotFound';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path='/'>
          <Route index element={<Heroes />} />
          <Route path='hero/:userId' element={<Hero />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AppLayout>
  );
}

export default App;

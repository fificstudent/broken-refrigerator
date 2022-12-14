import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import AppPage from '../Pages/AppPage';
import HomePage from '../Pages/HomePage';


export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/test" exact element={<AppPage />} />
      </Routes>
    </>
  );
}

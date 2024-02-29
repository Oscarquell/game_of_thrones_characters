import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/homePage/homePage";
import DetailsPage from "../pages/detailsPage/detailsPage";

const MainRoutes = () => {
  return (
  <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path={`:id`} element={<DetailsPage />}/>
  </Routes>
  );
};

export default MainRoutes;
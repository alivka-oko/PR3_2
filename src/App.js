import React from 'react';
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Pet from "./components/html/pet.jsx";
import Header from "./components/header.jsx";
import Index from "./components/html/index.jsx";
import Orders from "./components/html/orders";
import Auth from "./components/html/auth";

import Search from "./components/html/search"
import Registration from "./components/html/registration";
import Profile from "./components/html/profile";
import Add_pet from "./components/html/add_pet";
import Edit_pet from "./components/html/edit_pet";


function App() {
  return (

          <Routes>
              <Route path={'/'} element={<Index/>}/>
              <Route path={'/index'} element={<Index/>}/>
              <Route path={'/addpet'} element={<Add_pet/>}/>
              <Route path={'/auth'} element={<Auth/>}/>
              <Route path={'/editpet'} element={<Edit_pet/>}/>
              <Route path={'/orders'} element={<Orders/>}/>
              <Route path={'/pet'} element={<Pet/>}/>
              <Route path={'/profile'} element={<Profile/>}/>
              <Route path={'/registration'} element={<Registration/>}/>
              <Route path={'/search'} element={<Search/>}/>
          </Routes>

  );
}

export default App;

import React from 'react';
import { MantineProvider } from '@mantine/core';
import constants from './constants';
import Layout from './pages/Layout';
import Index from './pages/Index';
import About from './pages/About';
import Search from './pages/Search';
import NotFound from './pages/404';
import Account from './pages/Account/index';
import Login from  './pages/Account/Login';
import Register from './pages/Account/Register';
import Training from './pages/Training/Index';
import Start from './pages/Training/Start';
import Results from './pages/Training/Results';
import Add from './pages/Dictionnary/Add';
import All from './pages/Dictionnary/All';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Custom theme is applied to all components in App
const App = () => {
  return (
    <MantineProvider theme={constants.theme} withNormalizeCSS withGlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Index />}/>
            <Route path="about" element={<About />}/>
            <Route path="dictionnary">
              <Route index element={<All />}/>
              <Route path="all" element={<All />}/>
              <Route path="add" element={<Add />}/>
            </Route>
            <Route path="training">
              <Route index element={<Training />}/>
              <Route path="start" element={<Start />}/>
              <Route path="results" element={<Results />}/>
            </Route>
            <Route path="account">
              <Route index element={<Account />}/>
              <Route path="register" element={<Register />}/>
              <Route path="login" element={<Login />}/>
            </Route>
            <Route path="search">
              <Route index element={<Search />}/>
            </Route>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

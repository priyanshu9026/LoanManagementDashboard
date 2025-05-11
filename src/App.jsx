import React, { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MainLayouts from './components/Layouts/MainLayouts';
import UserComponent from './components/UserComponent';

const App  = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/verifier',
        element: <UserComponent  />,
      },
    ],

  },
]);

export default App;

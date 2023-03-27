import React from 'react';
import Home from '../components/Home';
import Detail from '../components/Detail';
import Login from '../components/Login';

const routeArray  = [
  { 
    path : '/',
    component : <Home/>
  },
  {
    path : '/detail',
    component: <Detail/>
  },
  {
    path : '/login',
    component : <Login/>
  }
]

export default routeArray

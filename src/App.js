import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import routeArray from './helpers/routeArray';
function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Routes>
        {
          routeArray.map(({path ,component})=>{
            return (
              <>
              <Route path = {path} element = {component}>
              </Route>
            </>
            )
          })
        }
        
      
      </Routes>
      </Router>
    </div>
  );
}

export default App;

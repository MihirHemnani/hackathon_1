import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import './App.css'
import ArtForm from './forms/ArtForm';
const App = () => {
  const[flag,setFlag]=useState(false);
  return (
    <Router>
      <div>
        <h1 onClick={()=>{setFlag(true)}}>hello</h1>
        {flag && <ArtForm/>}
          <Route exact path="/">
            <h1>Welcome to the Home Page</h1>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
      </div>
    </Router>
  );
};

export default App;

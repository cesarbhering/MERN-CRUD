import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/LoginComponent';
import ActivitiesList from './Components/ActivitiesList';
import InsertActivity from './Components/InsertActivity';
import ActivitiesProvider from './Context/ActivitiesProvider';

function App() {
  return (
    <ActivitiesProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={ <LoginComponent /> } />
          <Route exact path="/ActivitiesList" element={ <ActivitiesList /> } />
          <Route exact path="/InsertActivity" element={ <InsertActivity /> } />
        </Routes>
      </Router>
    </ActivitiesProvider>
  );
}

export default App;

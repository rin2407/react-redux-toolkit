import React from 'react';
import './App.css';
import PrivateRoute from './app/routes/PrivateRoute';
import { BrowserRouter } from 'react-router-dom';
import PublicRoute from './app/routes/PublicRoute';
import { Counter } from './redux/features/counter/Counter';
function App() {
  return (
    <>
      <BrowserRouter>
        <PublicRoute authed={false} />
        <PrivateRoute authed={false} />
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Mainn';
// main.jsx or App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

export default App;

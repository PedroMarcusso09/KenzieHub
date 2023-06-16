import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../src/routes/RoutesMain';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalReset } from "./styles/reset";
import { GlobalStyles } from "./styles/global";

const App = () => {
  return (
    <Router>
      <div>
      <GlobalStyles />
      <GlobalReset />
        <Routes />
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
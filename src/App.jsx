import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../src/routes/RoutesMain';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalReset } from "./styles/reset";
import { GlobalStyles } from "./styles/global";
import { UserProvider } from '../src/providers/UserContext';
import { TechProvider } from '../src/providers/TechContext'; 

const App = () => {
  return (
    <Router>
      <UserProvider>
        <TechProvider> 
          <div>
            <GlobalStyles />
            <GlobalReset />
            <Routes />
            <ToastContainer />
          </div>
        </TechProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
import React from 'react';
import Routes from './routes'
import GlobalStyles from './assests/GlobalStyles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
      <ToastContainer />
    </>
  )
}

export default App;

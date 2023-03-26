import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HeaderNav from './components/HeaderNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsSignedIn(true);
  };

  const handleLogout = () => {
    setIsSignedIn(false);
  };

  return (
    <BrowserRouter>
      <div>
        <HeaderNav isSignedIn={isSignedIn} onLogout={handleLogout} />
        <ToastContainer />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;

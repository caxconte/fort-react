import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';
import Welcome from './pages/Onboarding/welcome';
import Connect from './pages/Onboarding/connect';
import Communicate from './pages/Onboarding/communicate';

function App() { 
    return(
    <Routes>
      <Route path='/welcome' element={< Welcome />} />
      <Route path='/connect' element={< Connect />} />
      <Route path='/communicate' element={< Communicate />} />
      <Route path='/login' element={< Login />} />
      <Route path='/signup' element={< SignUp />} />
    </Routes>
)
}

export default App;

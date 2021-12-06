import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Login from './pages/Login/index.js';

function App() { 
    return(
    <Routes>
      <Route path='/login' element={< Login />} />
    </Routes>
)
}

export default App;

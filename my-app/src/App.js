import './App.css';
import Navbar from './components/Navbar';

import Alert from './components/Alert';
import About from './components/about';
import  React, { useState } from 'react';
import {

  Switch,
  Routes,
  Route,
  Link,
  Router,
  BrowserRouter
} from "react-router-dom";
import Homepage from './components/Homepage';

function App() {

  const [mode,setmode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const togglemode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }



  return (
    <>
      <Navbar title="TextUtils" about="about us" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <div>
        <Routes>
            <Route  path="/" element={<Homepage/>} />
            <Route  path="/About" element={<About />}/>
        </Routes>
      </div>
      
      
      

    </>
  );
}

export default App;

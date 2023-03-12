import React from 'react';
import Textform from './Textform';
import { useState } from 'react';

export default function Homepage() {
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
    
    
    <div className="container">
        <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> 
    </div>
    </>
  )
}

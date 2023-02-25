import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/about';
import Alert from './components/Alert';
import  React, { useState } from 'react';

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
    
    <Navbar title="TextUtils" about="about us" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Textform heading="Enter the Text to analyze below"
    showAlert={showAlert} mode={mode}/>

    <About/>
    </div>
    </>
  );
}

export default App;

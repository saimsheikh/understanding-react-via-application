import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
    
    <Navbar title="TextUtils" about="about us" />
    
    <div className="container">
    <Textform heading="Enter the Text to analyze below"/>
    </div>
    </>
  );
}

export default App;

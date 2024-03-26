import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Tabs from './pages/Tabs';
import CarFleet from './pages/CarFleet';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App w-full h-screen bg-slate-200 relative font-extralight">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fleet' element={<CarFleet/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;

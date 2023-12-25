
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from './Component/Login';
import Signup from './Component/Signup';
import Home from './Component/Home';
import Services from './Component/Services';
import Contact from './Component/Contact';
import SchedulePickup from './Component/SchedulePickup';

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/pickup" element={<SchedulePickup/>}/>
          
      

        </Routes>
      </div>
    </Router>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Home from "./components/Home"
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

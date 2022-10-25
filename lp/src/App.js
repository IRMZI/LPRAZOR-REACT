import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Creditos from './components/Creditos/Creditos'

function App() {
  return (
    <Router>
     <Navbar/>
     <Creditos />
    </Router>
  );
}

export default App;

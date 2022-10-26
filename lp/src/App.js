import './App.css';
import Creditos from "./components/Creditos/Creditos"
import Navbar from "./components/Navbar/index"
import Sidebar from './components/Sidebar/index'

function App() {
  return (
    <div>
       <Navbar/>
       <Creditos/>
       <Sidebar />
    </div>
  );
}

export default App;

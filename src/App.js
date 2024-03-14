import './App.css';
import DispMeal from './pages/DispMeal';
import Home from './pages/Home';
import Log from './pages/Log';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
    	<Router>
        <Navbar />
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/' element={<Home />} />
          <Route path='/Meal' element={<DispMeal />} />
          <Route path='/Log' element={<Log  />} />
          <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

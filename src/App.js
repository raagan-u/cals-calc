import './App.css';
import Upload from './pages/Upload';
import Home from './pages/Home';
import Log from './pages/Log';
import axios from 'axios';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';



function App() {
  const url = "http://localhost:3500/api/meal/createMeal"
  async function AddMeal  (meal) {
    const result = await axios.post(url, meal);
    window.alert(result.data.message);
  }

 

  return (
    <div className="App">
    	<Router>
        <Navbar />
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/' element={<Home />} />
          <Route path='/Meal' element={<Upload onAdd={AddMeal}/>} />
          <Route path='/Log' element={<Log  />} />
          <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

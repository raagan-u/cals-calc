import './App.css';
import Upload from './pages/Upload';
import View from './pages/View';
import Home from './pages/Home';
import Log from './pages/Log';
import BodyW from './pages/BodyW';
import axios from 'axios';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Workout from './pages/Workouts';
import LoginVal from './pages/Login';
import ShowNavbar from './components/ShowNavbar';




function App() {
  const url = "http://localhost:3500/api/documents"
  async function AddMeal  (meal) {
    const result = await axios.post(url, meal);
    window.alert(result.data.message);
  }

 

  return (
    <div className="App">
    	<Router>
        <ShowNavbar><Navbar /></ShowNavbar>
        <Routes>
          <Route path='/Login' element={<LoginVal />} />
          <Route path='/' element={<Home />} />
          <Route path='/UploadMeal' element={<Upload onAdd={AddMeal}/>} />
          <Route path='/View' element={<View />} />
          <Route path='/Log' element={<Log  />} />
          <Route path='/BodyW' element={<BodyW />} />
          <Route path='/Workouts' element={<Workout />} />
          <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

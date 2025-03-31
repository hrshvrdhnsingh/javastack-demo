import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />}/>
          <Route exact path="/edituser/:id" element={<EditUser />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

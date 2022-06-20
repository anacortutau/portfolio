import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import Training from './pages/Training';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import MyNavbar from './components/MyNavbar';
import ProjectsList from './pages/ProjectsList'
import Toggle from './components/toggle/Toggle';
import {  useState } from 'react';


function App() {
  const [dark, setDark] = useState(false)
 
 
  return (
    <div>

<MyNavbar />


<Routes>
  <Route path="/" element={<Profile />}/>
  <Route path="/experience" element={<Experience  />} />
  <Route path="/training" element={<Training  />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/projects" element={<ProjectsList  />} />
  <Route path="/contact" element={<Contact  />} />


</Routes>
  
    </div>
  );
}

export default App;

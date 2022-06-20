import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import Training from './pages/Training';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import MyNavbar from './components/MyNavbar';
import ProjectsList from './pages/ProjectsList'
import {  useContext, useState } from 'react';
import { ThemeContext } from './context';




function App() {
  const [dark, setDark] = useState(false)
  const theme = useContext(ThemeContext)
  //const darkMode = theme.state.darkMode;
  
  return (
    <div >
    {/* // style={{backgroundColor: darkMode ?  "#222" : "white", color: darkMode && "white"}} */}

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

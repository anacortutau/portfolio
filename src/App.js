import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import MyNavbar from './components/MyNavbar';
import ProjectsList from './pages/ProjectsList'
import {  createContext, useContext, useState } from 'react';
 import { ThemeContext } from './context';
import ResumeList from './pages/ResumeList';





function App() {
  //const ThemeContext= createContext();
  const [dark, setDark] = useState(false)
  const theme = useContext(ThemeContext)
  console.log(theme)
  //const darkMode = theme.state.darkMode;

  
  return (
   <>
    {/* // style={{backgroundColor: darkMode ?  "#222" : "white", color: darkMode && "white"}} */}
    
    <MyNavbar />
   
    

   
  <Routes>
  
  <Route path="/portfolio" element={<Profile />}/>
  <Route path="/experience" element={<ResumeList />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/projects" element={<ProjectsList  />} />
  <Route path="/contact" element={<Contact  />} />

 
</Routes>

  
</>
  );
}

export default App;

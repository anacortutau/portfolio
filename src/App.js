import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import MyNavbar from "./components/MyNavbar";
import ProjectsList from "./pages/ProjectsList";
import ResumeList from "./pages/ResumeList";
import Toggle from "./components/toggle/Toggle";
import React, { createContext, useContext } from "react";
import { ThemeContext } from "./context";

function App(props) {
  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      >
        <Toggle />
        <MyNavbar />

        <Routes>
          <Route path="/portfolio" element={<Profile />} />
          <Route path="/experience" element={<ResumeList />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

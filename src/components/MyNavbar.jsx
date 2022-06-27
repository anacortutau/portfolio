import React from 'react'
import {NavLink} from  "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import "./navbar.css"







function MyNavbar() {

    const toggleStyles = (navInfo) => {
        return navInfo.isActive === true ? activeStyles : inActiveStyles;
    };


    const activeStyles = {
        textDecoration: "underline",
    };

    const inActiveStyles = {
        textDecoration: "none",
    };
  return (
    <div>

            {/* <Navbar bg="light" variant="light"> */}
            <Navbar className="navbar">
            
                <Container>
                    <Navbar.Brand as={NavLink}to="/">Ana C T</Navbar.Brand>
                    {/* <NavLink to="/" style={toggleStyles}>Ana C T</NavLink> */}
                    <NavLink to="/experience"  style={toggleStyles}>Resume</NavLink>
                    <NavLink to="/projects"   style={toggleStyles}> Projects</NavLink>
                    <NavLink to="/skills"   style={toggleStyles}> Skills</NavLink>
                    <NavLink to="/contact" style={toggleStyles}> Contact </NavLink>
                    
                    
                    </Container>
                   
                </Navbar>

             

                
                
    </div>
  )
}

export default MyNavbar
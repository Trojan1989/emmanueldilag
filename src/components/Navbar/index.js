import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavStyles, NavLink } from './NavbarElements';


const NavigationBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 60) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);


    return(
        <NavStyles className="NavStyles" scrollNav={scrollNav}>
            <Navbar expand="md" variant="dark" className="px-3">
                <Navbar.Brand href="/">Emman</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item as="li">
                            <NavLink to="home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-60}>
                                    Home
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <NavLink to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-60}>
                                    About
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <NavLink to='project'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-60}>
                                    Project
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <NavLink to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-60}>
                                    Contact
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavStyles>
    );
}

export default NavigationBar;
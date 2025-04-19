import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill, BsFillCloudMoonFill } from "react-icons/bs";
import logo from "../components/logo.png";
import "../App.css";

const CustomNavbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "false" ? false : true;
  });
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`${darkMode ? "dark-mode" : "light-mode"} ${
        scrolled ? "scrolled" : ""
      }`}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "70px", width: "80px", marginRight: "8px" }}
          />
          <span className="brand-name">Self-Care</span>
          <span className="brand-dot">.</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" onClick={() => setExpanded(false)}>
              BLOG
            </Nav.Link>
            <Nav.Link as={Link} to="/career" onClick={() => setExpanded(false)}>
              CAREER
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => setExpanded(false)}
            >
              CONTACT
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center ms-lg-3">
            <Button
              className={`me-2 me-lg-3 ${
                darkMode ? "btn-darkmode-black" : "btn-outline-dark"
              }`}
              onClick={() => setExpanded(false)}
            >
              Sign In
            </Button>

            <Button
              variant={darkMode ? "light" : "dark"}
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <BsFillCloudSunFill /> : <BsFillCloudMoonFill />}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

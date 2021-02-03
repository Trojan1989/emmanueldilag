import React from 'react';
import NavigationBar from './components/Navbar';
import Hero from './components/HeroSection';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </React.Fragment>
  );
}

export default App;

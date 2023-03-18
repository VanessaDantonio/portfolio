// React app
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import { Navbar } from './components/Navbar';
import { Wrapper } from './components/Wrapper';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Resume } from './pages/Resume';

// Style
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path = "/" element = { <Home /> } />
            <Route path = "about" element = { <About /> } />
            <Route path = "portfolio" element = { <Portfolio /> } />
            <Route path = "contact" element = { <Contact /> } />
            <Route path = "resume" element = { <Resume /> } />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

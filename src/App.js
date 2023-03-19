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
import { Work } from './pages/Work';
import { Contact } from './pages/Contact';

// Style
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>Hello</h1>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path = "/" element = { <Home /> } />
            <Route path = "about" element = { <About /> } />
            <Route path = "work" element = { <Work /> } />
            <Route path = "contact" element = { <Contact /> } />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

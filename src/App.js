import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Gallery from './Gallery';
import ResumePressKit from './ResumePressKit';
import Contact from './Contact';
import Footer from './Footer';
import Music from './Music';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Header />
        <main className="flex-grow px-3">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resume" element={<ResumePressKit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music" element={<Music />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import HeaderMain from './components/Header_main/Header_Main.jsx';
import Our_Specializations from './components/Our_Specialization/Our_Specializations.jsx';
import About_Us from './components/About_Us/About_Us.jsx';
import Projects from './components/Project/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contacts from './components/Contact/Contact.jsx';
import ProjectsPage from './components/ProjectPage/ProjectPage.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
	 	<HeaderMain />
      <Our_Specializations />
      <About_Us />
      <Projects />
      <Contacts />
    </div>
  );
}


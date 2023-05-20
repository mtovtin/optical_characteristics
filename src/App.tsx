import React, { createContext, useState } from 'react';
import Navbar from './components/Navbar'
import './App.css';
import Home from "./pages/Home"
import OpticalStructures from "./pages/OpticalStructures"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpticalNumbers from './pages/OpticalNumbers';
import Footer from './components/Footer';
import Display from './pages/Dispersion/Dispersion';
import LocalizedStrings from 'react-localization';
import Page1 from './pages/Transmittance/Page1/Page1';
import Page2 from './pages/Transmittance/Page2/Page2';
import { Language } from '@mui/icons-material';


function App() {

  const [language, setLanguage] = useState('en');

  const pull_data = (data: string) => {
  setLanguage(data)
  }
  const UserContext = createContext(language);

  return (
    <UserContext.Provider value = {language}>
    <>
      <Navbar language={language} func={pull_data}></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home language={UserContext}/>} />
          <Route path="/structures" element={<OpticalStructures language={language}/>} />
          <Route path="/numbers" element={<OpticalNumbers language={UserContext}/>} />
          <Route path="/polarization" element={<Display language={language}/>} />
          <Route path="/page" element={<Page1 language={language}/>} />
          <Route path="/coefficient" element={<Page2 language={language}/>} />
        </Routes>
      </Router>
      <Footer language={language}></Footer>
    </>
    </UserContext.Provider>
  );
}


export default App;

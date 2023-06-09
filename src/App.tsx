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
import { useLanguage } from './Hooks/useLanguage';

function App() {

  const [language, setLanguage] = useState<string>('ua');

  // const pull_data = (data: string) => {
  //   window.localStorage.setItem('language',data)
  // setLanguage(data)
  // }


  return (

<>
      <Navbar setLanguage={setLanguage}></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/optical_characteristics/structures" element={<OpticalStructures language={language}/>} />
          <Route path="/numbers" element={<OpticalNumbers language={language}/>} />
          <Route path="/polarization" element={<Display language={language}/>} />
          <Route path="/light_at_angle" element={<Page1 language={language}/>} />
          <Route path="/optimization" element={<Page2 language={language}/>} />
        </Routes>
      </Router>
      <Footer language={language}></Footer>

</>
  );
}


export default App;

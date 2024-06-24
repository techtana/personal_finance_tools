import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from "./Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Contact from "./Contact";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";

import MortgageCalculator from './MortgageCalculator';


const App = () => {
  const [counter, setCounter] = useState(100);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container my-3">
        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/terms_of_service" element={<TermsOfService />} />

          <Route path="/mortgage_calculator" element={<MortgageCalculator />} />

        </Routes>
      </div>
      
      <Footer />

    </BrowserRouter>
  );
}

export default App;

import {Routes,Route} from 'react-router-dom'
import './App.css'


import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Services from './pages/Services/Services'
import Projects from './components/Projects/Projects'
import CustomCursor from './components/CustomCursor/CustomCursor'
import CookiePolicy from './pages/CookiePolicy/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
function App() {


  return (
    <>
    <CustomCursor />
   <Navbar />
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
     <Route path='/projects' element={<Projects />} />
     <Route path='/cookie-policy' element={<CookiePolicy />} /> 
     <Route path="/privacy-policy" element={<PrivacyPolicy />} />
     <Route path="/terms-of-use" element={<TermsOfUse />} />
   </Routes>
   <Footer />
    </>
  )
}

export default App

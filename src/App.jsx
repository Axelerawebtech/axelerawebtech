import {Routes,Route} from 'react-router-dom'
import './App.css'


import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Services from './pages/Services/Services'

import Templates from './pages/Templates/Templates'
import CustomCursor from './components/CustomCursor/CustomCursor'
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
     
      <Route path='/templates' element={<Templates />} />
   </Routes>
   <Footer />
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";




import Home from "./Home.jsx"
import Aboutus from "./Aboutus.jsx"
import Services from "./Services"
import Duediligence from "./Duediligence";
import Contactus from "./Contactus"


function App() {
    ;
  return  (
    <>
    
      <BrowserRouter>


      <Routes>
        <Route path="/" element={ <Home />} />
         <Route path="/home" element={ <Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/duediligence" element={<Duediligence />} />
         <Route path="/contact" element={<Contactus />} /> 
       
      </Routes>
     
      </BrowserRouter>

    </>
  );
}

export default App;


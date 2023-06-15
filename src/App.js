import logo from './logo.svg';
import './assets/tailwind.css'
import Header from './components/Header';
import Body from './components/Body';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import { Router , Route, Routes} from 'react-router-dom';
import Company from './components/Company';
import Blueprint from './components/Blueprint';
import Clientele from './components/Clientele';
import Capabilities from './components/Capabilities';
import Insights from './components/Insights';
import Contacts from './components/Contacts';
function App() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
  return (
    <div className="App body-font font-stapel">
      <Header openNav ={ openNav } setOpenNav={ setOpenNav }/>
     
        <Routes>
        <Route path = "/" element= {  <Body openNav ={ openNav } setOpenNav={ setOpenNav } />}/>
        <Route path = "/company" element={ <Company openNav ={ openNav } setOpenNav={ setOpenNav } />}/>
        <Route path = "/blueprint" element={ <Blueprint openNav ={ openNav } setOpenNav={ setOpenNav } />}/>
        <Route path = "/clientele" element={ <Clientele openNav ={ openNav } setOpenNav={ setOpenNav } />}/>
        <Route path = "/capabilities" element={ <Capabilities openNav ={ openNav } setOpenNav={ setOpenNav } />}/>
        <Route path = "/insights" element={ <Insights openNav ={ openNav } setOpenNav={ setOpenNav } />}/>
        <Route path = "/contacts" element={ <Contacts openNav ={ openNav } setOpenNav={ setOpenNav } />}/>
     
     
      </Routes>
     
      <Footer openNav ={ openNav } setOpenNav={ setOpenNav } />
     
    </div>
  );
}

export default App;

import  './App.css';
import './components/service/Service.css';
import Service from './components/service/Service';
import Body from './components/lidjia/Body';
import Card from './components/card/Card';
import Header from './components/header/Header';
import About from './components/about/About';
import Footer from './components/footer/Footer'; 
import ControlledCarousel from './components/testi/ControlledCarousel';

    

function App() {
  return (
    <div className='container'>
    <Header/> 
    <Service/>
    <Body/>
    <Card/>
    <About/>
    <ControlledCarousel/>
    <Footer/>
   
    
    
    
    
 
    </div>
    );
}

export default App;

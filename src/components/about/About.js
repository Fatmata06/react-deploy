import React from 'react';
import './About.css';
import { FaCode, FaCamera, FaPaintBrush, FaSearch } from 'react-icons/fa'; // Importez les icônes de react-icons

function About() {
  return (
      <div className='ABOUT'>
        <div class="container  text-white">
        <div class=" row align-items-center">
            
     <div class="col-6 col-4 col-lg-4">
     <h2 style={{marginLeft:'15px', fontSize: '40px',fontWeight: '600'}}>About me</h2>
        <img className='image' style={{marginLeft:'15px'}} src={require("../../assets/images/a1.png")}/>
       </div>
              
        
    <div className='text' style={{marginRight:'10px'}}  class="div col-6  col-12 col-lg-8 row  ">
    <p >
                Bienvenue sur notre page "À propos" ! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed vitae enim euismod, consectetur arcu eu, pretium turpis. Nunc ac metus fermentum, posuere eros
                eget, iaculis ligula. Nullam feugiat orci vel arcu gravida, sed sagittis sapien pellentesque.
              </p>
              <h5>Other Skills</h5>
              <div style={{marginLeft:'10px'}} className="col-3  icons-section-about">
                  < FaCode size={20} />
                  Development
                  <FaCamera size={20} />
                Photography
                
                </div>
                <div style={{marginLeft:'10px'}}  className=" col-3   icons-section-about1">
                  <FaPaintBrush size={20} />
                 Illustrating
                <FaSearch size={20} />
                 User Research
                </div>
    </div>
  
  </div>
        
 </div>
 </div>
     
   
  );
}

export default About;
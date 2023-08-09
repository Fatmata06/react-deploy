import React from 'react';
 import './About.css';
  import { FaCode, FaCamera, FaPaintBrush, FaSearch } from 'react-icons/fa'; // Importez les icônes de react-icons
 //import image from './assets/images/a1.png'; 

function About() {
   return (
     <div className="App">
        <div className="about-container-about">
       
        <div className="content-wrapper-about">

       <div className="image-section-about">
        <h3>About Me</h3>
        <img src={require("../../assets/images/a1.png")}/> {/* Utilisez l'image importée */}
            
            <div className="text-section-about">
              <p>
                Bienvenue sur notre page "À propos" ! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed vitae enim euismod, consectetur arcu eu, pretium turpis. Nunc ac metus fermentum, posuere eros
                eget, iaculis ligula. Nullam feugiat orci vel arcu gravida, sed sagittis sapien pellentesque.
              </p>
              <h2>Other Skills</h2>

              
              <div className="icons-section-about">
                  < FaCode size={20} />
                  Development
                  <FaCamera size={20} />
                Photography
                </div>
                <div className="icons-section-about1">
                  <FaPaintBrush size={20} />
                 Illustrating
                <FaSearch size={20} />
                 User Research
                </div>
              </div>
              </div>
              </div>
         </div>
       </div>
    );
  }

export default About;

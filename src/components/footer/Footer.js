import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import '../../App.css'; // corrigé le chemin relatif
import './Footer.css'
//import messageImage from './assets/images/button.png'; // corrigé le chemin relatif

function Footer  ()  {
  const handleButtonClick = () => {
    alert('Message Me clicked!');
    return handleButtonClick;
  };

  return (
    <div className="page-container"> 
  <div style={{marginLeft:'10px'}} className="left-section">
    <h2 style={{marginLeft:'40px',fontSize:'45px'}}>Interested in <br></br>working with me?</h2>
    
      <img style={{marginLeft:'40px'}} src={require("../../assets/images/Button.png")}/> 
  
  </div>
  <div className="right-section">
    <h3>Let's get social</h3> 
    <div className="social-icons" style={{marginBottom:'40px'}}>
      <a href="https://www.facebook.com" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.twitter.com" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.pinterest.com" target="_blank">
        <FontAwesomeIcon icon={faPinterest} />
      </a>
    </div>
    <p className='create' style={{marginTop:'6px'}}>Create by <u>Octet Design Studio</u></p> 
    
  </div> 
  
</div>

  );
};

export default Footer;

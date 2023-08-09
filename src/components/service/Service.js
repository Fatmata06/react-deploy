import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faTrophy, faVideo, faComputer} from '@fortawesome/free-solid-svg-icons';


function Service() {
  return (
      <div style={{width:'97%'}} >
        <div style={{marginLeft:'10px',marginR:'10px'}} class="container bg-dark rounded-3  text-white">
        <div class=" row align-items-start">
            
     <div class="service1 col-4 col-12 col-lg-3">
            <span >My</span>
            <h2 >
              Services
              </h2>
            
              <div className=' text '>
                <p>Lorem Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore</p>
              </div>
              <div className=' infos01 '>
                <span>120</span>
                <h6>Satisfied Clients</h6>
              </div>
              <div className=' infos01  '>
                <div>
                <span>285</span>
                <h6>
                Projects Completed
                </h6>
                </div>
              </div>
       </div>
              
        
    <div class=" service2 col-8  col-12 col-lg-9 row align-items-start ">
      <hr/>

      <div class="col-2 col-12 col-lg-2">
      <i class="fas fa-trophy fa-2x">
            <div className='s-icon'>
              
            <FontAwesomeIcon icon={faTrophy }/>
            </div>
            </i>
      </div>
      <div class="job col-2 col-12 col-lg-2">
      <span>BRAND</span>
        <h4> CONSULTANT</h4>
      </div>
      <div class="cont col-5 col-12 col-lg-5">
      <p> Lorem Ipsum dolor sit amet, consetetur sad pscina elitr, sed diam nonum elriod tempor invidunt ut </p>
      </div>
      < hr/>
      

      <div class="col-2 col-12 col-lg-2 ">
      <i class="fas fa-computer fa-2x">
            <div className='s-icon'>
            <FontAwesomeIcon icon={faComputer}/>
            </div>
            </i>
      </div>
      <div class="job col-2 col-12 col-lg-2">
      <span>UI/UX</span>
              <h5>SOLUTIONS</h5>
      </div>
      <div class="cont col-5 col-12 col-lg-5">
      <p> Lorem Ipsum dolor sit amet, consetetur sad pscina elitr, sed diam nonum elriod tempor invidunt ut </p>
      </div>
    

      <hr/>

  <div class="col-2 col-12 col-lg-2">
  <i class="fas fa-trophy fa-2x">
        <div className=' s-icon'>
          
        <FontAwesomeIcon icon={faCube}/>
        </div>
        </i>
  </div>
  <div class=" job col-2 col-12 col-lg-2">
  <span>PACKAGING</span>
              <h5>DESIGN</h5>
  </div>
  <div class="cont col-5 col-12 col-lg-5">
  <p> Lorem Ipsum dolor sit amet, consetetur sad pscina elitr, sed diam nonum elriod tempor invidunt ut </p>
  </div>


  <hr/>

  <div class="col-2 col-12 col-lg-2">
  <i class="fas fa-trophy fa-2x">
        <div className=' s-icon'>
          
        <FontAwesomeIcon icon={faVideo }/>
        </div>
        </i>
  </div>
  <div class="job col-2 col-12 col-lg-2 ">
  <span>MOTION VIDEO </span>
                <h5>& TVC</h5>
  </div>
  <div class="cont col-5 col-12 col-lg-5">
  <p> Lorem Ipsum dolor sit amet, consetetur sad pscina elitr, sed diam nonum elriod tempor invidunt ut </p>
  </div>
  < hr/>

      
    </div>
  
  </div>
        
 </div>
 </div>
     
   
  );
}

export default Service;
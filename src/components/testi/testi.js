import React from 'react';
import Image1 from '../../assets/images/Image1.png'
import Image2 from '../../assets/images/image2.png'
import './Testi.css'

function Service() {
  return (
  <div>
    <div class="container  text-white ">
      <div class=" row align-items-start">
         <div class="col-9  col-12 col-lg-9 ">
         <h2>Testimonials</h2>
                  <div className='h-text' style={{background:'#1A1A1A',height:'160px',backgroundColor:'#373636' }}> 
                  <img className='imagen2' src={Image2} style={{marginLeft:'4px', marginTop:'3px'}} alt=''/><b style={{color:'#fff', marginLeft:'3px', marginTop:'15px'}}>Joe brillons  mywebsite.com </b>
                    <p>Lorem Ipsum is simply dummy text of the printing 
                    Lorem Ipsum has been the industry's standard du 
                    when an unknown printer took a Lorem Ipsum has been the industry's standard du  when an unknown printer took a </p>
                   
                  </div>
         </div>

         <div class="col-3 col-12 col-lg-3 ">
               <h2>_ _ _ _</h2>
                
               <div className='h-text'style={{background:'#1A1A1A',height:'160px',backgroundColor:'#373636' }}>
                
                  <img className='imagen1' src={Image1} style={{marginLeft:'4%', marginTop:'3%'}} alt=''/><b style={{color:'#fff', marginLeft:'3%', marginTop:'15px'}}>Joe brillons web.com  </b>
                    <p>Lorem Ipsum is simply dummy text of the printing 
                      Lorem Ipsum has simply dummy text of the printing 
                     
                    </p>
                   
                  </div>
               </div>
        
             
        
         
          
      </div>
      
                
     </div>
   </div>
     
   
  );
}

export default Service;
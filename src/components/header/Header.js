import React from 'react';
import Image1 from '../../assets/images/Image1.png'


function Service() {
  return (
  <div>
    <div class="container  text-white ">
      <div class=" row align-items-start">
                        
         <div class="col-9 "style={{background:'#1A1A1A',height:'170px',backgroundColor:'#373636' }}>
                  <div className='h-text'> 
                  <img src={Image1} style={{marginLeft:'4%', marginTop:'3%'}} alt=''/><b style={{color:'#fff', marginLeft:'3%', marginTop:'15px'}}>Joe brillons   mywebsite.com</b>
                    <p>Lorem Ipsum is simply dummy text of the printing 
                      Lorem Ipsum has been the industry's standard du 
                    when an unknown printer took a </p>
                   
                  </div>
         </div>
               <div class="col-3  "style={{background:'#1A1A1A', height:'170px', backgroundColor:'#373636' }}>
                <div className='trait'>----</div>
                
               <div className='h-text'>
                
                  <img src={Image1} style={{marginLeft:'4%', marginTop:'3%'}} alt=''/><b style={{color:'#fff', marginLeft:'3%', marginTop:'15px'}}>Joe brillons   mywebsite.com</b>
                    <p>Lorem Ipsum is simply dummy text of the printing 
                      Lorem Ipsum has been the industry's standard du 
                    when an unknown printer took a </p>
                   
                  </div>
               </div>
        
         
          
      </div>
      
                
     </div>
   </div>
     
   
  );
}

export default Service;
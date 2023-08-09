import React from 'react';
import './Card.css';  
                                
function Card() {   
  return (
    <div className="container" >
      <h2 style={{marginLeft:'40px', fontSize: '40px',fontWeight: '600'}}className='my'>My Approach</h2>   
      <div className='cardss' style={{background:'#1A1A1A'}}>    
        <div className='cards' style={{background:'#3a3737'}}>
          <p>One</p>
        <h4 className="card-title">Research</h4>
            <p className="text ">Lorem ipsum dolor 
            sit amet, consetetur sadipscing elitr, sed
             diam nonumy eirmod tempor invidunt ut labore 
             et dolore magna aliquyam erat, sed diam voluptua.
              At vero eos et accusam et</p>
        </div>
        
        <div className='cards 'style={{background:'#3a3737'}}>
          <p>Two</p>  
        <h4 className="card-title">Concept</h4>
            <p className="text ">Lorem ipsum dolor 
            sit amet, consetetur sadipscing elitr, sed
             diam nonumy eirmod tempor invidunt ut labore 
             et dolore magna aliquyam erat, sed diam voluptua.
              At vero eos et accusam et</p>
        </div>                 
<div className='cards' style={{background:'#3a3737'}}> 
        <p>Three</p>
        <h4 className="card-title">Developpement</h4>
            <p className="text ">Lorem ipsum dolor 
            sit amet, consetetur sadipscing elitr, sed
             diam nonumy eirmod tempor invidunt ut labore 
             et dolore magna aliquyam erat, sed diam voluptua.
              At vero eos et accusam et</p>
        </div>
        
        </div>
      </div>     
  );
}

export default Card;
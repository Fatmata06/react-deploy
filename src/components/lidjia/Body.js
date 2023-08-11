import React  from 'react';
import './Body.css';
import button from '../../assets/images/Button.png';
import Card1 from '../../assets/images/Card 1.png';
import Card2 from '../../assets/images/Card 3.png';
import Card3 from '../../assets/images/Card 2.png';
import Card4 from '../../assets/images/Card 4.png';

function Body() {

  return (

        <div className="container " >
         <div className='row '>
          <div style={{marginLeft:'15px', marginRight:'40px' ,fontSize: '40px',fontWeight: '600' }} className='col-4 col-12 col-lg-3'>
          <h2 className='Latestworks'>Latest</h2> 
                         <h2>Works</h2>
            <p>Lorem ipsum dolor sit amet, 
               consetetur sadipscing elitr,sed 
               diam nonumy eirmod tempor 
               invidunt ut labore et dolore
            </p>
            <img style={{ marginRight:'60px', width:'200px' }} src={button} className="button" />
          </div>
          <div className='col-4 col-12 col-lg-4 '>
          <img src={Card1} className="dillo1" />
          <img src={Card2} className="dillo2" />
          </div>
          <div className='col-4 col-12 col-lg-4 '>
          <img src={Card3} className="dillo3" />
          <img src={Card4} className="dillo4" />
          </div>
         </div>
          </div>
       
   
  );
}

export default Body;

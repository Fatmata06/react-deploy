import React from 'react';
import './Header.css';


function Header () {
  return (
  <section className='h-wrapper'>
    <div className='flexcenter paddings innerWidth '>
        <img src={require('../../assets/images/Logo.png' )} width={100} />
    </div>
    <div className='h-menu'>
    <img src={require("../../assets/images/CTA - Link.png")} width={100} />
    </div>
    <div className='h-container'>
    <div className='h-text'> 
          <span>Hello, I am Adin </span>
          <h5>A Product</h5> 
          <h5>Designer</h5>
          <p >Lorem Ipsum is simply dummy text of the printing 
            Lorem Ipsum has been the industry's standard du 
           when an unknown printer took a unknown printer took a </p>
           <button>
           <img src={require("../../assets/images/Button.png")} width={200} />
           </button>
    </div>
    <div className='milieu'>    <img src={require("../../assets/images/image.png")} />
</div>
    <div className='h-nombre'>
              <h5>120</h5>
              <p>Satisfied Clients</p>
              <h5>285</h5>
              <p>Project Completed</p>
              <h5>10</h5>
              <p>year of experience</p>
              <h5>4300+</h5> 
              <p>House of work</p>
      </div>
      </div>
      <div className='h-icon'>
              <p>Over 120+ Business growing me.</p>
              <div className='h-icons'>

              <div className='h-icon1'>
              {/* style={{marginRight:'60px'}} */}
              <img  src={require("../../assets/images/airbnb.png")}/>
              </div>
              <div className='h-icon3'>
              <img  src={require("../../assets/images/Stripe.png")}/>
              </div>
              <div className='h-icon2'>
                {/* style={{marginRight:'60px'}} */}
              <img src={require("../../assets/images/amazon-2.png")}/>
              </div>
              <div className='h-icon4'>
                {/* style={{marginRight:'60px'}} */}
              <img src={require("../../assets/images/Microsoft.png")}/>
              </div>
                </div>
                </div>
            
      
  </section>
              
  );
}

export default Header;

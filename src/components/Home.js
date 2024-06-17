import React from 'react';
import homebutnunder from '../assets/hombutnundeer.png'
import './Home.css';

const Home = () => {
  return (
   
    <div className="home">
      <div className='deroper'>
      <section className="hero-section">
        <h1 className='hedinging'>Improving companies future through strategic consultancy</h1>
        <button className="getstartedbutton">Get Started</button>
        
      </section>

      <div className='aerfaef'>
        <div className='uiopp'></div>
          <p className='paraemel'>Brentnall BCA provides consulting services related to the Building Code of Australia (BCA) a part of the National Construction Code (NCC)</p>
        </div>
        </div>


      <div className="hellot">
        <div className='ooenfj'>
      <section className="carousel-section">
        <button className="carousel-buttonmm">&larr;</button>
        
        <button className="carousel-buttonmm">Next &rarr;</button>

        
        
      </section>
      <div>
        <img src={homebutnunder} alt="hhop"/>

        </div>
      </div>
      
      
      <section className="services-section">


      
        <div className="service-box">
          <h2>Consulting related to building code of australia (BCA) (NCC)</h2>
          <p>
            With many years' experience providing advice on the requirements of the Building Code of Australia,
            Brentnall BCA is well placed to help clients work their way through the maze of requirements in the BCA.
          </p>
        </div>
        <div className="service-box">
          <h2>Best advisory and consultancy</h2>
          <p>
            Brentnall BCA provides BCA consulting service properties and projects. We provide general BCA matters and also provide
            specific advice fire safety, including fire safety audits of existing buildings and reviews of Council fire orders, and energy efficiency.
          </p>
        </div>
      </section>
      </div>
     
    </div>
  );
};

export default Home;

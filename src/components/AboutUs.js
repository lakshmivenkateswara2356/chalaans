import React from 'react';
import buildin from '../assets/building.jpeg';
import construct from '../assets/construct.png';
import pdf from '../assets/pdf.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';

import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="clients-section">
        <h2>Our top and global clients</h2>
        <div className="clients-logos">
          <img src={img1} alt="John Holland" />
          <img src={img2} alt="Freyssinet" />
          <img src={img3} alt="Walsh" />
          <img src={img4} alt="BMD" />
          <img src={img5} alt="Fletcher Building" />
          <img src={img6} alt="Johnson Controls" />
        </div>
      </section>
      <div>
        <div className='hhio'>
          <div className='kkopp'></div>
          <h2 className='ooper'>We provide consulting services related to the Building Code of Australia (BCA)</h2>
        </div>
        <section className="services-section">
          <div className="services">
            <div className="service">
              <img src={buildin} alt="Design Compliance" />
              <h3>Design compliance assessment</h3>
              <p>Through design we can provide advice on the requirements of the Building Code of Australia (BCA), which is part of the National Construction Code (NCC). Compliance with the requirements of the BCA & NCC is critical in getting approval for your building…</p>
              <button className="explore-button">Explore More</button>
            </div>
            <div className="service">
              <img src={construct} alt="Construction Compliance" />
              <h3>Construction compliance assessment</h3>
              <p>Achieving design compliance is critical, but it doesn’t automatically mean a building will be compliant once it is built. Construction is hard. Things that are neatly designed don’t always work as planned when they are built on site…</p>
              <button className="explore-button">Explore More</button>
            </div>
            <div className="service">
              <img src={pdf} alt="Building Compliance" />
              <h3>Existing building compliance audit</h3>
              
              <p>The requirements of the Building Code of Australia (BCA) and the National Construction Code (NCC) generally reflect the minimum expectations of the community. Those expectations and as a result, the requirements for buildings, change over time…</p>
              <button className="explore-button">Explore More</button>
              <div className="red-line"></div>
            </div>
            
          </div>
          
        </section>
       
      </div>
      {/* Red line animation */}
      <div className='deroll'>
      <section className="carousel-sectionee">
        <button className="carousel-buttonee">&larr;</button>
        
        <button className="carousel-buttonee">Next &rarr;</button>
      </section>
      </div>
    </div>

    
  );
};

export default AboutUs;

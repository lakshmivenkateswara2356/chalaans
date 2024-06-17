import React, { useState, useEffect, useRef } from 'react';

import boyone from '../assets/boyone.png';
import girl from '../assets/girlon.png';
import boy from '../assets/boy.png';
import background from '../assets/backgroujnd.png'
import './ConsultingServices.css';

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et aliquam sapien. Praesent auctor maximus quam eget ultricies. Aliquam eu pulvinar enim. Integer dictum porttitor risus ac bibendum. Nullam malesuada dui ac purus tempor venenatis.",
    author: "Marry Josh",
    image: boyone
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et aliquam sapien. Praesent auctor maximus quam eget ultricies. Aliquam eu pulvinar enim. Integer dictum porttitor risus ac bibendum. Nullam malesuada dui ac purus tempor venenatis eget ultricies. Aliquam eu pulvinar enim. Integer dictum porttitor risus.",
    author: "Nicolas Kante",
    image: girl
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et aliquam sapien. Praesent auctor maximus quam eget ultricies. Aliquam eu pulvinar enim. Integer dictum porttitor risus ac bibendum.",
    author: "Centhia Barney",
    image: boy
  }
];

const ConsultingServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      const selectedCard = carouselRef.current.children[currentIndex];
      const offset = selectedCard.offsetLeft - (carouselRef.current.offsetWidth / 2) + (selectedCard.offsetWidth / 2);
      carouselRef.current.scrollTo({
        left: offset,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="consulting-services">
      <div className='kkopp'></div>
      <h1 className='ooperee'>Best, trusted and value added group</h1>
      <div>
        
        <h1 className='ooperee'> The Authority on the Building Code of Australia</h1>

        <p className='oopereeop'>We can help you achieve compliance and co-ordinate the application package so that your approval process can run smoothely</p>
     
        <div className='kkoppee'></div>
        <div className='uiojk'>
<div className='peertoy'>
  


<div className='jjoper'>
  
        <h1 className='contername'>Total</h1>
        <h1 className='contername'>Employee</h1>
        <h1 className='numberjsj'>250</h1>
        </div>
        <div className='aassde'>
<div className='vertical-lineele'></div>
</div>
        <div>
        <h1 className='contername'>Years</h1>
        <h1 className='contername'>Experienced</h1>
        <h1 className='numberjsje'>30+</h1>
        </div>
        <div className='aassde'>
<div className='vertical-lineele'></div>
</div>        <div>
        <h1 className='contername'>project</h1>
        <h1 className='contername'>Compleated</h1>
        <h1 className='numberjsje'>119</h1>
        </div>
        
        </div>
        <div>
        <img src={background} alt="ghh"/>
        </div>
        </div>
      </div>
      <div className='kkopp'></div>
      <h1 className='ooper'>Services to architects, designers, builders with consultancy from the start</h1>
      <div className='hjiowej'>
        <div className="video-section">
          <div className="video-overlay">
            <img src="/path/to/video-thumbnail.jpg" alt="Consulting video" />
            <div className="play-button">&#9658;</div>
          </div>
        </div>
      </div>
      <p>Delivering our clients more project clarity, greater insight, and less chaos.</p>

      <div className="carousel-container">
        <div>
        <div className="carousel" ref={carouselRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial ${index === currentIndex ? 'highlighted' : ''}`}>
              <p>&ldquo; {testimonial.text} &rdquo;</p>
              <div className="author">
                <img src={testimonial.image} alt={testimonial.author} />
                <div className="author-info">
                  <strong>{testimonial.author}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        </div>
        <div className="carousel-sectioneepp">
        <button className="carousel-buttoneepp" onClick={handlePrevClick}>&larr;</button>
        
        <button className="carousel-buttoneepp" onClick={handleNextClick}>Next &rarr;</button>
      </div>
      </div>
      
    </div>
  );
};

export default ConsultingServices;

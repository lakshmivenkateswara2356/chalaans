import React from 'react';
import './JoinOurTeam.css';
import image from "../assets/myImage.jpg"
import photoon from "../assets/photoon.png"
import phototw from "../assets/phototw.png"
import photothre from "../assets/photothre.png"
import photofour from "../assets/photofour.png"
import photofivv from "../assets/photofivv.png"
import photosix from "../assets/photosix.png"
import photosev from "../assets/photosev.png"
import photoeigh from "../assets/photoeigh.png"
import photonin from "../assets/photonin.png"
import phototen from "../assets/phototen.png"




const JoinOurTeam = () => {
  return (
    <div className="join-our-team">
      <div className="join-content">
      <div className='kkopp'></div>
        <h2 className='ooper'>A focused and hardworking team growing fast</h2>
        <p className='minopirt'>We love to form a team, work with enthusiastic, creative people, and have a great learning attitude.</p>
        <button>Join Our Team</button>
      </div>
      <div className="team-images">
        <img src={photoon} alt="Team member"  className='drooter' />
        <img src={phototw} alt="Team member" className='drooter' />
        <img src={photothre} alt="Team member" className='drooter' />
        <img src={photofour} alt="Team member" className='drooter' />
        <img src={photofivv} alt="Team member" className='drooter' />
        <img src={photosix} alt="Team member" className='drooter' />
        <img src={photosev} alt="Team member" className='drooter' />
        <img src={photoeigh} alt="Team member"  className='drooter'/>
      </div>
    </div>
  );
}

export default JoinOurTeam;

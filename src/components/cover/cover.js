import React from 'react';
import  './cover.css';
import videoCover from '../../media/video-cover.mp4';

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={videoCover} autoPlay loop muted />
        <h1>Lucas Tomas Casco</h1>
        <p>Full stack Developer</p>
    </div>
  )
}

export default Cover

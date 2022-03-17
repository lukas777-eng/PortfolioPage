import React from 'react'
import './slider.css'
import DogsPage from '../../media/DogsPage.jpg'
import ecommerce from '../../media/ecommerce.png'
import weather from '../../media/weather.png'


const slidesInfo = [
    {
        src: DogsPage,
        alt: "DogsPage",
        desc: "DogsPage",
        link: "https://individual-project-dogs.vercel.app/"
    },
    {
        src: ecommerce,
        alt: "Ecommerce",
        desc: "Ecommerce",
        link: "https://reverent-wright-6c3162.netlify.app/"
    },
    {
        src: weather,
        alt: "Weather",
        desc: "Weather",
        link: "https://weather-app-rosy-ten-93.vercel.app/"
    }

];

const Slides = slidesInfo.map(slide => (
    <div className='slide-container'>
        <a href={slide.link}>
        <img src={slide.src} alt={slide.alt} />
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
        </a>
        
    </div>
))

export default Slides;
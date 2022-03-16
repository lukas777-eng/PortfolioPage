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
        alt: "project 2",
        desc: "project 2",
        link: "https://reverent-wright-6c3162.netlify.app/"
    },
    {
        src: weather,
        desc: "project 3",
        link: "https://weather-app-rosy-ten-93.vercel.app/"
    },
    {
        src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt: "project 3",
        desc: "project 3"
    },
    {
        src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt: "project 3",
        desc: "project 3"
    },
    {
        src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt: "project 3",
        desc: "project 3"
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
import React from 'react'
import './slider.css'
import DogsPage from '../../media/DogsPage.jpg'


const slidesInfo = [
    {
        src: DogsPage,
        alt: "DogsPage",
        desc: "DogsPage",
        link: "https://individual-project-dogs.vercel.app/"
    },
    {
        src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt: "project 2",
        desc: "project 2",
        link: "https://reverent-wright-6c3162.netlify.app/"
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
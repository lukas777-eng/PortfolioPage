import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Slides from './slides'
import './slider.css'

const Slider = () => {
  return (
    <div className='carousel-container'>
        <div className='carousel-title'>
            <h2>my projects</h2>
        </div>
        <Carousel
         plugins={[
            'infinite',
            'arrows',
            
         ]}
            arrows
            slidesPerPage={3}
            infinite
            animationSpeed={200}
            centered
            offset={50}
            itemWidth={400}
            slides={Slides}
            breakpoints={{
              960: {
                slidesPerPage: 1,
                arrows: false,
                itemwidth: 250,
              },
            }}

            />
      
    </div>
  )
}

export default Slider

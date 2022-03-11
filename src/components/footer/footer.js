import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-info'>
          <h1>Lucas Tomas Casco</h1>
          <p>Buenos Aires, Argentina</p>
      </div>
      <div className='footer-contact'>
          <h1>contact me</h1>
          <p>and work together</p>
      </div>
      <div className='footer-sns'>
          <div className='design-by'>design by me</div>
          <div className='sns-links'>
              <a href='https://www.linkedin.com/in/lucastomascasco/' target='_blank' rel='noopener noreferrer'>
                  <i className='fab fa-linkedin linkedin'></i>
              </a>
              <a href='https://www.linkedin.com/in/lucastomascasco/' target='_blank' rel='noopener noreferrer'>
                  <i className='fab fa-github github'></i>
              </a>
              <a href='https://www.linkedin.com/in/lucastomascasco/' target='_blank' rel='noopener noreferrer'>
                  <i className='fab fa-twitter twitter'></i>
              </a>
          </div>
      </div>
    </footer>
  )
}

export default Footer

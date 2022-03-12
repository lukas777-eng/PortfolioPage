import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
          <h1>  Hi I'm Lucas ! 👋🏼 Fullstack Developer </h1>
          <h1>with knowledge and experience in HTML | CSS | Javascript | React | Redux | Node | Express | Sequelize | SQL | PostgreSQL | Jest</h1>
          <h3>About me:
🤝I believe that teamwork is the key to success, we can all learn from one another. I love to share ideas and I also love to help when someone has a problem that they don't know how to solve(And in case I don't know it, we can find the answer together).

The company that chooses me will get a curious developer with great problem-solving skills and above all a developer always willing to teach and learn from others.
          </h3>
      </div>
      <div className='about-img'>
          <img src='https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg' alt='about'/>
      </div>
    </div>
  )
}

export default About

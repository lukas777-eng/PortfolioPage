import './App.css';
import Cover from './components/cover/cover';
import Navbar from './components/navbar/navbar';
import React, { useState, useEffect } from 'react'
import About from './components/about/about';
import Slider from './components/slider/slider';
import Info from './components/info/info';
import Footer from './components/footer/footer';



function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <div className="App">
     <Navbar isScrolling={scrollHeight} />
     <Cover/>
     <About/>
     <Slider />
     <Info />
     <Footer />
    </div>
  );
}

export default App;

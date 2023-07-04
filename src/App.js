import React from 'react'

import { Navbar, Header, Blog, Footer, AboutUs, Destinations, Testimonials, FAQ } from './Containers';
import './App.css';

const App = () => {
  return (
    <div className='page__gradient'>
      <Navbar />
      <Header />
      <Blog />
      <AboutUs />
      <Destinations />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App;
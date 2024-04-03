import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Campus from './components/Campus'
import Testimonals from './components/Testimonals'
import Contact from './components/Contact'
import Footer from './components/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Our program' title='what we offer'/>
       <Programs/>
       <About/>
       <Title subTitle='Gallery' title='Campus Photos'/>
       <Campus/>
       <Title subTitle='Testimonals' title='What student says'/>
       <Testimonals/>
       <Title subTitle='Contact Us' title='Get In Touch'/>
       <Contact/>
       <Footer/>
      </div>
      
    </div>
  )
}

export default App

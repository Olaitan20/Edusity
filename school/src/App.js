import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Campus from './components/Campus'
import Testimonals from './components/Testimonals'



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
      </div>
      
    </div>
  )
}

export default App

import React, { useRef } from 'react'
import './Testimonals.css'
import next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'
import user_1 from '../assets/user-1.png'
import user_2 from '../assets/user-2.png'
import user_3 from '../assets/user-3.png'
import user_4 from '../assets/user-4.png'

function Testimonals() {
    const slider = useRef();
    let forward = 0;

    const slideForward = ()=>{
       if(forward < -50) {
            forward -= 25;
       } 
       slider.current.style.transform = `translateX(${forward}%);`
    }
    const slideBackward = ()=>{
        const slideForward = ()=>{
            if(forward < 0) {
                 forward += 25;
            } 
            slider.current.style.transform = `translateX(${forward}%);`
         }
    }


  return (
    <div className='testimonals'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt='' className='back-btn'/>
      <div className='slider'onClick={slideBackward}>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1} alt=''/>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusuty, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive coomunity, state of the art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2} alt=''/>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusuty, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive coomunity, state of the art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3} alt=''/>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusuty, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive coomunity, state of the art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4} alt=''/>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusuty, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive coomunity, state of the art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonals

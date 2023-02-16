import React from 'react'
import "./Foot.css"

const Foot = () => {
  return (
    <div className='foot'>
        <div className='footer'>
        <div className='logo'>
            AirPods
        </div>
        <div className='copyright'>
            <o>Copyright © 2022 . All rights reserved.</o>
        </div>
        <div className='social'>
            <p>follow us on</p>
            <div>
            <i class="fa-brands fa-facebook"></i>
            <i className="fab fa-twitter"/>
            <i className="fab fa-youtube"/>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Foot
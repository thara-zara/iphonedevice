import React ,{useState}from 'react'
import "./Nav.css"

const Nav = () => {
  const [showNav,setShowNav] =useState(true)

  const handleClick = () =>{
    setShowNav(!showNav);
}

  return (
    <div className='nav'>
        <div className='logo'>
            Airpods
        </div>
        <div className={showNav ? 'nav-items' : "nav-items active"} >
            <ul>
                <li>HIGHLIGHTS </li>
                <li>COMMANDS</li>
                <li>PAIRING</li>
                <li>LIFE STYLE</li>
                <li>TECHNOLOGY</li>
                <li>SPECIFICATION</li>
            </ul>
            <div className='close-menu'>
                <i class="fa-regular fa-circle-xmark"  onClick={handleClick}></i>
            </div>
        </div>
        <div className='menu'>
        <i class="fa-solid fa-bars" onClick={handleClick}></i>
        </div>
    </div>
  )
}

export default Nav
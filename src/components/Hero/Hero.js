import React, { useRef,useEffect } from "react";
import gsap from "gsap";
import "./Hero.css"
import hero1 from "../../assets/Group-6.png"
import hero2 from "../../assets/Group-7.png"

import { Timeline } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Timeline)

const Hero = () => {
    const img1 = useRef(null)
    /*cconst firstAnim = () =>{
        const el = img1.current;
        gsap.to(el,
          {
            scrollTrigger:{
              trigger:"el",
              start:"100px 100px",
              end:"800px 100px",
              markers:true,
              toggleActions:"restart pause reverse none"
            },
           scale:1.1,
            y:"20%",
            duration:3
          })
    }
    useEffect(()=>{
      firstAnim();
      },[])*/
  return (
    <div className='hero'>
        <div className='hero-body'>
            <div className='text'>
                <div className='head'>
                AirPods
                </div>
                <div className='sub'>
                More Magical Than Ever.
                </div>
                <div className='sub-des'>
                    Now with more talk time, voice-activated Siri access — 
                    and a new wireless charging case — AirPods deliver
                    an unparalleled wireless headphone experience. 
                    Simply take them out and they’re ready to use with all your 
                    devices. Put them in your ears and they connect immediately,
                    immersing you
                </div>
                <button>watch the film</button>
            </div>
            <div className='image'>
                <div className='img2' >
                <img src={hero2} alt="img" ref={img1}/>
                </div>

                <div className='img1'>
               
                <img src={hero1} alt="img"/>
                </div>

            </div>
            </div>
        <div className='description'>
            <div className='description-head'>
                Wireless to the fullest.
            </div>
            <div className='detalis'>
                After a simple one-tap setup, AirPods are automatically
                on and always connected.1 Using them is just as easy. They sense when they’re
                in your ears and pause when you take them out. And the AirPods experience
                is just as amazing whether you’re using them with your 
                iPhone, Apple Watch, iPad, or Mac.
            </div>
        </div>
    </div>
  )
}

export default Hero
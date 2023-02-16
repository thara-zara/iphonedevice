import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Spec.css"
import phone  from "../../assets/Group-4.png"
import img1 from "../../assets/airpods-1.png"
import img2 from "../../assets/airpods-2.png"

import { Timeline } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Timeline);

const Spec = () => {
    const specAnim = useRef(null);
    const spec = () => {
      const el = specAnim.current;
      gsap.from(el, {
        scrollTrigger: {
          trigger: "el",
          start: "80%",
          end:"bottom -100px",
         
          toggleActions: "restart pause reverse none"
          
        },
        y:500,
        duration:2,
      });
      gsap.to(el, {
        scrollTrigger: {
          trigger: "el",
          start: "80%",
          end:"bottom -100px",
          
          toggleActions: "restart pause reverse none",
        },
        y:0,
        duration: 2,
      });
    };
    
    useEffect(() => {
      spec();
    }, []);
  return (
    <div className='spec'>
        <div className='spec-bdy'>
            <div className='spec-content'>
                <div className='spec-left'>
                    <div className='spec-head'>
                        Lose yourself in 50 million songs
                    </div>
                    <button>try it today</button>
                </div>
                <div className='spec-right'>
                    <div className='main-spec' ref={specAnim}>
                        <img src={phone} alt="img"/>
                    </div>
                    <div className='mini1'>
                        <img src={img1} alt="img"/>
                    </div>
                    <div className='mini2'>
                        <img src={img2} alt="img"/>
                    </div>
                </div> 
            </div>
            
        </div>
    </div>
  )
}

export default Spec
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Charge.css"
import charge from "../../assets/Group-5.png"
import pods from "../../assets/airpods_12.png"

import { Timeline } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Timeline);


const Charge = () => {

    const chargAnim = useRef(null);
  const charger = () => {
    const el = chargAnim.current;
    gsap.from(el, {
      scrollTrigger: {
        trigger: "el",
        start: "60% 100px",
        end: "75% 100px",
       
        toggleActions: "restart pause reverse none",
      },
      scale:0.7,
      duration: 5,
    });
    gsap.to(el, {
        scrollTrigger: {
          trigger: "el",
          start: "60% 100px",
          end: "75% 100px",
          
          toggleActions: "restart pause reverse none",
        },
        scale:1,
        duration:5,
      });
  };
  useEffect(() => {
    charger();
  }, []);
  return (
    <div className='charge'>
        <div className='charge-bdy'>
            <div className='charge-right'>
                <div className='charge-img' ref={chargAnim}>
                    <img src={charge} alt="img"/>
                </div>
            </div>
            <div className='charge-text'>
                <div className='charge-sub'>
                Wireless Charging Case
                </div>
                <div className='charge-sub-des'>
                    Now with more talk time, voice-activated Siri access — 
                    and a new wireless charging case — AirPods deliver
                    an unparalleled wireless headphone experience. 
                    Simply take them out and they’re ready to use with all your 
                    devices. Put them in your ears and they connect immediately,
                    immersing you
                </div>
                <div className='button'>
                    <img src={pods} alt="img" />
                    <button>watch the film</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Charge
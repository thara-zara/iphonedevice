import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Tab.css"
import tab from "../../assets/Group-8.png"

import { Timeline } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Timeline);

const Tab = () => {
    const tabs = useRef(null);
    const tabAnim = () => {
      const el = tabs.current;
      gsap.to(el, {
        scrollTrigger: {
          trigger: "el",
          start: "20% 100px",
          end: "25% 100px",
          
          toggleActions: "restart pause reverse none",
        },
        scale: 1,
        rotate:90,
        duration: 5,
      });
    };
    useEffect(() => {
        tabAnim();
    }, []);

  return (
    <div className='tab'>
        <div className='tab-body'>
            <div className='tab-left' ref={tabs} >
                <img src={tab} alt="img"/>
            </div>
            <div className='tab-right'>
                    <div className='head'>
                        Double tab to call Siri
                    </div>
                    <div className='sub-des'>
                        When you take your AirPods out of the case, 
                        they're on and ready to use. When you put 
                        them in your ears, your AirPods automatically 
                        play the audio from your device. If you take an AirPod out, 
                        audio pauses. Take them both out and audio stops. If you're 
                        listening with one AirPod and you take it out, the AirPod pauses. 
                        If you put it back in your ear within 15 seconds, 
                        play resumes automatically.
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Tab
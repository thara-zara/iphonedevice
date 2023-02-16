import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Design.css"
import man from "../../assets/person.png"


import { Timeline } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Timeline);


const Design = () => {
  const designAnim = useRef(null);
  const design = () => {
    const el = designAnim.current;
    gsap.to(el, {
      scrollTrigger: {
        trigger: "el",
        start: "42% 100px",
        end: "60% 100px",
        
        toggleActions: "restart pause reverse none",
      },
      scale: 1,
      x: "-20%",
      duration: 5,
    });
  };
  useEffect(() => {
    design();
  }, []);


  return (
    <div className="content">
        <div className='design-body'>
            <div className='design-top'>
                <div className='design-head'>
                Pocketable slim design <br/> on the go
                </div>
                <div className='design-des'>
                Slip them in your pocket and go. 
                Apple air pods feature a newly refined 
                design that makes them so compact they
                 fit in comfortably with the rest 
                 of your belongings. 
                They also come in standard color options
                 that blend right in to your daily routine.
                </div>
            </div>
            <div className='design-btm' ref={designAnim}>
                <img src={man} alt="img"/>
            </div>
        </div>
    </div>
  )
}

export default Design;
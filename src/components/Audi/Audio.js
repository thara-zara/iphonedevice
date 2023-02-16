import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Audio.css"
import img1 from "../../assets/airpods-1.png"
import img2 from "../../assets/airpods-2.png"
import img3 from "../../assets/airpods-3.png"
import img4 from "../../assets/airpods-4.png"
import img5 from "../../assets/sharing_music.png"


import { Timeline } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Timeline);

const Audio = () => {

const audiAnim = useRef(null);
const audiAnim2 = useRef(null);
const audiAnim3 = useRef(null);
const audiAnim4 = useRef(null);
  const audi = () => {
    const el = audiAnim.current;
    const el2 = audiAnim2.current;
    const el3 = audiAnim3.current;
    const el4 = audiAnim4.current;
    gsap.to(el, {
      scrollTrigger: {
        trigger: "el",
        start: "70% 100px",
        end: "80% 0px",
      
        toggleActions: "restart pause reverse none",
      },
      x: "-80%",
      rotate:180,
      duration: 5,
    });
    gsap.to(el2, {
        scrollTrigger: {
          trigger: "el2",
          start: "70% 100px",
          end: "80% 100px",
   
          toggleActions: "restart pause reverse none",
        },
        x: "50%",
        rotate:180,
        duration: 10,
      });
      gsap.to(el3, {
        scrollTrigger: {
          trigger: "el3",
          start: "70% 100px",
          end: "80% 100px",
         
          toggleActions: "restart pause reverse none",
        },
        x: "80%",
        rotate:180,
        duration:10,
      });
      gsap.to(el4, {
        scrollTrigger: {
          trigger: "el4",
          start: "70% 100px",
          end: "75% 100px",
          
          toggleActions: "restart pause reverse none",
        },
        x: "-80%",
        rotate:180,
        duration: 10,
      });
  };

  useEffect(() => {
    audi();
  }, []);

  return (
    <div className='audio'>
        <div className='audio-bdy'>
            <div className='aduio-top'>
                <div className='audio-head'>
                     Audio Sharing
                </div>
                <div className='audio-sub'>
                    With one simple tap, share a song, podcast, or other audio stream
                    between two sets of AirPods — each with independent volume control.
                </div>
            </div>
            <div className='aduio-btm'>
                <div className='audio-img'>
                    <div className='main' >
                         <img src={img5} alt="img"/>
                    </div>
                    <div className='one'>
                        <img src={img1} alt="img" ref={audiAnim}/>
                    </div>
                    <div className='two'>
                        <img src={img2} alt="img" ref={audiAnim2}/>
                    </div>
                    <div className='three'>
                        <img src={img3} alt="img" ref={audiAnim3}/>
                    </div>
                    <div className='four'>
                        <img src={img4} alt="img" ref={audiAnim4}/>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Audio
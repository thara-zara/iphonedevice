import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Setup.css";
import img1 from "../../assets/Mask-Group-1.png";
import img2 from "../../assets/Group-9.png";
import img3 from "../../assets/Airpods.png";

import { Timeline } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Timeline);

const Setup = () => {
  const imganim = useRef(null);
  const imganim2 = useRef(null);

  const firstAnim = () => {
    const el = imganim.current;
    gsap.to(el, {
      scrollTrigger: {
        trigger: "el",
        start: "25% 100px",
        end: "40% 100px",
        
        toggleActions: "restart pause reverse none",
      },
      scale: 1,
      x: "-30%",
      duration: 2,
    });
  };

  const seconAnim = () => {
    const el = imganim2.current;
    gsap.to(el, {
      scrollTrigger: {
        trigger: "el",
        start: "25% 100px",
        end: "40% 100px",
        
        toggleActions: "restart pause reverse none",
      },
      scale: 1,
      x: "50%",
      duration: 2,
    });
  };

  useEffect(() => {
    firstAnim();
    seconAnim();
  }, []);

  return (
    <div className="setup">
      <div className="setup-body">
        <div className="setup-text">
          <div className="head">Easy setup magical results.</div>
          <div className="sub-des">
            Now with more talk time, voice-activated Siri access — and a new
            wireless charging case — AirPods deliver an unparalleled wireless
            headphone experience. Simply take them out and they’re ready to use
            with all your devices. Put them in your ears and they connect
            immediately, immersing you
          </div>
          <button>watch the film</button>
        </div>
        <div className="setup-right">
          <div className="img-set">
            <div className="watch" ref={imganim}>
              <img src={img1} alt="img" />
            </div>
            <div className="phone">
              <img src={img2} alt="img" />
            </div>
            <div className="head-set" ref={imganim2}>
              <img src={img3} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;

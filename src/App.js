import React, { useRef, useEffect, useState } from 'react';
import { TimelineLite, Power3, Power2, TweenMax, ScrollTrigger, gsap } from "gsap/all"
import backgroundImg from "./assets/wallpaper.jpg"
import './App.scss';
import { logoLabel, sections } from './constants';
import { Animated } from "react-animated-css";

gsap.registerPlugin(ScrollTrigger)
var pageHeight = window.innerHeight;
function App() {
  let app = useRef(null)
  let content = useRef(null)
  let revealRefs = useRef([]);
  revealRefs.current = [];
  let logotext = useRef(null)
  const [isVisibleLogo, setIsVisibleLogo] = useState(true)
  const [showLogo, setShowLogo] = useState(true)
  let tl = new TimelineLite();

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: 'visible' } })




    // tl.from(firstElement.firstElementChild, 1.2, { ease: Power3.easeOut })

    setTimeout(() => {
      setIsVisibleLogo(false)
    }, 4000)
    setTimeout(() => {
      setShowLogo(false)

      if (revealRefs.current.length) {

      }
    }, 5000)




    // const first = content

    // tl.from(ptt, 1.2, {y: 140, ease: Power3.easeOut})

    // let sections = gsap.utils.toArray(revealRefs.current)
    // tl.to(sections, {
    //   xPercent: 0 * (sections.length - 1),
    //   ease: "none",
    //   duration: 0.2,
    //   scrollTrigger: {
    //     trigger: "section",
    //     pin: true,
    //     scrub: 0,
    //     markers: true,
    //     snap: 1 / (sections.length - 1),
    //     end: () => "+=" + document.querySelector(".section").offsetWidth
    //   }
    // })

    // revealRefs.current.forEach((el, index) => {
    //   gsap.fromTo(el, {
    //     xPercent: -100 * (el),
    //     ease: "none",
    //     scrollTrigger: {
    //       id: `section-${index + 1}`,
    //       trigger: el,
    //       pin: true,
    //       scrub: 1,
    //       snap: 1 / (el),
    //     }
    //   })
    // })

    // revealRefs.current.forEach((el, index) => {
    //   gsap.fromTo(el, {
    //     autoAlpha: 0
    //   }, {
    //     duration: 1,
    //     autoAlpha: 1,
    //     ease: 'none',
    //     scrollTrigger: {
    //       id: `section-${index + 1}`,
    //       trigger: el,
    //       scrub: 1,
    //       pin: true,
    //       start: 'top center+=100',
    //       toggleActions: 'play none none reverse',
    //       markers: true
    //     }
    //   })
    // })

  }, [])

  useEffect(() => {
    if (!showLogo) {
      let firstElement = null;
      let secondElement = null;
      if (revealRefs.current.length) {
        firstElement = revealRefs.current[0];
        secondElement = revealRefs.current[1];
      }

      TweenMax.to(firstElement, 0, { css: { visibility: 'visible' } })
      tl.staggerFrom(firstElement.firstElementChild.children[0], 1, {
        y: 44, ease: Power2.easeInOut, color: "black", delay: .8
      }, 0.2).from(firstElement.firstElementChild, 1, {
        background: 'black',
        ease: Power2.easeOut,
      })

      TweenMax.to(secondElement, 0, { css: { visibility: 'visible' } })
      tl.staggerFrom(secondElement.firstElementChild.children[0], 1, {
        y: 200, ease: Power2.easeInOut, color: "black", delay: .8
      }, 0.2).from(secondElement.firstElementChild, 1, {
        background: 'black',
        ease: Power2.easeOut,
      })
    }
  }, [showLogo])

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <div className="homepage" ref={el => app = el}>
      {
        showLogo ? <div className="logo-text-div">
          <h1 className="text-tag" ref={el => logotext = el}>
            <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={isVisibleLogo}>
              {
                logoLabel.map((item, index) => {
                  if (item === " ") {
                    return <Animated key={index} animationIn="fadeInRight" isVisible={true} animationInDuration={500} animationInDelay={600}>
                      <div className="animate__animated animate__fadeIn">
                        &nbsp;
                    </div>
                    </Animated>
                  } else {
                    return <Animated key={index} animationIn="fadeInRight" isVisible={true} animationInDuration={400} animationInDelay={index * 80}>
                      <Animated animationIn="fadeIn" isVisible={true} animationInDuration={1000} animationInDelay={index * 100}>
                        <p style={{ padding: "0px 1px" }}>{item}</p>
                      </Animated>
                    </Animated>
                  }
                })
              }
            </Animated>
          </h1>
        </div> : <div className="homepage-content">
            <div className="homepage-div">
              {sections.map((section, index) => <div key={index} className="section" ref={addToRefs}>
                <div className={`label-div label-div-${index}`}>
                  <p>{section.label}</p>
                </div>
              </div>)}
              {/* <div className="section" id="idd"> */}
              {/* <p>Website Design</p>
                <div className="box"></div>
              </div>

              <div className="section" id="idd">
                <p>E-commerce</p>
                <div className="box"></div>
              </div>

              <div className="section" id="idd">
                <p>Mobile App</p>
                <div className="box"></div>
              </div>

              <div className="section" id="idd" ref={addToRefs}>
                <p>Software</p>
                <div className="box"></div>
              </div> */}
              {/* </div> */}
            </div>
          </div>
      }
    </div>
  );
}

export default App;

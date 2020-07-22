import React, { useRef, useEffect, useState } from 'react';
import { TimelineLite, Power3, Power2, TweenMax, ScrollTrigger, gsap } from "gsap/all"
import './App.scss';
import reonGif from "./assets/reonLogo.gif"
import reonLogo from "./assets/R16-white.png"
import WebsiteDesign from './homepage/WebsiteDesign';
import Ecommerce from './homepage/Ecommerce';
import MobileApp from './homepage/MobileApp';
import Software from './homepage/Software';
import DigitalMarketing from './homepage/DigitalMarketing';
import dm from "./assets/homepage/dm.jpg"
import ec from "./assets/homepage/ec.jpg"
import ma from "./assets/homepage/ma.jpg"
import sh from "./assets/homepage/sh.jpg"
import wd from "./assets/homepage/wd.jpg"
import ClasaCmp from './homepage/ClassCmp';
import { Animated } from "react-animated-css"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


gsap.registerPlugin(ScrollTrigger)
function App() {
  let app = useRef(null)
  let content = useRef(null)
  let revealRefs = useRef([]);
  revealRefs.current = [];
  let logotext = useRef(null)
  const [isVisibleLogo, setIsVisibleLogo] = useState(true)
  const [showLogo, setShowLogo] = useState(true)
  const [activeIndex, setActiveIndex] = useState(1)
  const [imageVisible, setImageVisible] = useState(true)
  const [textVisible, setTextVisible] = useState(true)
  const [blackDivVisible, setblackDivVisible] = useState(false)
  const [pageChange, setPageChange] = useState(true)
  const [activePage, setActivePage] = useState(1);
  const [tl] = useState(gsap.timeline({ delay: 0.8 }))
  const activeIndexRef = useRef(activeIndex);
  const pageChangeRef = useRef(pageChange);
  // const imageVisibleRef = useRef(imageVisible)
  const textVisibleRef = useRef(textVisible)
  // const blackDivVisibleRef = useRef(blackDivVisible)

  useEffect(() => {
    let img1 = new Image();
    let img2 = new Image();
    let img3 = new Image();
    let img4 = new Image();
    let img5 = new Image();
    img1.src = dm;
    img2.src = ec;
    img3.src = ma;
    img4.src = sh;
    img5.src = wd;

    // TweenMax.to(app, 0, { css: { visibility: 'visible', transform: 'visibility 1000ms Linear' } })
    // tl.from(firstElement.firstElementChild, 1.2, { ease: Power3.easeOut })

    // setTimeout(() => {
    // setIsVisibleLogo(false)
    // }, 4000)
    setTimeout(() => {
      setShowLogo(false)
    }, 6100)

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

    // $('#root').on('mousewheel', onMouseMove);
    window.addEventListener('mousewheel', onMouseMove, true)
    return () => {
      window.removeEventListener('mousewheel', onMouseMove, true)
    }
  }, [])

  const onMouseMove = (event) => {
    if (event.deltaY < 0) {
      if (pageChangeRef.current) {
        console.log('mouse up')
        if (activeIndexRef.current === 1) {

          setTextVisible((textVisible) => {
            textVisibleRef.current = false
            return textVisible = textVisibleRef.current
          })

          setActiveIndex((activeIndex) => {
            activeIndexRef.current = 5
            return activeIndex = activeIndexRef.current
          })

        } else {

          setTextVisible((textVisible) => {
            textVisibleRef.current = false
            return textVisible = textVisibleRef.current
          })

          setActiveIndex((activeIndex) => {
            activeIndexRef.current = activeIndexRef.current - 1
            return activeIndex = activeIndexRef.current
          })

        }
      }
      return
    }
    else if (event.deltaY > 0) {
      console.log('mouse down')
      if (pageChangeRef.current) {
        if (activeIndexRef.current > 4) {

          setTextVisible((textVisible) => {
            textVisibleRef.current = false
            return textVisible = textVisibleRef.current
          })

          setActiveIndex((activeIndex) => {
            activeIndexRef.current = 1
            return activeIndex = activeIndexRef.current
          })
        } else {

          setTextVisible((textVisible) => {
            textVisibleRef.current = false
            return textVisible = textVisibleRef.current
          })


          setActiveIndex((activeIndex) => {
            activeIndexRef.current = activeIndexRef.current + 1
            return activeIndex = activeIndexRef.current
          })

        }
      }
    }
    return false
  }

  useEffect(() => {
    setPageChange((pageChange) => {
      pageChangeRef.current = false
      return pageChangeRef.current
    })
    setTimeout(() => {
      setTextVisible((textVisible) => {
        textVisibleRef.current = true
        return textVisible = textVisibleRef.current
      })
    }, 1980)
    setTimeout(() => {
      setActivePage(activeIndexRef.current)
    }, 2000)

    setTimeout(() => {
      setPageChange((pageChange) => {
        pageChangeRef.current = true
        return pageChangeRef.current
      })
    }, 2100)
  }, [activeIndexRef.current])

  // useEffect(() => {
  //   if (!showLogo) {
  //     let firstElement = null;
  //     let secondElement = null;
  //     if (revealRefs.current.length) {
  //       firstElement = revealRefs.current[0];
  //       secondElement = revealRefs.current[1];
  //     }
  // TweenMax.to(firstElement, 0, { css: { visibility: 'visible' } })
  // tl.staggerFrom(firstElement.firstElementChild.children[0], 1, {
  //   y: 44, ease: Power2.easeInOut, color: "black", delay: .8
  // }, 0.2).from(firstElement.firstElementChild, 1, {
  //   background: 'black',
  //   ease: Power2.easeOut,
  // })

  // TweenMax.to(secondElement, 0, { css: { visibility: 'visible' } })
  // tl.staggerFrom(secondElement.firstElementChild.children[0], 1, {
  //   y: 200, ease: Power2.easeInOut, color: "black", delay: .8
  // }, 0.2).from(secondElement.firstElementChild, 1, {
  //   background: 'black',
  //   ease: Power2.easeOut,
  // })
  // }
  // }, [showLogo])

  // const onChangeOwlDrag = (e) => {
  //   console.log(e, "event")
  // }

  // console.log(activePage, "goToScrollNext")
  return (
    <div className="homepage" ref={el => app = el}>
      {
        showLogo ? <div className="logo-text-div">
          <div className="image-div">
            <img src={reonGif} alt="" />
          </div>
          {/* <h1 className="text-tag" ref={el => logotext = el}>
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
                      <Animated animationIn="bounceIn" isVisible={true} animationInDuration={1500} animationInDelay={index * 100}>
                        <p style={{ padding: "0px 1px" }}>{item}</p>
                      </Animated>
                    </Animated>
                  }
                })
              }
            </Animated>
          </h1> */}
        </div> :
          <Animated animationIn="fadeIn" animationInDuration={3500}>
            <div className="homepage-content">
              <div className="homepage-info-div">
                <div className="logo-image-div">
                  <img src={reonLogo} />
                </div>
              </div>
              <div className="homepage-div">
                {
                  activePage === 1 ? <WebsiteDesign textVisible={textVisible} /> :
                    activePage === 2 ? <Ecommerce textVisible={textVisible} /> :
                      activePage === 3 ? <MobileApp textVisible={textVisible} /> :
                        activePage === 4 ? <Software textVisible={textVisible} /> :
                          <DigitalMarketing textVisible={textVisible} />
                }
              </div>
            </div>
            <ClasaCmp
              activeIndex={activeIndex}
              activeIndexRef={activeIndexRef}
              setActiveIndex={setActiveIndex}
              setTextVisible={setTextVisible}
              textVisibleRef={textVisibleRef}
            />
          </Animated>
      }
    </div>
  );
}

export default App;

import React, { useEffect, useRef, useState } from 'react'
import dm from "../assets/homepage/dm.jpg"
import { gsap } from "gsap/all"
import { Animated } from "react-animated-css";

function DigitalMarketing(props) {
    const { textVisible } = props;
    const [tl] = useState(gsap.timeline({ delay: 0.8 }))
    let focus = useRef(null)

    useEffect(() => {
        tl.to(focus, 0, { transform: 'scale(1.2)', transition: 'transform 15s ease-in' })
    }, [])

    return (
        <div className="sections">
            <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDuration={4000}
                animationOutDuration={3000}
                // animationOutDelay={500}
                isVisible={textVisible}
                className="image-div"
            >
                <img ref={el => focus = el} className="active" src={dm} id="image-focus" />
                <Animated
                    animationIn="slideOutLeft"
                    animationOut="slideOutLeft"
                    className="black-div"
                    animationOutDuration={2000}
                    animationOutDelay={0}
                    isVisible={!textVisible}
                >

                </Animated>
                <Animated
                    animationIn="slideInRight"
                    className="black-div"
                    animationInDuration={2000}
                    isVisible={!textVisible}
                >

                </Animated>
            </Animated>
        </div>
    )
}

export default DigitalMarketing;

import React, { useEffect } from 'react'
import ec from "../assets/homepage/ec.jpg"
import { Animated } from "react-animated-css";

function Ecommerce(props) {
    const { textVisible } = props;

    return (
        <div className="sections">
            <Animated
                animationIn="slideInRight"
                animationOut="fadeOut"
                animationInDuration={1000}
                animationOutDuration={1500}
                // animationOutDelay={500}
                isVisible={textVisible}
                className="image-div"
            >
                <img src={ec} />
                <Animated
                    animationIn="slideOutLeft"
                    animationOut="slideOutLeft"
                    className="black-div"
                    animationOutDuration={1000}
                    animationOutDelay={0}
                    isVisible={!textVisible}
                >

                </Animated>
                <Animated
                    animationIn="slideInRight"
                    className="black-div"
                    animationInDuration={1500}
                    isVisible={!textVisible}
                >

                </Animated>
            </Animated>
        </div>
    )
}

export default Ecommerce;

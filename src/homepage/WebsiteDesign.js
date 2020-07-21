import React, { useEffect } from 'react'
import wd from "../assets/homepage/wd.jpg"
import { Animated } from "react-animated-css";

function WebsiteDesign(props) {
	const { textVisible } = props;

	// useEffect(() => {
	// 	const textWrapper = document.querySelector('.ml2');
	// 	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	// 	if (textVisible) {
	// 		setTimeout(() => {
	// 			document.getElementById('showthis').style.visibility = 'visible';
	// 			window.anime.timeline()
	// 				.add({
	// 					targets: '.ml2 .letter',
	// 					scale: [4, 1],
	// 					opacity: [0, 1],
	// 					translateZ: 0,
	// 					easing: "easeOutExpo",
	// 					duration: 1500,
	// 					delay: (el, i) => 70 * i
	// 				})
	// 				.add({
	// 					targets: '.ml2',
	// 					delay: 1000
	// 				});
	// 		}, 700)
	// 	} else {
	// 		window.anime.timeline()
	// 			.add({
	// 				targets: '.ml2',
	// 				opacity: 0,
	// 				duration: 2000,
	// 				easing: "easeOutExpo",
	// 			});
	// 	}
	// }, [textVisible])

	return (
		<div className="sections">
			<Animated
				animationIn="slideInRight"
				animationOut="slideOutLeft"
				animationInDuration={1000}
				animationOutDuration={2000}
				// animationOutDelay={500}
				isVisible={textVisible}
				className="image-div"
			>
				<img src={wd} />
				{/* <h1 className="ml2" id="showthis">Website Design</h1> */}
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

export default WebsiteDesign;

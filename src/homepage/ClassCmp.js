import React, { PureComponent } from "react";
import Slider from "react-slick";
import { WebsiteDesign, ECommerce, MobileApp, DigitalMarketing, Software } from "../constants";

export default class ClassCmp extends PureComponent {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.onChangeSlide = this.onChangeSlide.bind(this)
        this.state = {
            enableMouseEnter: false
        }
    }
    componentDidMount() {
        this.slider.slickGoTo(this.props.activeIndex - 1)
        setTimeout(() => {
            window.addEventListener('mousewheel', this.onMouseMove, true)
        }, 1500)
        setTimeout(() => {
            this.setState({ enableMouseEnter: true })
        }, 2000)
    }
    componentWillUnmount() {
        window.addEventListener('mousewheel', this.onMouseMove, true)
    }
    onMouseMove = (e) => {
        if (e.deltaY > 0) {
            this.slider.slickNext()
            // this.slider.slickGoTo(this.props.activeIndex - 1)
        } else {
            this.slider.slickPrev();
            // this.slider.slickGoTo(this.props.activeIndex - 1)
        }
        return false
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    onChangeSlide(index) {
        // console.log(index, "index")
        // return
        if (this.state.enableMouseEnter) {
            if (this.props.activeIndex === index) {
                return
            }
            if (this.props.activeIndex === 1 && index === 5) {
                // this.slider.slickPrev();
                this.props.setTextVisible((textVisible) => {
                    this.props.textVisibleRef.current = false
                    return textVisible = this.props.textVisibleRef.current
                })
                this.props.setActiveIndex((activeIndex) => {
                    this.props.activeIndexRef.current = index
                    return activeIndex = this.props.activeIndexRef.current
                })
            } else if (this.props.activeIndex === 5 && index === 1) {
                // this.slider.slickNext();
                this.props.setTextVisible((textVisible) => {
                    this.props.textVisibleRef.current = false
                    return textVisible = this.props.textVisibleRef.current
                })
                this.props.setActiveIndex((activeIndex) => {
                    this.props.activeIndexRef.current = index
                    return activeIndex = this.props.activeIndexRef.current
                })
            } else {
                // this.slider.slickGoTo(index - 1)
                this.props.setTextVisible((textVisible) => {
                    this.props.textVisibleRef.current = false
                    return textVisible = this.props.textVisibleRef.current
                })
                this.props.setActiveIndex((activeIndex) => {
                    this.props.activeIndexRef.current = index
                    return activeIndex = this.props.activeIndexRef.current
                })
            }
            this.setState({ enableMouseEnter: false })
            setTimeout(() => {
                this.setState({ enableMouseEnter: true })
            }, 3000)
        }
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            // centerMode: true,
            arrows: false,
            slidesToShow: 2.5,
            slidesToScroll: 1,
            // focusOnSelect: false,
            variableWidth: true
        };

        return (
            <div style={{ height: "100%" }}>
                <Slider ref={c => (this.slider = c)} {...settings} className="react-slick-slider">
                    <div style={{ width: 730 }} key={1} className={`background-slick ${this.props.activeIndex === 1 ? "active" : ""}`} onMouseOver={() => this.onChangeSlide(1)}>
                        <div className="react-slick-inner">
                            <h3>{WebsiteDesign.map(item => {
                                if (item === " ") {
                                    return <span>&nbsp;</span>
                                }
                                return <span>{item}</span>
                            })}</h3>
                        </div>
                    </div>
                    <div style={{ width: 650 }} key={2} className={`background-slick ${this.props.activeIndex === 2 ? "active" : ""}`} >
                        <div className="react-slick-inner">
                            <h3 onMouseOver={() => this.onChangeSlide(2)}>{ECommerce.map(item => {
                                if (item === " ") {
                                    return <span>&nbsp;</span>
                                }
                                return <span>{item}</span>
                            })}</h3>
                        </div>
                    </div>
                    <div style={{ width: 620 }} key={3} className={`background-slick ${this.props.activeIndex === 3 ? "active" : ""}`} >
                        <div className="react-slick-inner">
                            <h3 onMouseOver={() => this.onChangeSlide(3)}>{MobileApp.map(item => {
                                if (item === " ") {
                                    return <span>&nbsp;</span>
                                }
                                return <span>{item}</span>
                            })}</h3>
                        </div>
                    </div>
                    <div style={{ width: 550 }} key={4} className={`background-slick ${this.props.activeIndex === 4 ? "active" : ""}`} onMouseOver={() => this.onChangeSlide(4)}>
                        <div className="react-slick-inner">
                            <h3 onMouseOver={() => this.onChangeSlide(4)}>{Software.map(item => {
                                if (item === " ") {
                                    return <span>&nbsp;</span>
                                }
                                return <span>{item}</span>
                            })}</h3>
                        </div>
                    </div>
                    <div style={{ width: 800 }} key={5} className={`background-slick ${this.props.activeIndex === 5 ? "active" : ""}`} onMouseOver={() => this.onChangeSlide(5)}>
                        <div className="react-slick-inner">
                            <h3 onMouseOver={() => this.onChangeSlide(5)}>{DigitalMarketing.map(item => {
                                if (item === " ") {
                                    return <span>&nbsp;</span>
                                }
                                return <span>{item}</span>
                            })}</h3>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
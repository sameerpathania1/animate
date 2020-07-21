import React, { PureComponent } from "react";
import Slider from "react-slick";

export default class ClassCmp extends PureComponent {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.onChangeSlide = this.onChangeSlide.bind(this)
    }
    componentDidMount() {
        this.slider.slickGoTo(this.props.activeIndex - 1)
        setTimeout(() => {
            window.addEventListener('mousewheel', this.onMouseMove, true)
        }, 1500)
    }
    componentWillUnmount() {
        window.addEventListener('mousewheel', this.onMouseMove, true)
    }
    onMouseMove = (e) => {
        if (e.deltaY > 0) {
            this.slider.slickNext()
            this.slider.slickGoTo(this.props.activeIndex - 1)
        } else {
            this.slider.slickPrev();
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
        if (this.props.activeIndex === index) {
            return
        }
        this.slider.slickGoTo(index - 1)
        this.props.setTextVisible((textVisible) => {
            this.props.textVisibleRef.current = false
            return textVisible = this.props.textVisibleRef.current
        })
        this.props.setActiveIndex((activeIndex) => {
            this.props.activeIndexRef.current = index
            return activeIndex = this.props.activeIndexRef.current
        })
        // this.props.setActiveIndex(index)
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 1500,
            centerMode: true,
            arrows: false,
            centerPadding: "50px",
            slidesToShow: 2.5,
            focusOnSelect: false
        };

        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings} className="react-slick-slider">
                    <div key={1} className={`background-slick ${this.props.activeIndex === 1 ? "active" : ""}`} onClick={() => this.onChangeSlide(1)}>
                        <h3>Website Design</h3>
                    </div>
                    <div key={2} className={`background-slick ${this.props.activeIndex === 2 ? "active" : ""}`} onClick={() => this.onChangeSlide(2)}>
                        <h3>E-Commerce</h3>
                    </div>
                    <div key={3} className={`background-slick ${this.props.activeIndex === 3 ? "active" : ""}`} onClick={() => this.onChangeSlide(3)}>
                        <h3>Mobile App</h3>
                    </div>
                    <div key={4} className={`background-slick ${this.props.activeIndex === 4 ? "active" : ""}`} onClick={() => this.onChangeSlide(4)}>
                        <h3>Software</h3>
                    </div>
                    <div key={5} className={`background-slick ${this.props.activeIndex === 5 ? "active" : ""}`} onClick={() => this.onChangeSlide(5)}>
                        <h3>Digital Marketing</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}
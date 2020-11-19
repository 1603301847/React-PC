import React, { Component } from 'react';
import '../scss/carouselPage.scss';

class CarouselHtml extends Component {

    componentDidMount() {
        // this.autoPlay();
    }

    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            select: false,
            cur: 0,
            timer: null,
            data: [
                {
                    imgContent: "1",
                    imgSrc: "../images/pic1.jpg"
                },
                {
                    imgContent: "2",
                    imgSrc: "../images/pic2.jpg"
                },
                {
                    imgContent: "3",
                    imgSrc: "../images/pic3.jpg"
                },
                {
                    imgContent: "4",
                    imgSrc: "../images/pic4.jpg"
                }
            ]
        }
    }

    // 鼠标划入显示左右箭头
    showArrow() {
        this.setState({
            isShow: true
        })
    }

    // 鼠标划出隐藏左右箭头
    hideArrow() {
        this.setState({
            isShow: false
        })
    }

    // 点击按钮开始自动轮播
    startClick() {
        this.autoPlay();
    }

    // 点击按钮停止自动轮播
    stopClick() {
        clearTimeout(this.state.timer)
    }

    // 点击左侧按钮切换到上一张
    switchPrev(a) {
        var cur = a

        cur--;

        if (cur < 0) {
            cur = 3
        }

        this.setState({
            cur: cur
        })
    }

    // 点击右侧按钮切换到下一张
    switchNext(curold) {
        var cur = curold;
        cur++;
        if (cur > 3) {
            cur = 0
        }

        this.setState({
            cur: cur
        })
    }

    // 点击下面的按钮切换到每一张
    iconClick(i) {
        this.setState({
            cur: i
        })
    }

    // 自动轮播
    autoPlay() {
        let _this = this
        let timer = setInterval(function () {
            let cur = _this.state.cur
            cur++;
            if (cur > 3) {
                cur = 0
            }
            _this.setState({
                cur: cur
            })
        }, 1000)
        this.setState({
            timer: timer
        })
    }

    render() {

        let { data, isShow, cur } = this.state;

        return <div className="mt-carousel-page">
            <h1>{this.state.cur}</h1>
            <button onClick={() => this.startClick()}>开启自动轮播</button>
            <button onClick={() => this.stopClick()}>停止自动轮播</button>
            <div className="mt-carousel" onMouseOver={() => this.showArrow()} onMouseOut={() => this.hideArrow()}>
                <button type="button" className="mt-left-carousel-arrow" style={{ display: (true === isShow) ? "block" : "none" }} onClick={() => this.switchPrev(cur)}>
                    <i className="iconfont icon-jiantou-zuo"></i>
                </button>

                <div className="mt-carousel-list">
                    <div style={{ marginLeft: -((cur) * 500) }} className="mt-carousel-track">
                        {
                            data.map((data, index) => <div key={index} className="mt-carousel-item">
                                <div className="mt-demo-carousel">
                                    <img className="mt-demo-carousel-img" src={require(`../images/pic${index + 1}.jpg`)} alt="" />
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>

                <ul className="mt-carousel-dots">

                    {
                        data.map((data, index) => <li key={index} className="mt-carousel-active">
                            {/* eslint-disable-next-line */}
                            <button type="button" className={`mt-carousel-btn ${this.state.cur == index ? "select" : ""}`} onClick={() => this.iconClick(index)}></button>
                        </li>
                        )
                    }

                </ul>
                {/* eslint-disable-next-line */}
                <button type="button" className="mt-right-carousel-arrow" style={{ display: (true == isShow) ? "block" : "none" }} onClick={() => this.switchNext(cur)}>
                    <i className="iconfont icon-jiantou-you"></i>
                </button>
            </div>
        </div>;
    }
}
export default CarouselHtml;
import React, { Component } from 'react'
import '../scss/sliderPage.scss'

class sliderHtml extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num: 25
        }
    }

    /**
     * 点击向上箭头 数字加一
     */
    handleAdd() {
        let num = this.state.num
        this.setState({
            num: num + 1
        })

    }

    /**
     * 点击向下箭头 数字减一
     */
    handleReduce() {
        let num = this.state.num
        this.setState({
            num: num - 1
        })
    }

    // 设置input value值
    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        let { num } = this.state
        return <div className="mt-slider-page">
            <div className="mt-slider">
                <div className="mt-input-number">
                    <div className="mt-input-number-handler-wrap">
                        <span className="mt-input-number-handler">
                            <i className="iconfont iconjiantou1 mt-input-number-icon" onClick={() => this.handleAdd()}></i>
                        </span>
                        <span className="mt-input-number-handler">
                            <i className="iconfont iconjiantou11 mt-input-number-icon" onClick={() => this.handleReduce()}></i>
                        </span>
                    </div>
                    <div className="mt-input-number-input-wrap">
                        <input value={num} onChange={() => this.handleChange()} className="mt-input-number-input" />
                    </div>
                </div>
                <div className="mt-slider-wrap">
                    <div className="mt-slider-bar" style={{ width: num + "%" }}></div>
                    <div className="mt-slider-button-wrap" style={{ left: num + "%" }}>
                        <div className="mt-tooltip">
                            <div className="mt-tooltip-rel">
                                <div className="mt-slider-button"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default sliderHtml;
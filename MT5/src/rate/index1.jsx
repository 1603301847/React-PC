import React, { Component } from 'react'
import '../scss/ratePage.scss'


class RatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            select: false,
            stepClick: -1,  //点击选中星星
            stepHover: -1, //鼠标划入选中星星
            stepCur: -1,   //存放选中星星个数
            data: [
                {
                    id: "1"
                },
                {
                    id: "2"
                },
                {
                    id: "3"
                },
                {
                    id: "4"
                },
                {
                    id: "5"
                },
                {
                    id: "6"
                }
            ],
        }
    }

    addColorClick(e) {
        //只有点击才能选中
        this.setState({
            stepClick: e,
            stepCur: e
        })
    }

    hoverColorClick(e) {
        //一个是hover显示效果，一个是点击选中效果
        this.setState({
            stepHover: e,
            stepClick: e
        })
    }

    hoverOutColorClick() {
        //鼠标移出，该值不等于-1就意味着选中了星星，需要通过stepCur回显数据
        // eslint-disable-next-line
        if (this.state.stepClick != -1) {
            this.setState({
                stepClick: this.state.stepCur,
                stepHover: -1
            })
        } else {
            this.setState({
                stepHover: -1,
            })
        }
    }

    render() {

        let { data, stepClick, stepHover } = this.state;

        return <div className="mt-rate-page">
            <ul className="mt-rate-stars">
                {
                    data.map((data, key) => <li key={key} className={`mt-rate-st ${stepHover >= key || stepClick >= key ? "select" : ""}`}
                        onClick={() => this.addColorClick(key)}
                        onMouseOver={() => this.hoverColorClick(key)}
                        onMouseOut={() => this.hoverOutColorClick(key)}
                    ><i className="iconfont icon-xingxing"></i></li>)
                }

            </ul>
        </div>;
    }
}

export default RatePage;
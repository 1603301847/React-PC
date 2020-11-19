import React, { Component } from 'react'
import '../scss/ratePage.scss'


class RatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            select: false,
            stepHover: -1,
            stepClick: -1,
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
        this.setState({
            stepClick: e
        })
    }

    hoverColorClick(e) {
        this.setState({
            stepHover: e
        })
    }

    hoverOutColorClick() {
        // eslint-disable-next-line
        if (this.state.stepClick != -1) {
            this.setState({
                stepHover: this.state.stepClick
            })
        } else {
            this.setState({
                stepHover: -1
            })
        }
    }

    render() {

        let { data, stepHover } = this.state;

        return <div className="mt-rate-page">
            <ul className="mt-rate-stars">
                {
                    data.map((data, key) => <li key={key} className={`mt-rate-st ${stepHover >= key ? "select" : ""}`}
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
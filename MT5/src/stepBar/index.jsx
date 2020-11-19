import React, { Component } from 'react'
import '../scss/stepBarPage.scss'
import { Button } from 'antd'

class stepHtml extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cur: 0,
            finish: -1,
            data: [
                {
                    num: 1,
                    text: '步骤一'
                },
                {
                    num: 2,
                    text: '步骤二'
                },
                {
                    num: 3,
                    text: '步骤三'
                },
                {
                    num: 4,
                    text: '步骤四'
                }
            ]
        };
    }

    /**
     * 点击跳到下一步
     */
    nextClick() {
        let cur = this.state.cur;
        let finish = this.state.finish;
        cur = cur + 1;
        finish = finish + 1;
        console.log(finish);
        if (cur > 0) {
            this.setState({
                cur: cur,
                finish:  finish,
            })
        }
        if (cur >= 4) {
            this.setState({
                cur: 0,
                finish: -1,
            })
        }
    }

    render() {
        let { data } = this.state
        return <div className="mt-step-page">
            <div className="mt-step-bar">
                <p>当前正在进行第{this.state.cur + 1}步</p>
                <div className="mt-steps-horizontal">
                    {data.map((data, index) => <div key={index} className={`mt-steps-item ${this.state.finish === index ? 'steps-status-finish' : ''}`}>
                        <div className="mt-steps-tail">
                            <i></i>
                        </div>
                        <div className="mt-steps-head">
                            <div className={`mt-steps-head-inner ${this.state.cur === index ? 'mt-steps-head-inner-focus' : ''}`}>
                                <span>{data.num}</span>
                                <i className="iconfont icon-icon-test"></i> 
                            </div>
                        </div>
                        <div className="mt-steps-main">
                            {data.text}
                        </div>
                    </div>)}
                </div>
                <Button type="primary" onClick={() => this.nextClick()}>下一步</Button>
            </div>
        </div>;
    }
}

export default stepHtml;
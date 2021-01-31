import React, { Component } from 'react'
import '../scss/progressBarPage.scss'

class ProgressHtml extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            num: 0
        };

    }

    /**
     * 点击加号按钮 进度条宽度加10%
    */

    handleClickAdd() {
        let num = this.state.num

        this.setState({
            num: num + 10
        })

        if (num >= 90) {
            this.setState({
                isShow: true,
                num: 100
            })
        }
    }

    /**
     * 点击减号按钮 进度条宽度减10%
     */

    handleClickReduce() {
        let num = this.state.num

        this.setState({
            num: num - 10
        })

        if (num <= 100) {
            this.setState({
                isShow: false
            })
        }

        if (num <= 0) {
            this.setState({
                num: 0
            })
        }
    }


    render() {

        let { isShow, num } = this.state
        return <div className="mt-progress-page">
            <div className="mt-progress">
                <div className="mt-progress-outer">
                    <div className="mt-progress-inner">
                        <div className={`mt-progress-bg ${isShow ? 'success-bg' : ''}`} style={{ width: num + '%' }}></div>
                    </div>
                </div>
                <span className="mt-progress-text">
                    <span className="mt-progress-text-inner">
                        <span style={{ display: isShow ? 'none' : 'block' }}>{this.state.num + '%'}</span>
                        <i className="iconfont icondh" style={{ display: isShow ? 'block' : 'none' }}></i>
                    </span>
                </span>
            </div>
            <div className="mt-progress-btn-group">
                <button type="button" className="mt-progress-btn" onClick={() => this.handleClickAdd()}>
                    <i className="iconfont iconjia"></i>
                </button>
                <button type="button" className="mt-progress-btn" onClick={() => this.handleClickReduce()}>
                    <i className="iconfont iconjianh"></i>
                </button>
            </div>
        </div>;
    }

}

export default ProgressHtml;
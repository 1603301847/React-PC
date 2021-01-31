import React, { Component } from 'react'
import '../scss/modalPage.scss'

class ModalHtml extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            text: ""
        };

    }

    // 显示对话框
    showModal() {
        this.setState({
            isShow: false
        })
    }

    // 隐藏对话框
    hideModal() {
        this.setState({
            isShow: true,
            text: "点击了取消"
        })
        this.play()
    }

    // 确定按钮
    determine() {
        this.setState({
            isShow: true,
            text: "点击了确定"
        })
        this.play()
    }

    // 控制提示信息方法
    play() {
        var info = document.getElementById('mt-modal-message')
        info.style.marginTop = "0px"
        setTimeout(() => {
            info.style.marginTop = "-100px"
        }, 1000)
    }

    render() {
        let { isShow, text } = this.state;

        return <div className="mt-modal-page">

            <button className="mt-show-modal-btn" onClick={() => this.showModal()}>显示对话框</button>

            <div className="mt-modal-mask"
                style={{ display: (isShow === false) ? "block" : "none" }}
                onClick={() => this.hideModal()}></div>
            <div className="mt-modal-wrap" style={{ display: (isShow === false) ? "block" : "none" }}>
                <div className="mt-modal">
                    <i className=" iconfont iconguanbianniu mt-modal-close" onClick={() => this.hideModal()}></i>
                    <div className="mt-modal-header">
                        <div className="mt-modal-header-inner">普通的Modal对话框标题</div>
                    </div>
                    <div className="mt-modal-body">
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                    </div>
                    <div className="mt-modal-footer">
                        <button className="mt-modal-cancel-btn" onClick={() => this.hideModal()}>取消</button>
                        <button className="mt-modal-determine-btn"
                        onClick={() => this.determine()}>确定</button>
                    </div>
                </div>
            </div>
            <div className="mt-modal-message" id="mt-modal-message">
                <i className="iconfont icongantanhao"></i>
                <span>{text}</span>
            </div>
        </div>;
    }
}

export default ModalHtml;
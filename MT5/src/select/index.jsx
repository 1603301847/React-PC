import React, { Component } from 'react';
import '../scss/selectPage.scss'
class SelectHtml extends Component {

    constructor(props) {
        super(props);
        this.state = {
            select: false,
            msg: '请选择',
            data: [{ text: "New York" }, { text: "London" }, { text: "Sydney" }, { text: "Ottawa" }, { text: "Paris" }, { text: "Canberra" }],
            isDisabled: true
        }
    }

    /***
     * 点击下拉框隐藏下拉框
     */
    getDataClick (data) {
        // console.log(data)
        this.setState({
            msg: data.text,
            select: false,
        })
    }

    /**
     * 点击输入框显示下拉框
     */
    selectClick () {
        // eslint-disable-next-line
        if(this.state.select == false) {
            this.setState({
                select: true
            })
        } else {
            this.setState({
                select: false
            })
        }
    }

    /***
     * 输入框有值 鼠标划入显示删除图标
     */
    hoverShowDel() {
        // eslint-disable-next-line
        if(this.state.msg != '请选择') {
            this.setState({
                isDisabled: false
            })
        }
    }

    /**
     * 鼠标划出隐藏删除图标
     */
    outHideDel() {
        // eslint-disable-next-line
        if(this.state.msg != '请选择') {
            this.setState({
                isDisabled: true
            })
        }
    }

    /**
     * 鼠标点击删除按钮清空输入框
     */
    clearClick () {
        this.setState({
            msg: "请选择",
            isDisabled: true
        })
    }

    /**
     * 鼠标划出显示图标
     */
    showDelIconClick () {
        this.setState({
            isDisabled: false
        })
    }

    /**
     * 鼠标划出隐藏图标
     */
    hiddenDelIconClick () {
        this.setState({
            isDisabled: true
        })
    }

    handleClick (e) {
        //点击空白处，清空
        // e.nativeEvent.stopImmediatePropagation()

        // console.log("对比-------" + e.currentTarget + "-------" + e.target)
        // console.log(e.currentTarget == e.target)

        //只有点击当前触发事件的元素才可以触发关闭
        // eslint-disable-next-line
        if (e.target == e.currentTarget) {

            this.setState({
                select: false
            })

        }
    }
    
    render () {

        let { data } = this.state;
        let { select } = this.state;
        let { isDisabled } = this.state;

        return <div className="mt-select-page" onMouseDown={(e) => this.handleClick(e)} >
            <div className={`mt-select ${select ? "select" : ""}`}>
                <div className="mt-select-selection" >

                    <input type="hidden" value={this.state.msg} />
                    {/* eslint-disable-next-line */}
                    <span className={`mt-select-placeholder ${this.state.msg == '请选择' ? "mt-select-placeholder" : "active"}`} 
                    onClick={() => this.selectClick()} 
                    onMouseOver={() => this.hoverShowDel()}
                    onMouseOut={() => this.outHideDel()}
                    >{this.state.msg}</span>
                    <i className="iconfont icon-shanchu4 mt-icon-del" onClick={() => this.clearClick()} onMouseOut={() => this.hiddenDelIconClick()} style={{ display: (false === isDisabled) ? "block" : "none" }} ></i>
                    <i className="iconfont icon-jiantou-copy-copy mt-icon-jiantou" onMouseOver={() => this.showDelIconClick()} style={{ display: (true === isDisabled) ? "block" : "none" }}></i>

                </div>
                <div className={`mt-select-dropdown ${select ? "select" : ""}`} >
                    <ul className="mt-select-dropdown-list">
                        {
                            data.map((data, item) => <li key={item} onClick={() => this.getDataClick(data, item)} className="mt-select-item">{data.text}</li>)
                        }
                    </ul>
                </div>

            </div>
        </div >;
    }
}

export default SelectHtml; 
import React, { Component } from 'react'
import '../scss/tabsPage.scss'

class TabsHtml extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: 0,
            data: [
                {
                    icon: '\ue74c',
                    name: 'macOs',
                    content: '标签一的内容'
                },
                {
                    icon: '\ue64b',
                    name: 'Windows',
                    content: '标签二的内容'
                },
                {
                    icon: '\ue697',
                    name: 'Linux',
                    content: '标签三的内容'
                },
                {
                    icon: '\ue676',
                    name: 'CentOs',
                    content: '标签四的内容'
                }
            ]
        }
    }

    /**
     * 点击导航向左移动
     */
    toLeftClick() {
        var navWidth = document.getElementsByClassName('mt-tabs-ink-bar')[0]
        navWidth.style.marginLeft = 0 + 'px'
    }

    /**
     * 点击导航向右移动
     */
    toRightClick() {
        var navWidth = document.getElementsByClassName('mt-tabs-ink-bar')[0]
        navWidth.style.marginLeft = -50 + 'px'
    }

    /**
     * 点击导航标签展示该标签内容
     */
    selectClick(i) {
        this.setState({
            cur: i
        })
        console.log(i)

        var navWidth = document.getElementsByClassName('mt-tabs-ink-bar')[0]

        if (i === 3) {
            navWidth.style.marginLeft = -50 + 'px'
        }
        if (i === 0) {
            navWidth.style.marginLeft = 0 + 'px'
        }
    }

    render() {
        let { data, cur } = this.state;
        return <div className="mt-tabs-page">
            <div className="mt-tabs-nav-container">
                <span className="mt-tabs-nav-prev" onClick={() => this.toLeftClick()}>
                    <i className="iconfont icon-jiantou-zuo"></i>
                </span>
                <span className="mt-tabs-nav-next" onClick={() => this.toRightClick()}>
                    <i className="iconfont icon-jiantou-you"></i>
                </span>
                <div className="mt-tabs-nav-scroll">
                    <ul className="mt-tabs-ink-bar">
                        {data.map((data, index) => <li key={index}
                            className={`mt-tabs-ink-bar-list 
                        ${this.state.cur === index ? 'select' : ''}`}
                            onClick={() => this.selectClick(index)}>
                            <i className="iconfont">{data.icon}</i>
                            <span>{data.name}</span>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="mt-tabs-content">
                <div className="mt-tabs-content-list" style={{ marginLeft: -((cur)) * 500 }} >
                    {data.map((data, index) => <div key={index} className="mt-tabs-tabpane">{data.content}</div>)}
                </div>
            </div>
        </div>;
    }
}

export default TabsHtml;
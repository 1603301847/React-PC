import React, { Component } from 'react'
import '../scss/menuPage.scss'

class MenuHtml extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: 0,
            cur: {
                x: null,
                y: null
            },
            active: false,
            list: [
                {
                    open: false,
                    icon: '\ue606',
                    text: '内容管理',
                    iconMent: '\ue60d',
                    childrenList: [
                        { content: '文章管理' },
                        { content: '评论管理' },
                        { content: '举报管理' }
                    ],
                },
                {
                    open: false,
                    icon: '\ue60a',
                    text: '用户管理',
                    iconMent: '\ue60d',
                    childrenList: [
                        { content: '新增用户' },
                        { content: '活跃用户' }
                    ],
                },
                {
                    open: false,
                    icon: '\ue617',
                    text: '统计分析',
                    iconMent: '\ue60d',
                    childrenList: [
                        { content: '新增和启动' },
                        { content: '活跃分析' },
                        { content: '时段分析' },
                        { content: '用户留存' },
                        { content: '流失用户' }
                    ],
                }
            ],
            data: [
                { text: 'light' },
                { text: 'dark' }
            ]
        }
    }

    /***
     * 展开隐藏下拉菜单
     */
    showMenu(i) {
        let list = this.state.list
        list[i].open = list[i].open ? false : true
        this.setState({
            list: list
        })
    }

    /**
     * 
     * @param {*} i 点击下拉菜单添加样式
     */
    addColor(x, y) {
        let val = { x: x, y: y }

        this.setState({
            cur: val
        })
    }


    /***
     * 点击单选按钮之后切换导航菜单颜色
     */
    changeColor(i) {
        // eslint-disable-next-line
        if (this.state.checked == 0) {
            this.setState({
                checked: i,
                active: true
            })
        }
        // eslint-disable-next-line
        if (this.state.checked == 1) {
            console.log(this.state.checked)
            this.setState({
                checked: i,
                active: false
            })
        }
    }

    render() {

        let { data, active, list, cur } = this.state

        return <div className="mt-menu-page">
            <div className="mt-menu-case">
                <ul className={`mt-menu ${active ? 'active' : ''}`}>
                    {list.map((data, i) => <li className="mt-menu-submenu" key={i}>
                        <div
                            className={`mt-menu-submenu-title ${data.open ? 'select' : ''}`}
                            onClick={() => this.showMenu(i)}>
                            <i className="iconfont mt-icon">{data.icon}</i>
                            {data.text}
                            <i className="iconfont mt-menu-icon">{data.iconMent}</i>
                        </div>
                        <ul className="mt-menu"
                            style={{ display: data.open ? "block" : "none" }}>
                            {data.childrenList.map((data, index) => <li
                                // eslint-disable-next-line
                                className={`mt-menu-item ${cur.x == index && cur.y == i ? "visited" : ''}`}
                                key={index}
                                onClick={() => this.addColor(index, i)}>{data.content}</li>)}
                        </ul>
                    </li>)}
                </ul>
            </div>


            <br />
            <p>切换主题</p>
            <div className="mt-radio-group">
                {
                    data.map((data, index) => <label className="mt-radio-group-item" key={index}>
                        {/* eslint-disable-next-line */}
                        <span className={`mt-radio ${this.state.checked == index ? 'checked' : ''}`} onClick={() => this.changeColor(index)}>
                            <span className="mt-radio-inner"></span>
                            <input type="radio" className="mt-radio-input" />
                        </span>
                        {data.text}
                    </label>)
                }
            </div>
        </div>;
    }
}

export default MenuHtml;
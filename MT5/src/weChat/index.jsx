import React, { Component } from 'react'
import '../scss/weChatPage.scss'


class weChatHtml extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '',
            cur: true,
            pop: false,
            curList: [],
            add: false,
            info: false,
            date: new Date(),
            active: 0,
            list: [
                {
                    id: '0',
                    name: '大雄',
                    msg: '[语音]',
                    iSort: 0,
                    time: '晚上 20:13'
                },
                {
                    id: '1',
                    name: '胖虎',
                    msg: '[语音]',
                    iSort: 0,
                    time: '晚上 20:12'
                },
                {
                    id: '2',
                    name: '小夫',
                    msg: '[语音]',
                    iSort: 0,
                    time: '晚上 20:11'
                },
                {
                    id: '3',
                    name: '静香',
                    msg: '[语音]',
                    iSort: 0,
                    time: '晚上 20:10'
                },
                {
                    id: '4',
                    name: '哆啦A梦',
                    msg: '[语音]',
                    iSort: 0,
                    time: '晚上 20:09'
                },
                {
                    id: '5',
                    name: '小丸子',
                    msg: '[语音]',
                    iSort: 0,
                    time: '晚上 20:08'
                }
            ],
            tabList: [
                {
                    icon: '\ue603',
                    iconName: '消息',
                },
                {
                    icon: '\ue612',
                    iconName: '联系人',
                },
                {
                    icon: '\ue610',
                    iconName: '发现',
                },
                {
                    icon: '\ue600',
                    iconName: '我',
                }
            ]
        }
    }
    filters(data: any) {
        this.filterData(data);
        return data;
    };
    /***判断是对象还是数组*/
    filterData(data: any) {
        let dataType = typeof (data);
        if (dataType === 'object') {
            // 验证是不是数组
            if (data instanceof Array) {
                // console.log('array');
                this.filterArray(data);
            }
            // 否则就是对象
            else {
                // console.log('object');
                this.filterObject(data);
            }
        }
    }
    // 已经是数组
    filterArray(data: any) {
        // 数组遍历
        for (let index in data) {

            let typeItem = typeof (index);

            if (typeItem === 'string') {
                data[index] = '';
            }
            if (typeItem === 'object') {
                this.filterData(index);
            }

        }

    }
    //已知是对象
    filterObject(data: any) {
        //对象遍历
        for (let index in data) {
            // 判断对象里的值是什么
            let typeItem = typeof (index);

            if (typeItem === 'string') {
                data[index] = '';
            }
            if (typeItem === 'object') {
                this.filterData(index);
            }
            // console.log(typeItem)
        }

    };
    //每次搜索 添加都会调用排序方法
    isSort(list) {
        //取出所有的值，然后重新赋值
        let sortList = []
        list.forEach(item => {
            sortList.push(item.is)
        })

    }
    componentDidMount() {
        if (localStorage.getItem('list') == null) {
            //数组排序
            this.setState({
                curList: this.state.list,
                list: this.state.list
            })
            localStorage.setItem("list", JSON.stringify(this.state.list))
        } else {
            this.setState({
                curList: JSON.parse(localStorage.getItem('list')),
                list: JSON.parse(localStorage.getItem('list'))
            })
        }

    };
    /**
     *清除方法 */
    handleClick() {
        console.log(this.ipt.value)
        let search = this.ipt.value
        let list = this.state.list
        let curList = this.state.curList
        curList = [];
        if (search !== '') {
            for (let i = 0; i < list.length; i++) {
                if (list[i].name.indexOf(search) !== -1) {
                    curList.push(list[i]);
                }
                if (list[i].id.indexOf(search) !== -1) {
                    curList.push(list[i]);
                }
            }
            //数组去重
            this.setState({
                curList: Array.from(new Set(curList))
            })
        } else {
            this.setState({
                curList: list
            })
        }
    };
    /***
     * 显示弹窗
     *  */
    handleAdd() {
        this.setState({
            pop: true
        })
    }
    /**
     * 提交数据
     */
    handleSub() {
        // e.preventDefault();
        let list = this.state.list
        let name = this.name.value
        this.name.value = null
        let id = this.id.value
        this.id.value = null
        // eslint-disable-next-line
        if (name == '' && id == '') {
            this.setState({
                info: true,
                pop: true
            })
        }
        // eslint-disable-next-line
        if (name !== '' && id !== '') {

            let addList = {
                id: this.state.list.length.toString(),
                name: name,
                isSort: 0,
                msg: '[语音]', iSort: 0,
                // time: Date.parse(new Date()).toString(),
                time: this.state.date.toLocaleTimeString()
            }

            let _list = this.state.list
            _list.push(addList)
            this.setState({
                list: _list,
                curList: _list,
                add: false
            })
            this.setState({
                info: false,
                pop: false
            })
        }
        localStorage.setItem("list", JSON.stringify(list))
    }
    /**
     * 隐藏弹窗
     */
    hideModal() {
        this.setState({
            pop: false
        })
    }
    /**
     * 删除每一条消息
     */
    handleClear(val) {
        let list = this.state.list
        let curList = this.state.curList
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === val) {
                list.splice(i, 1);
            }
        }

        for (let i = 0; i < curList.length; i++) {
            if (curList[i].id === val) {
                curList.splice(i, 1);
            }
        }
        localStorage.setItem("list", JSON.stringify(list))
        this.setState({
            curList: curList,
            list: list
        })
    }
    /**
     * 
     * @param {是否置顶} i 
     */
    isTop(i) {
        console.log(i)
        let list = this.state.list
        let arr = []
        list[i].iSort = list[i].iSort === 1 ? 0 : 1
        //获取当前是否是置顶状态
        // eslint-disable-next-line 
        if (list[i].iSort == 1) {
            arr = list.splice(i, 1);
            list.unshift(arr[0])
        } else {
            arr = list.splice(i, 1);
            list.push(arr[0])
        }
        localStorage.setItem("list", JSON.stringify(list))
        this.setState({
            curList: list,
            list: list
        })
    }
    /**
     * 点击tab切换
     */
    activeClick(i) {
        let active = this.state.active;
        let tabList = this.state.tabList;

        var conWidth = document.getElementsByClassName('mt-weChat-content-list')[0];
        active = i;
        for (let i = 0; i < tabList.length + 1; i++) {
            conWidth.style.marginLeft = -375 * (active) + 'px'
        }
        this.setState({
            active: i
        })
    }

    render() {
        let { curList, pop, info, tabList, active } = this.state
        return <div className="mt-weChat-page">
            <div className="mt-weChat-interface">
                <div className={`${pop ? 'bg' : ''}`}></div>
                <div className="mt-weChat-status-bar"></div>
                <div className="mt-weChat-header">
                    <span className="mt-weChat-header-name">微信</span>
                    <span><input type="text" className="mt-weChat-header-ipt" ref={(input) => { this.ipt = input }} /></span>
                    <span className="mt-weChat-header-add" onClick={() => this.handleAdd()}>
                        <i className="iconfont icon-plus"></i>
                    </span>
                    <span className="mt-weChat-header-search" onClick={() => this.handleClick()}>
                        <i className="iconfont icon-weixinsousuo"></i>
                    </span>
                </div>
                <div className="mt-weChat-content">
                    <div className="mt-weChat-content-list">
                        <div className="mt-weChat-content-list-con">{curList.map((data, index) => <div className="mt-weChat-news"
                            style={{ background: data.iSort ? '#f3f3f378' : 'none' }}
                            key={index}>
                            <div className="mt-weChat-badge">
                                <span className="mt-weChat-avatar"></span>
                                <span className="mt-weChat-badge-count">1</span>
                            </div>
                            <div className="mt-weChat-contact-news">
                                <span className="mt-weChat-contact-name">
                                    {data.name}
                                </span>
                                <span className="mt-weChat-contact-msg">
                                    {data.msg}
                                </span>
                                <span className="mt-weChat-contact-time">
                                    {data.time}
                                </span>
                                {/* eslint-disable-next-line  */}
                                <span className="mt-weChat-contact-topping" onClick={() => this.isTop(index)}>{data.iSort == 0 ? "置顶" : "取消置顶"}</span>
                                <span className="mt-weChat-contact-close" onClick={() => this.handleClear(data.id)}>
                                    <i className="iconfont icon-guanbianniu mt-weChat-contact-del"></i>
                                </span>
                            </div>
                        </div>)}
                        </div>
                        <div className="mt-weChat-content-list-con">联系人页面</div>
                        <div className="mt-weChat-content-list-con">发现页面</div>
                        <div className="mt-weChat-content-list-con">我</div>
                    </div>
                </div>
                <div className="mt-weChat-footer">
                    {tabList.map((tabData, index) => <div key={index} className={`mt-weChat-footer-content ${active === index ? 'select' : ''}`} onClick={() => this.activeClick(index)}>
                        <i className="iconfont">{tabData.icon}</i>
                        <span className="mt-weChat-footer-text">{tabData.iconName}</span>
                    </div>)}
                </div>
                <div className="mt-weChat-popup" style={{ display: pop ? 'block' : 'none' }}>
                    <div className="mt-weChat-popup-con">
                        <i className=" iconfont icon-guanbianniu mt-weChat-popup-close" onClick={() => this.hideModal()}></i>
                        <form method="get" className="mt-weChat-popup-form">
                            <p>
                                <span style={{ color: 'red' }}>*</span>
                                <label htmlFor="id">ID:</label>
                                <input type="text" id="id" ref={(input) => { this.id = input }} className={`${info ? "inp" : ''}`} />
                                <span style={{ display: info ? 'block' : 'none', color: 'red', marginRight: '36px' }}>Please input your id!</span>
                            </p>
                            <p>
                                <span style={{ color: 'red' }}>*</span>
                                <label htmlFor="name">姓名:</label>
                                <input type="text" id="name" ref={(input) => { this.name = input }} className={`${info ? "inp" : ''}`} />
                                <span style={{ display: info ? 'block' : 'none', color: 'red', marginRight: '16px' }}>Please input your name!</span>
                            </p>
                            <p>
                                time:<span className="mt-weChat-popup-time">{this.state.date.toLocaleTimeString()}</span>
                            </p>
                            <button type="button" className="mt-weChat-popup-sub" onClick={() => this.handleSub()}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>;
    }

}
export default weChatHtml;
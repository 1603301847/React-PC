import React, { Component } from 'react';
import '../scss/treePage.scss'

class TreeHtml extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allHide: true,
            rotate: false,
            select: false,
            selectChild: false,
            active: 0,
            list: [
                {
                    open: true,
                    // selectChild: false,
                    text: 'parent 1-1',
                    childrenData: [
                        {
                            childText: 'leaf 1-1-1'
                        },
                        {
                            childText: 'leaf 1-1-2'
                        }
                    ]
                },
                {
                    open: true,
                    // selectChild: false,
                    text: 'parent 1-2',
                    childrenData: [
                        {
                            childText: 'leaf 1-2-1'
                        },
                        {
                            childText: 'leaf 1-2-2'
                        }
                    ]
                }
            ]
        }
    }

    /**
     * 隐藏整个下拉菜单
     */
    hideAllList() {
        // eslint-disable-next-line 
        if (this.state.allHide == true) {
            this.setState({
                allHide: false,
                rotate: true
            })
        }
        // eslint-disable-next-line 
        if (this.state.allHide == false) {
            this.setState({
                allHide: true,
                rotate: false
            })
        }
    }


    /**
     * 点击隐藏每一个子下拉菜单
     */
    hideChildList(_index) {
        let _list = this.state.list;
        // eslint-disable-next-line 
        _list.map((o, i) => {
            // eslint-disable-next-line 
            if (i == _index) {
                o.open = o.open ? false : true;
            }
        });
        // console.log(this.state.list);
        this.setState({});
    }

    /**
     * 点击第一个标题添加背景颜色
     */
    addColor() {
        // this.color();
        // eslint-disable-next-line 
        if (this.state.select == true) {
            this.setState({
                select: false,
                // selectChild: false
            })
        } else {
            this.setState({
                select: true,
                selectChild: false
            })
        }
    }

    addbgColor(_i) {
        // console.log(i)
        // let _list = this.state.list
        // _list[_i].selectChild = _list[_i].selec tChild ? false : true
        // // console.log(_list[_i]);
        // // if(_list[_i].selectChild==true){
        //     this.setState({
        //         _list: _list,
        //         active: _i
        //         // select: false
        //     })
        // this.state.select=false
        // }
        // eslint-disable-next-line 
        if (this.state.active == 0) {
            console.log(this.state.active)
            this.setState({
                active: _i,
                selectChild: true,
                select: false
            })
        }
        // eslint-disable-next-line 
        if (this.state.active == 1) {
            console.log(this.state.active)
            this.setState({
                active: _i,
                selectChild: false,
                select: false
            })
        }

    }

    /**
     * 文字背景颜色
     */
    // color() {
    //     if (this.state.select == false) {
    //         this.setState({
    //             select: true
    //         })
    //     } else {
    //         this.setState({
    //             select: false
    //         })
    //     }

    // }

    render() {

        let { list } = this.state;
        let { allHide } = this.state;
        let { rotate } = this.state;
        let { select } = this.state;

        return <div className="mt-tree-page">
            <div className="mt-tree">
                <ul className="mt-tree-children">
                    <li className="mt-tree-list">
                        <span className={`mt-tree-arrow ${rotate ? 'rotate' : ''}`}
                            onClick={() => this.hideAllList()}>
                            <i className="iconfont icon-jiantou-copy-copy mt-tree-icon"></i>
                        </span>
                        <label className="mt-tree-checkbox-item">
                            <span className="mt-tree-checkbox">
                                <span className="mt-tree-checkbox-inner"></span>
                                <input type="checkbox" className="mt-tree-input" />
                            </span>
                        </label>
                        <span
                            className={`mt-tree-title ${select ? "mt-tree-title-selected" : ""}`} onClick={() => this.addColor()}>parent 1</span>


                        {list.map((data, index) => <ul className="mt-tree-children"
                            // eslint-disable-next-line 
                            style={{ display: (true == allHide) ? 'block' : 'none' }} key={index}>
                            <li className="mt-tree-list">
                                <span
                                    className={`mt-tree-arrow ${data.open ? '' : 'rotate'}`}>
                                    <i
                                        className="iconfont icon-jiantou-copy-copy mt-tree-icon"
                                        onClick={() => this.hideChildList(index)}></i>
                                </span>
                                <label className="mt-tree-checkbox-item">
                                    <span className="mt-tree-checkbox">
                                        <span className="mt-tree-checkbox-inner"></span>
                                        <input type="checkbox" className="mt-tree-input" />
                                    </span>
                                </label>
                                <span
                                    //  eslint-disable-next-line 
                                    className={`mt-tree-title ${this.state.active == index ? "mt-tree-title-selected" : ""}`}
                                    onClick={() => this.addbgColor(index)}> {data.text}</span>


                                {data.childrenData.map((data2, index) => <ul className="mt-tree-children"
                                    style={{ display: data.open ? "block" : "none" }} key={index}>
                                    <li className="mt-tree-list">
                                        <label className="mt-tree-checkbox-item">
                                            <span className="mt-tree-checkbox">
                                                <span className="mt-tree-checkbox-inner"></span>
                                                <input type="checkbox" className="mt-tree-input" />
                                            </span>
                                        </label>
                                        <span className="mt-tree-title">{data2.childText}</span>
                                    </li>
                                </ul>)}
                            </li>
                        </ul>)}
                    </li>
                </ul>
            </div>
        </div>;
    }
}

export default TreeHtml;
import React, { Component } from 'react';
import '../scss/collapsePage.scss'

class CollapseHtml extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openMap: {
                'key1': false,
                'key2': false,   
                'key3': false,
            },
        };
    }

    // componentDidMount() {
    //     var collapseHeader = document.querySelectorAll('.mt-ivu-collapse-header');
    //     console.log(collapseHeader);

    //     var collapseContent = document.querySelectorAll('.mt-ivu-collapse-content');
    //     console.log(collapseContent);

    //     var collapseIcon = document.getElementsByClassName("iconzhediejiantou");
    //     for (let i = 0; i < collapseHeader.length; i++) {
    //         collapseHeader[i].onclick = function () {
    //             console.log(collapseContent[i].className)
    //             if (collapseContent[i].className == 'mt-ivu-collapse-content') {
    //                 collapseContent[i].classList.add("auto");
    //             } else {
    //                 collapseContent[i].classList.remove("auto");
    //             }
    //             if (collapseIcon[i].className == 'iconfont iconzhediejiantou') {
    //                 collapseIcon[i].classList.add("rotate");
    //             } else {
    //                 collapseIcon[i].classList.remove("rotate");
    //             }
    //         }
    //     }

    // }

    handleCollapse(key) {
        let map = this.state.openMap;
        if ("key1" === key) { 
            map.key1 = !map.key1;
        }
        if ("key2" === key) {
            map.key2 = !map.key2;
        }
        if ("key3" === key) {
            map.key3 = !map.key3;
        }

        this.setState({
            openMap: map
        })
    }

    render() {

        let { openMap } = this.state;

        return <div className="mt-collapse-page">
            <div className="mt-collpase-container">
                <div className="mt-ivu-collapse">
                    <div className={`mt-ivu-collapse-item ${openMap.key1 ? "open" : ''}`}>
                        <div className="mt-ivu-collapse-header" onClick={() => this.handleCollapse("key1")}>
                            <i className="iconfont iconzhediejiantou"></i>
                            史蒂夫·乔布斯
                        </div>
                        <div className="mt-ivu-collapse-content">
                            <div className="mt-ivu-collapse-content-box">
                                <p>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                            </div>
                        </div>
                    </div>
                    <div className={`mt-ivu-collapse-item ${openMap.key2 ? "open" : ''}`}>
                        <div className="mt-ivu-collapse-header" onClick={() => this.handleCollapse("key2")}>
                            <i className="iconfont iconzhediejiantou"></i>
                            斯蒂夫·盖瑞·沃兹尼亚克
                        </div>
                        <div className="mt-ivu-collapse-content">
                            <div className="mt-ivu-collapse-content-box">
                                <p>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                            </div>
                        </div>
                    </div>
                    <div className={`mt-ivu-collapse-item ${openMap.key3 ? "open" : ''}`}>
                        <div className="mt-ivu-collapse-header" onClick={() => this.handleCollapse("key3")}>
                            <i className="iconfont iconzhediejiantou"></i>
                            乔纳森·伊夫
                        </div>
                        <div className="mt-ivu-collapse-content">
                            <div className="mt-ivu-collapse-content-box">
                                <p>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }

}

export default CollapseHtml;
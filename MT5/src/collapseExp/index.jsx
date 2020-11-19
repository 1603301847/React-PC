import React, { Component } from 'react';
import {Button} from 'antd';

import '../scss/collapseExp.scss';


class ComputedHTML11 extends Component {

    constructor(props) {
        super(props);
           
        this.state = {
            active:false,   // 切换
        };

    }



    changeHandle(active){
        this.setState({
            active:active,
        });
    }




    render() {
        let {active}=this.state;



        return  <div className="toggle-dome-page">
            <Button onClick={()=> this.changeHandle(!active) } type="info">{ active ? "状态一": "状态二"}</Button>
            <div  className={`toggle-dome-page-container ${active?"active":''}`}>
                <div className="box skew"></div>
                <div className="box rotate"></div>
                <div className="box move"></div>
            </div>
        </div>
    }
}

export default ComputedHTML11; 
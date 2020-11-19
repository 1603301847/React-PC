import React, { Component } from 'react';
import { Collapse } from 'antd';

import CountPage from './count';
import SpacePage from './space';


const { Panel } = Collapse;


class ComputedHTML extends Component {

    constructor(props) {
        super(props);
           
        this.state = {
            defaultActiveKey:['1','2'],   // 默认展开
        };

    }

    componentDidMount(){
    }



    render() {
        let {defaultActiveKey}=this.state;

        return  <Collapse defaultActiveKey={defaultActiveKey} >
            <Panel header="对的" key="1">
                <CountPage />
            </Panel>
            <Panel header="sa" key="2">
                <SpacePage />
            </Panel>            
        </Collapse>
    }
}

export default ComputedHTML; 
import React, { Component } from 'react';
import {Button,Dropdown,Menu,Divider} from 'antd';

// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

class ComputedHTML11 extends Component {

    constructor(props) {
        super(props);
           
        this.state = {
            imgList:[],   // img list
            direction:'ImageUp'  // 方向
        };

    }

    componentDidMount(){
        this.changeHandle('ImageUp');
    }

    changeHandle = (direction)=>{

        let imgList=[];

        if( direction === 'ImageUp'){
            var requireComponent = require.context(
                './ImageUp',
                false,
                // /global[A-Z]\w+\.(vue|js)$/
            );
        } else{
            // eslint-disable-next-line
            var requireComponent = require.context(
                './ImageDown',
                false,
                // /global[A-Z]\w+\.(vue|js)$/
            );
        }

        // eslint-disable-next-line        
        requireComponent.keys().map(fileName => {
            imgList.push(fileName.slice(2));
        });


        this.setState({
            direction:direction,
            imgList:imgList
        });
    }


    changeMenuHandle=(option)=>{
        this.changeHandle(option['key']);
    }

    render() {
        let {imgList,direction}=this.state;

        const menu=<Menu onClick={this.changeMenuHandle}>
            <Menu.Item key="ImageUp">up</Menu.Item>
            <Menu.Item key="ImageDown">down</Menu.Item>
        </Menu>

        return  <div className="pictureHTML">
            <Dropdown overlay={menu} placement="bottomLeft">
                <Button type="primary" icon={ direction==="ImageUp"?"rise":"fall" } size="small" >切换方向</Button>
            </Dropdown>    
            <Divider />        
            <ul>
                {
                    imgList.map((o,i)=>{
                        return <li key={i}>
                            <img src={require(`./${direction}/${o}`)} alt=""/>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}

export default ComputedHTML11; 
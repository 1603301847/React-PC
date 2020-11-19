import React, { Component } from 'react'
import '../scss/splitPage.scss'

class splitHtml extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    /**
     * 事件鼠标按键按下时发生 
     */
    handleClick(e) {
        var wrapper = document.getElementById('mt-split-wrapper');
        var trigger = document.getElementById('mt-split-trigger');
        var left = document.getElementById('mt-split-left-pane');
        var right = document.getElementById('mt-split-right-pane');

        var event = e || window.event;
        var x = event.clientX - trigger.offsetLeft;

        /**
         * 
         * @param {*} e 事件鼠标移动时发生
         */
        document.onmousemove = function(e) {
            var event = e || window.event;
            trigger.style.left = event.clientX - x + 'px';
            left.style.width = event.clientX - x + 'px';
            right.style.width = wrapper.clientWidth - event.clientX + x + 'px';

            if(event.clientX <= 260) {
                trigger.style.left = "35px"
                left.style.width = "35px"
                right.style.width= "470px"
            }

            if(event.clientX >= 675){
                trigger.style.left = "470px"
                left.style.width = "470px"
                right.style.width= "35px"
            }
        

        }

        /***
         * 鼠标按键松开时 取消document的onmousemove事件
         */
        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }

    render() {
        let {e} = this.state
        return <div className="mt-split-page">
            <div className="mt-split-wrapper" id="mt-split-wrapper">
                <div className="mt-split-left-pane" id="mt-split-left-pane">
                    
                        左边面板
                    
                </div>
                <div className="mt-split-trigger-con" id="mt-split-trigger" onMouseDown={() => this.handleClick(e)}>
                </div>
                <div className="mt-split-right-pane" id="mt-split-right-pane">
                    
                        右边面板
                    
                </div>
            </div>
        </div>;
    }
}

export default splitHtml;
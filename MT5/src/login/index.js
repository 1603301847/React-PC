import React, { Component } from 'react';
import '../scss/loginPage.scss';
import '../iconfontStyle/iconfont.css';

class LoginHtml extends Component{
    constructor(props) {
        super(props);
           
        this.state = {
            active:false
        };

    }

    // aaa(){


    // }

    render() {
        // return <div>
        //     <button onClick={()=>{ this.aaa() }} >111</button>
        //     <div className="`con`">2222</div>
        // </div>;
        return <div className="mt-login-page">
            <div className="mt-login-page-container">
                <div className="mt-login-page-camera">
                    <i className="iconfont icon-xiangji"></i>
                </div>

                <div className="mt-login-page-user-msg">
                    <i className="iconfont icon-new-yonghu"></i> 
                    <input type="text" />
                </div>
                <div className="mt-login-page-pwd-msg">
                    <i className="iconfont icon-mima"></i>
                    <input type="password" />
                </div>
                <div className="mt-login-page-btn">
                    <button>Login</button>
                </div>

                <div className="mt-login-page-bottom-msg">
                    <input type="checkbox" />
                    <span>Remember me</span>
                    <i>Forgot Password?</i>
                </div>
            </div>
        </div>
        
        
        ;
    }
}

export default LoginHtml;  
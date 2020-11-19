import React, { Component } from 'react';
import '../scss/home.scss'
import { Row, Col } from 'antd';

class BodyHTML extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="mt-home-page">
            {/* <h3 style={{fontFamily:'cursive',fontWeight:'bold',fontStyle:'italic',fontSize:'27px'}}>Oh captain my captain!</h3> */}
            <div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6}>
                    <div className="mt-card">
                            <div className="mt-card-body">
                                <div className="mt-card-content">
                                    <div className="">
                                        <span>总销售额</span>
                                        <span><i className="iconfont icon-info"></i></span>
                                        <p>¥ 126,560</p>
                                    </div>
                                    <div className="mt-card-content-center">

                                    </div>
                                    <div className="mt-card-content-footer">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="mt-card">
                            <div className="mt-card-body">
                                <span>总销售额</span>
                                <span><i className="iconfont icon-info"></i></span>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="mt-card">
                            <div className="mt-card-body">
                                <div className="mt-card-content">
                                    <div className="mt-card-content-top">
                                        <span>总销售额</span>
                                        <span><i className="iconfont icon-info"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="mt-card">
                            <div className="mt-card-body">
                                <span>总销售额</span>
                                <span><i className="iconfont icon-info"></i></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>;
    }
}

export default BodyHTML; 
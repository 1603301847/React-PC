import React, { Component } from 'react';

import {Form,message,InputNumber,Button,Row,Col,Statistic,Card} from 'antd';
  

  
class NormalHTML extends Component {

    constructor(props) {
        super(props);
           
        this.state = {
            VOLFloat:0, 
            percent:0    
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if(!err){

                try {
                    let len=values['currentValue'].toString().split(".")[1].length;
                    // this.state.VOLFloat=( (values['currentValue']*values['float'])/100).toFixed(len);
                    // this.state.percent=values['float'];
                    this.setState({
                        VOLFloat:( (values['currentValue']*values['float'])/100).toFixed(len),
                        percent:values['float']
                   });

                } catch (error) {
                    message.error('程序错误！');
                }
                
            }else{
                message.error('表单验证失败！');
            }
        });
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        let {VOLFloat,percent}=this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Row gutter={[32,32]}>
                    <Col span={4}>
                        <Card>
                            <Statistic
                                title={<div>
                                    <span>VOLFloat</span>
                                    <strong style={{marginLeft:'10px',color: 'goldenrod',fontSize:'18px'}}>{percent} %</strong>
                                </div>}
                                value={VOLFloat}
                                valueStyle={{color:'#3f8600'}}
                            />
                        </Card>
                    </Col>                     
                    <Col span={3}>
                        <Form.Item label="price">
                            {getFieldDecorator('currentValue', {
                                rules: [
                                    {
                                        required: true,
                                        message: '必填!',
                                    },
                                ],
                            })(<InputNumber style={{width:'100%'}}/>)}
                        </Form.Item>                    
                    </Col>
                    <Col span={2}>
                        <Form.Item label="eee(%)">
                            {getFieldDecorator('float', {
                                initialValue:0.3, 
                                rules: [
                                    {
                                        required: true,
                                        message: '必填!',
                                    },
                                ],
                            })(<InputNumber step={0.1} style={{width:'100%'}}/>)}
                        </Form.Item>                    
                    </Col>                          
                </Row>
                <Row>
                    <Col span={24}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                submit
                            </Button>
                        </Form.Item>  
                    </Col>
                
                </Row>            
            </Form>
        );
    }
}


const NormalHTMLForm = Form.create()(NormalHTML);
export default NormalHTMLForm; 

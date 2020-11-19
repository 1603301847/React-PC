import React, { Component } from 'react';

import {Form,Input,message,InputNumber,Button,Row,Col,Statistic,Card} from 'antd';
  
const InputGroup = Input.Group;

  
class NormalHTML extends Component {

    constructor(props) {
        super(props);
           
        this.state = {
            VOLFloat:0,     
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if(!err){
                // this.state.VOLFloat=(values['currentValue']*values['float'])/100;
                this.setState({
                    VOLFloat:(values['currentValue']*values['float'])/100
               });
            }else{
                message.error('表单验证失败！');
            }
        });
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        let {VOLFloat}=this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Row gutter={[32,32]}>

                    <Col span={4}>
                        <Card>
                            <Statistic
                                title="VOLSpace"
                                value={VOLFloat}
                                valueStyle={{color:'#3f8600'}}
                            />
                        </Card>
                    </Col> 

                    <Col span={6}>
                        <Form.Item label="区间">
                            <InputGroup compact>
                                {getFieldDecorator('start', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '必填!',
                                        },
                                    ],
                                })(<InputNumber style={{width:130,textAlign:'center'}} placeholder="start" />)}                                
                                <Input
                                    style={{
                                    width: 30,
                                    borderLeft: 0,
                                    pointerEvents: 'none',
                                    backgroundColor: '#fff',
                                    }}
                                    placeholder="~"
                                    disabled
                                />
                                {getFieldDecorator('end', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '必填!',
                                        },
                                    ],
                                })(<InputNumber style={{width:130,textAlign:'center',borderLeft:'none'}} placeholder="end" />)}                                  
                                
                            </InputGroup>                         
                        </Form.Item>
                    </Col>
                    <Col span={3}>
                        <Form.Item label="库存">
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
                        <Form.Item label="是的(%)">
                            {getFieldDecorator('float', {
                                initialValue:6, 
                                rules: [
                                    {
                                        required: true,
                                        message: '必填!',
                                    },
                                ],
                            })(<InputNumber style={{width:'100%'}}/>)}
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

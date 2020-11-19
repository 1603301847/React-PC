import React, { Component } from 'react';
import {Table,message,Button,Modal,Input,Tag} from 'antd';
import {asyncFormatCSVToJSON} from 'global';

const {TextArea} = Input;

class CandleHTML extends Component {

    constructor(props) {
        super(props);
        
        
        this.state = {
            visible:false,
            loading: false,
            bodyHeight:document.body.clientHeight-180,
            dataSource:[]
        };

        // columns
        this.columns=[
            {
                title: 'fluctuations（%）',
                dataIndex: 'fluctuations',
            },    
            {
                title: 'DATE',
                dataIndex: '<DATE>',
            }                                                                           
        ];
    }

    componentDidMount(){
    }

    // csv to json
    changeHandle=(event)=>{
        let file = event.target.files[0];

        if( !file ){
            message.warning('文件格式不存在！');
            return;
        }

        if( !file['type'].includes('excel') ){
            message.warning('文件格式不正确！[CSV]');
            return;
        }


        this.setState({loading:true,fileName:file['name'],dataSource:[]});
        asyncFormatCSVToJSON(file).then(o=>{
  
            // custem data
            let newData = o['data'].map((o,i)=>Object.assign({},o,{
                key:i,  // table row key
                // 波动 
                fluctuations: ( (Math.abs(o['<OPEN>']-o['<CLOSE>'])/o['<OPEN>'])*100).toFixed(2),    
            }));
            

            // updete
            this.setState({
                loading:false,
                dataSource:newData,
            });
        });
    }

    // import json
    toJsonHandle=()=> {
        // console.log( this.state.dataSource )
        this.setState({visible:true});
    }

    // cnacle
    handleCancel=()=> this.setState({visible:false});

    render() {
        let {loading,dataSource,bodyHeight,visible,fileName} = this.state;


        return <div>
            <div style={{height:43,marginTop:10}}>
                <input onChange={this.changeHandle} type="file" />
                <Button onClick={this.toJsonHandle} style={{float:'right'}} type="primary" icon="export" size="small" >JSON</Button>
            </div>
    
            <Table 
                dataSource={dataSource} 
                columns={this.columns} 
                loading={loading}
                size={'small'}
                pagination={false}
                stripe={true}
                disabled-hover={true}
                border={true}
                scroll={{
                    y:bodyHeight
                }}                
            />
            <br/>            
            <Tag color="#87d068" style={{fontSize:13}}>Total {dataSource['length']}</Tag>


            <Modal
                title={`Json Data 【${fileName}】`}
                footer={false}
                width="90%"
                visible={visible}
                onCancel={this.handleCancel}
            >
                <TextArea rows={23} value={ JSON.stringify(dataSource) } />
            </Modal>

        </div>
    }
}

export default CandleHTML; 
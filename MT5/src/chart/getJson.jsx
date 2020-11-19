import React, { Component } from 'react';
import {Table,Button,Tag,Dropdown,Menu} from 'antd';
import {asyncGetDataFromPublic,GlobalSymbol} from 'global';


class CandleHTML extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            filename10:'Data-10',
            filename20:'Data-20',
            filename30:'Data-30',

            loading: false,
            bodyHeight:document.body.clientHeight-180,
            dataSource:[]
        };

        this.columns=[
            {
                title: 'fluctuations（%）',
                dataIndex: 'fluctuations',
                defaultSortOrder:'descend',
                sorter: (a, b) => a.fluctuations - b.fluctuations,
            },   
            {
                title: 'DATE',
                dataIndex: '<DATE>',
            },                                                                         
        ];
    }

    componentDidMount(){
    }

    getJsonHandle=(option)=>{
        let key = option['key'].split('-');

        this.setState({loading:true,dataSource:[]});
        asyncGetDataFromPublic(`${key[0]}/${key[1]}.json`).then(data=>{

            this.setState({
                [`filename${key[2]}`]:`${key[0]}-${key[1]}`,
                loading:false,
                dataSource:data['data']
            });
        });

        
    }

    render() {
        let {loading,dataSource,bodyHeight,filename10,filename20,filename30} = this.state;

        // data 10
        const menu10 = (
            <Menu onClick={this.getJsonHandle}>
                { GlobalSymbol.map((o,i)=>!o?
                <Menu.Divider key={i}/>
                :
                <Menu.Item key={`Data10-${o}-${10}`}>{o}</Menu.Item>) }
            </Menu>
        );

        // data 20
        const menu20 = (
            <Menu onClick={this.getJsonHandle}>
                { GlobalSymbol.map((o,i)=>!o?
                <Menu.Divider key={i}/>
                :
                <Menu.Item key={`Data20-${o}-${20}`}>{o}</Menu.Item>) }
            </Menu>
        );

        // data 30
        const menu30 = (
            <Menu onClick={this.getJsonHandle}>
                { GlobalSymbol.map((o,i)=>!o?
                <Menu.Divider key={i}/>
                :
                <Menu.Item key={`Data30-${o}-${30}`}>{o}</Menu.Item>) }
            </Menu>
        );

        return <div>
            <div style={{height:43,marginTop:10}}>
                <Dropdown overlay={menu10} placement="bottomLeft">
                    <Button type="primary" icon="import" size="small" >{filename10}</Button>
                </Dropdown>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Dropdown overlay={menu20} placement="bottomLeft">
                    <Button type="primary" icon="import" size="small" >{filename20}</Button>
                </Dropdown>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Dropdown overlay={menu30} placement="bottomLeft">
                    <Button type="primary" icon="import" size="small" >{filename30}</Button>
                </Dropdown>   
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


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
        </div>
    }
}

export default CandleHTML; 
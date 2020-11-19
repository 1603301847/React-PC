import React, { Component } from 'react'
import G6 from "@antv/g6";

class G6Html2 extends Component {

    componentDidMount() {
        // console.log(G6.Global.version);
        const initData = {
            // 点集
            nodes: [{
                id: 'node1', // 节点的唯一标识
                x: 100,      // 节点横坐标
                y: 200,      // 节点纵坐标
                label: '起始点' // 节点文本
            }, {
                id: 'node2',
                x: 300,
                y: 200,
                label: '目标点'
            },
            {
                id: 'node3',
                type: 'ellipse',
                x: 500,
                y: 200,
                label: '自定义文字',  
                r: 50,
                fill: 'blue'
                
                
            }
            ],
            // 边集
            edges: [
                // 表示一条从 node1 节点连接到 node2 节点的边
                {
                    source: 'node1',  // 起始点 id
                    target: 'node2',  // 目标点 id
                    label: '我是连线'   // 边的文本
                },
                {
                    source: 'node2',  // 起始点 id
                    target: 'node3',  // 目标点 id
                    label: '我是自定义连线'   // 边的文本
                }
            ]
        };
        // const initData = { ... }
        const graph = new G6.Graph({
            container: 'mountNode', // 指定挂载容器
            width: 1000,             // 图的宽度
            height: 1000             // 图的高度
        });

        graph.data(initData);  // 加载数据
        graph.render();        // 渲染
    }

    render() {
        return <div className="mt-G6-page">
            <div id="mountNode"></div>
        </div>;
    }

}

export default G6Html2;
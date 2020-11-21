import React, { Component } from 'react'
import G6 from "@antv/g6";

class G6Html3 extends Component {

    componentDidMount() {
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
            }],
            // 边集
            edges: [
                // 表示一条从 node1 节点连接到 node2 节点的边
                {
                    source: 'node1',  // 起始点 id
                    target: 'node2',  // 目标点 id
                    label: '我是连线'   // 边的文本
                }
            ]
        };
        // const initData = { ... }
        const graph = new G6.Graph({
            container: 'mountNode', // 指定挂载容器
            width: 1200,             // 图的宽度
            height: 1000,             // 图的高度
            fitView: true,
            fitViewPadding: [20, 40, 50, 20],
            animate: true,
            defaultNode: {
                type: 'circle',
                color: '#D09991',
            }
        });
        graph.on('node:dblclick', () => {
            console.log(111)
        });
        // const initData = { ... }
        //  const graph = ...
        graph.data(initData);  // 加载数据
        graph.render();        // 渲染
        //  const graph = ...
        const main = async () => {
            const response = await fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json');
            const remoteData = await response.json();

            // ...
            graph.data(remoteData); // 加载远程数据
            graph.render();         // 渲染
        };
        main();
    }

    render() {
        return <div className="mt-G63-page">
            <div id="mountNode"></div>
        </div>;
    }

}

export default G6Html3;
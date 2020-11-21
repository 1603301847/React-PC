import React, { Component } from 'react'
import G6 from "@antv/g6";
import 'scss/G62.scss'

class G6Html2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            graph: '',
            initData: {
                // 点集
                nodes: [{
                    id: 'node1', // 节点的唯一标识
                    type: 'circle',
                    x: 100,      // 节点横坐标
                    y: 200,      // 节点纵坐标
                    label: '起始点', // 节点文本
                }, {
                    id: 'node2',
                    type: 'circle',
                    x: 300,
                    y: 200,
                    label: '目标点',
                },
                {
                    id: 'node3',
                    type: 'circle',
                    x: 1000,
                    y: 200,
                    label: '自定义文本内容',
                    size: 40
                },
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
                        label: '自定义线上内容'   // 边的文本
                    },
                ]
            }

        };
    }

    componentDidMount() {

        const graph = new G6.Graph({
            container: 'mountNode', // 指定挂载容器
            width: 1400,             // 图的宽度
            height: 1000,          // 图的高度
            renderer: 'canvas'
        });

        graph.clear();
        graph.data(this.state.initData);  // 加载数据
        graph.render();        // 渲染

        /**
         * 赋值给state对象
         */
        this.setState({
            graph: graph
        })
    }

    /**
     * 更新画布
     */
    getCanvas() {
        let graph = this.state.graph;
        graph.clear();
        graph.data(this.state.initData);
        graph.render();
        
        this.setState({
            graph: graph
        })
    }

    /**
     * 改变节点的大小
     */
    changeSize() {
        let circleSize = this.state.initData;
        circleSize.nodes[2].size = document.getElementById('cSize').value;
        this.setState({
            initData: circleSize
        })
        this.getCanvas();
    }

    /**
     * 改变节点上的文字 改变线上的文字
     */
    changeText() {
        let text = this.state.initData;
        text.nodes[2].label = document.getElementById('cText').value;
        text.edges[1].label = document.getElementById('lText').value;
        this.setState({
            initData: text
        });
        this.getCanvas();
    }
    
    render() {
        return <div className="mt-G62-page">
            <p><span>自定义圈大小</span><input type="number" defaultValue="" id="cSize" onChange={() => this.changeSize()} /></p>
            <p><span>自定义节点文字</span><input type="text" defaultValue="" id="cText" onChange={() => this.changeText()} /></p>
            <p><span>自定义线上文字</span><input type="text" defaultValue="" id="lText" onChange={() => this.changeText()} /></p>
            <div id="mountNode"></div>
        </div>;
    }

}

export default G6Html2;
import React, { Component } from 'react'
import G6 from "@antv/g6";
import '../scss/G64.scss'

class G6Html4 extends Component {

    componentDidMount() {
        const data = {
            nodes: [{
                x: 200,
                y: 200,
                type: 'circle',
                label: 'circle',
            }]
        }
        const data1 = {
            nodes: [
                {
                    x: 200,
                    y: 200,
                    type: 'rect',
                    label: 'rect',
                },
            ]
        }
        const data2 = {
            nodes: [{
                id: 'node-ellipse',
                x: 200,
                y: 200,
                type: 'ellipse',
                label: 'ellipse'
            }]
        }
        const data3 = {
            nodes: [
                {
                    id: 'node-diamond',
                    x: 200,
                    y: 200,
                    type: 'diamond',
                    label: 'diamond'
                },

            ]
        }
        const data4 = {
            nodes: [{
                id: 'node-triangle',
                x: 200,
                y: 200,
                //size: 80,
                type: 'triangle',
                label: 'triangle'
            },
            ]
        }
        const data5 = {
            nodes: [
                {
                    id: 'node-star',
                    x: 200,
                    y: 200,
                    //size: [60, 30],
                    type: 'star',
                    label: 'star'
                }
            ]
        }
        const data6 = {
            nodes: [
                {
                    x: 200,
                    y: 200,
                    size: 50,
                    type: 'image',
                    img: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
                    label: 'image',
                },

            ]
        }
        const data7 = {
            nodes: [
                {
                    id: 'node-modelRect',
                    x: 200,
                    y: 200,
                    type: 'modelRect',
                    label: 'modelRect'
                }
            ]
        }

        const graph = new G6.Graph({
            container: 'muntNode',
            width: 400,
            height: 400
        });
        const graph1 = new G6.Graph({
            container: 'mountode',
            width: 400,
            height: 400
        });
        const graph2 = new G6.Graph({
            container: 'mounode',
            width: 400,
            height: 400
        });
        const graph3 = new G6.Graph({
            container: 'mouode',
            width: 400,
            height: 400
        });
        const graph4 = new G6.Graph({
            container: 'muode',
            width: 400,
            height: 400
        });
        const graph5 = new G6.Graph({
            container: 'mouod',
            width: 400,
            height: 400
        });
        const graph6 = new G6.Graph({
            container: 'mouoe',
            width: 400,
            height: 400
        });
        const graph7 = new G6.Graph({
            container: 'moude',
            width: 400,
            height: 400
        });

        graph.data(data);
        graph1.data(data1);
        graph2.data(data2);
        graph3.data(data3);
        graph4.data(data4);
        graph5.data(data5);
        graph6.data(data6);
        graph7.data(data7);

        graph.render();
        graph1.render();
        graph2.render();
        graph3.render();
        graph4.render();
        graph5.render();
        graph6.render();
        graph7.render();

    }
    render() {
        return <div className="mt-G6-page">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div id="muntNode"></div>
                        </td>
                        <td>
                            <div id="mountode"></div>
                        </td>
                        <td>
                            <div id="mounode"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id="mouode"></div>
                        </td>
                        <td>
                            <div id="muode"></div>
                        </td>
                        <td>
                            <div id="mouod"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id="mouoe"></div>
                        </td>
                        <td>
                            <div id="moude"></div>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>;
    }

}

export default G6Html4;
import React, { Component } from 'react'
import '../scss/canvasPage.scss'

class canvasHtml extends Component {
    constructor(props) {
        super(props);
        this.state = {
            f_w: 300,
            f_h: 200,
            r: 100
        }
    }

    initCanvas() {
        const {
            x0,//原点坐标
            y0,
            // r,// 半径
        } = this.props

        /**
         *  绘制矩形
         * */
        let first = document.getElementById("first_canvas");
        let rect = first.getContext("2d");
        rect.beginPath();
        rect.strokeStyle = "#F0C4C4";
        rect.lineWidth = "1";
        rect.clearRect(0, 0, 400, 400)
        rect.strokeRect(50, 50, this.state.f_w, this.state.f_h);
        rect.stroke();
        rect.closePath();

        /**
         * 绘制五角星
         */
        let second = document.getElementById("second_canvas");
        let context = second.getContext("2d");

        context.beginPath();
        //设置是个顶点的坐标，根据顶点制定路径   
        for (var i = 0; i < 5; i++) {
            context.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * 200 + 200,
                -Math.sin((18 + i * 72) / 180 * Math.PI) * 200 + 200);
            context.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * 80 + 200,
                -Math.sin((54 + i * 72) / 180 * Math.PI) * 80 + 200);
        }
        context.closePath();

        //设置边框样式以及填充颜色   
        context.lineWidth = "1";
        context.fillStyle = "#F6F152";
        context.strokeStyle = "#F5270B";
        context.fill();
        context.stroke();


        /**
         * 绘制圆形
         */
        let three = document.getElementById("three_canvas");
        let circle = three.getContext("2d");

        circle.beginPath();
        circle.clearRect(0, 0, 400, 400)
        circle.arc(x0, y0, this.state.r, 0, 2 * Math.PI);
        circle.stroke();
        context.closePath();

        /**
         * 绘制三角形
         */
        let four = document.getElementById("four_canvas");
        let triangle = four.getContext("2d");

        triangle.beginPath();
        triangle.moveTo(100, 100);
        triangle.lineTo(200, 300);
        triangle.lineTo(400, 300);
        triangle.lineTo(100, 100);
        triangle.stroke();
        triangle.closePath();

        /**
         * 绘制水滴
         */
        let five = document.getElementById("five_canvas");
        let water = five.getContext("2d");
        water.beginPath();
        water.strokeStyle = "#00F";
        water.moveTo(100, 0);
        water.bezierCurveTo(-100, 200, 300, 200, 100, 0);
        water.stroke();
        water.closePath();

        /**
         * 绘制图形
         */
        let six = document.getElementById("six_canvas");
        let chart = six.getContext("2d");

        chart.beginPath();
        //普通的直线  
        chart.beginPath();
        chart.strokeStyle = "#CCC";
        chart.moveTo(0, 0);
        chart.lineTo(200, 0);
        chart.lineTo(0, 200);
        chart.lineTo(200, 200);
        chart.stroke();
        //贝兹曲线  
        chart.beginPath();
        chart.strokeStyle = "#F00";
        chart.moveTo(0, 0);
        chart.bezierCurveTo(200, 0, 0, 200, 200, 200);
        chart.stroke();
        chart.closePath();

        /**
         * 绘制多边形
         */
        let seven = document.getElementById("seven_canvas");
        let polygon = seven.getContext("2d");
        polygon.fillRect(0, 0, 100, 100);
        polygon.strokeRect(120, 0, 100, 100);
        polygon.fillStyle = "red";
        polygon.strokeStyle = "blue";
        polygon.fillRect(0, 120, 100, 100);
        polygon.strokeRect(120, 120, 100, 100);
        polygon.fillStyle = "rgba(255,0,0,0.2)";
        polygon.strokeStyle = "rgba(255,0,0,0.2)";
        polygon.fillRect(240, 0, 100, 100);
        polygon.strokeRect(240, 120, 100, 100);
        polygon.clearRect(50, 50, 240, 120);
        polygon.stroke();
        polygon.closePath();
    }

    componentDidMount() {
        this.initCanvas()
    }

    componentDidUpdate() {
        this.initCanvas()
    }

    static defaultProps = {
        canvaswidth: 400,// 画布宽度
        canvasheight: 400,// 画布高度
        x0: 200,
        y0: 200,
    }

    /**
     * 设置 半径 r
     */
    changeRadius() {
        this.setState({
            r: document.getElementById('pai').value
        })
    }

    /**
     * 设置 矩形 宽高
     */
    changeBlock() {
        this.setState({
            f_w: document.getElementById("f_w").value,
            f_h: document.getElementById("f_h").value
        })
    }
    render() {
        const { canvaswidth, canvasheight, } = this.props
        return <div className="mt-canvas-page">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <span>宽</span><input id="f_w" type="number" defaultValue="" onClick={() => this.changeBlock()} />
                            <span>高</span><input id="f_h" type="number" defaultValue="" onClick={() => this.changeBlock()} />
                            <canvas id="first_canvas" width={canvaswidth} height={canvasheight}></canvas></td>
                        <td>
                            <canvas id="second_canvas" width={canvaswidth} height={canvasheight}></canvas>
                        </td>
                        <td>
                            <span>圆的半径 r</span><input type="number" id="pai" onChange={() => this.changeRadius()} />
                            <canvas id="three_canvas" width={canvaswidth} height={canvasheight}></canvas>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <canvas id="four_canvas" width={canvaswidth} height={canvasheight}></canvas>
                        </td>
                        <td>
                            <canvas id="five_canvas" width={canvaswidth} height={canvasheight}></canvas>
                        </td>
                        <td>
                            <canvas id="six_canvas" width={canvaswidth} height={canvasheight}></canvas>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <canvas id="seven_canvas" width={canvaswidth} height={canvasheight}></canvas>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>;
    }
}
export default canvasHtml;
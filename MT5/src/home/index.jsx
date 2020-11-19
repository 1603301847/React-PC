import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from 'antd';
import { Menu, Icon } from 'antd';

import Home from './home';
import CsvToJsonPage from 'chart/csvToJson';
import GetJsonPage from 'chart/getJson';
import ComputedPage from 'computed/index';
import PicturePage from 'picture/index';
import LoginPage from 'login/index';
import CollapsePage from 'collapse/index';
import CollapseExpPage from 'collapseExp/index';
import SelectPage from 'select/index';
import RatePage from 'rate/index';
import CarouselPage from 'carousel/index';
import TabsPage from 'tabs/index'
import SplitPage from 'split/index'
import ModalPage from 'modal/index'
import TreePage from 'tree/index'
import MenuPage from 'menu/index'
import ProgressBarPage from 'progressBar/index'
import StepBarPage from 'stepBar/index'
import SliderPage from 'slider/index'
import TinyMCEPage from 'TinyMCE/index'
// import ChartsPage from 'charts/index'
// import GanttPage from 'gantt/index'
import WeChatPage from 'weChat/index'
import CanvasPage from 'canvas/index'
import G6Page from 'G6/index'
import G6Page2 from 'G62/index'
import G6Page3 from 'G63/index'
import G6Page4 from 'G64/index'
import G6Page5 from 'G65/index'
import G6Page6 from 'G66/index'
import G6Page7 from 'G67/index'

const { Sider, Content } = Layout;
const { SubMenu } = Menu;


class HomeHTML extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bodyHeight: document.body.clientHeight,
        };
    }

    render() {
        let { bodyHeight } = this.state;

        return <Router>
            <Layout>
                <Sider>
                    <Menu defaultOpenKeys={['menu1']} style={{ height: bodyHeight - 30, width: 180 }} mode="inline">
                        <SubMenu
                            key="menu1"
                            title={
                                <Link to="/">
                                    <span>
                                        <Icon type="api" />
                                        <span>
                                            chart
                                        </span>
                                    </span>
                                </Link>
                            }
                        >

                            <Menu.Item key="1">
                                <Link to="/CsvToJsonPage">CSV-&gt;Json</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/GetJsonPage">statistics</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/ComputedPage">computedPage</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/Picture">picture</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to="/LoginPage">loginPage</Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to="/CollapsePage">collapsePage</Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Link to="/CollapseExpPage">collapseExpPage</Link>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Link to="/SelectPage">selectPage</Link>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <Link to="/RatePage">ratePage</Link>
                            </Menu.Item>
                            <Menu.Item key="10">
                                <Link to="/CarouselPage">carouselPage</Link>
                            </Menu.Item>
                            <Menu.Item key="11">
                                <Link to="/TabsPage">tabsPage</Link>
                            </Menu.Item>
                            <Menu.Item key="12">
                                <Link to="/SplitPage">splitPage</Link>
                            </Menu.Item>
                            <Menu.Item key="13">
                                <Link to="/ModalPage">modalPage</Link>
                            </Menu.Item>
                            <Menu.Item key="14">
                                <Link to="/TreePage">treePage</Link>
                            </Menu.Item>
                            <Menu.Item key="15">
                                <Link to="/MenuPage">menuPage</Link>
                            </Menu.Item>
                            <Menu.Item key="16">
                                <Link to="/ProgressBarPage">progressBarPage</Link>
                            </Menu.Item>
                            <Menu.Item key="17">
                                <Link to="/StepBarPage">stepBarPage</Link>
                            </Menu.Item>
                            <Menu.Item key="18">
                                <Link to="/SliderPage">sliderPage</Link>
                            </Menu.Item>
                            <Menu.Item key="19">
                                <Link to="/TinyMCEPage">tinyMCEPage</Link>
                            </Menu.Item>
                            {/* <Menu.Item key="20">
                                <Link to="/ChartsPage">chartsPage</Link>
                            </Menu.Item>
                            <Menu.Item key="21">
                                <Link to="/GanttPage">ganttPage</Link>
                            </Menu.Item> */}
                            <Menu.Item key="22">
                                <Link to="/WeChatPage">weChatPage</Link>
                            </Menu.Item>
                            <Menu.Item key="23">
                                <Link to="/CanvasPage">canvasPage</Link>
                            </Menu.Item>
                            <Menu.Item key="24">
                                <Link to="/G6Page">G6Page</Link>
                            </Menu.Item>
                            <Menu.Item key="25">
                                <Link to="/G6Page2">G6Page2</Link>
                            </Menu.Item>
                            <Menu.Item key="26">
                                <Link to="/G6Page3">G6Page3</Link>
                            </Menu.Item>
                            <Menu.Item key="27">
                                <Link to="/G6Page4">G6Page4</Link>
                            </Menu.Item>
                            <Menu.Item key="28">
                                <Link to="/G6Page5">G6Page5</Link>
                            </Menu.Item>
                            <Menu.Item key="29">
                                <Link to="/G6Page6">G6Page6</Link>
                            </Menu.Item>
                            <Menu.Item key="30">
                                <Link to="/G6Page7">G6Page7</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>



                <Content>
                    {/*
                            A <Switch> looks through all its children <Route>
                            elements and renders the first one whose path
                            matches the current URL. Use a <Switch> any time
                            you have multiple routes, but you want only one
                            of them to render at a time
                        */}
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/CsvToJsonPage">
                            <CsvToJsonPage />
                        </Route>
                        <Route path="/GetJsonPage">
                            <GetJsonPage />
                        </Route>
                        <Route path="/ComputedPage">
                            <ComputedPage />
                        </Route>
                        <Route path="/Picture">
                            <PicturePage />
                        </Route>
                        <Route path="/LoginPage">
                            <LoginPage />
                        </Route>
                        <Route path="/CollapsePage">
                            <CollapsePage />
                        </Route>
                        <Route path="/CollapseExpPage">
                            <CollapseExpPage />
                        </Route>
                        <Route path="/SelectPage">
                            <SelectPage />
                        </Route>
                        <Route path="/RatePage">
                            <RatePage />
                        </Route>
                        <Route path="/CarouselPage">
                            <CarouselPage />
                        </Route>
                        <Route path="/TabsPage">
                            <TabsPage />
                        </Route>
                        <Route path="/SplitPage">
                            <SplitPage />
                        </Route>
                        <Route path="/ModalPage">
                            <ModalPage />
                        </Route>
                        <Route path="/TreePage">
                            <TreePage />
                        </Route>
                        <Route path="/MenuPage">
                            <MenuPage />
                        </Route>
                        <Route path="/ProgressBarPage">
                            <ProgressBarPage />
                        </Route>
                        <Route path="/StepBarPage">
                            <StepBarPage />
                        </Route>
                        <Route path="/SliderPage">
                            <SliderPage />
                        </Route>
                        <Route path="/TinyMCEPage">
                            <TinyMCEPage />
                        </Route>
                        {/* <Route path="/ChartsPage">
                            <ChartsPage />
                        </Route>
                        <Route path="/GanttPage">
                            <GanttPage />
                        </Route> */}
                        <Route path="/WeChatPage">
                            <WeChatPage />
                        </Route>
                        <Route path="/CanvasPage">
                            <CanvasPage />
                        </Route>
                        <Route path="/G6Page">
                            <G6Page />
                        </Route>
                        <Route path="/G6Page2">
                            <G6Page2 />
                        </Route>
                        <Route path="/G6Page3">
                            <G6Page3 />
                        </Route>
                        <Route path="/G6Page4">
                            <G6Page4 />
                        </Route>
                        <Route path="/G6Page5">
                            <G6Page5 />
                        </Route>
                        <Route path="/G6Page6">
                            <G6Page6 />
                        </Route>
                        <Route path="/G6Page7">
                            <G6Page7 />
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </Router>
    }
}

export default HomeHTML; 
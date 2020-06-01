import React, { Component } from 'react';
import { Layout } from 'antd';
import '../../App.less';

const { Header, Footer, Sider, Content } = Layout;




class Layouts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Layout className="layout-box">
                <Sider>Sider</Sider>
                <Layout>
                    <Header style={{background:'#fff'}}>Header</Header>
                    <Content>
                        {this.props.children}
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Layouts;
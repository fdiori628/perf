import { Layout, Menu, theme } from 'antd';
import React from 'react';
import './index.css';
import Home from './Home';

const { Header, Content } = Layout;
const items1 = ['HOME', 'CONFIG', 'REPORT', 'HISTORY'].map((key) => ({
  key,
  label: `${key}`
}));

const App = (props) => { 
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{
      margin: "20px 60px 0 60px"
    }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['HOME']} items={items1} style={{ width: '100%' }} />
      </Header>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Home data={props.data}/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
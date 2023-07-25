import { Layout } from 'antd';
import { CSSProperties, PropsWithChildren } from 'react';

const { Header, Footer, Content } = Layout;

const layoutStyle: CSSProperties = { minHeight: '100vh' };
const footerStyle: CSSProperties = { backgroundColor: '#dcdcdc' };

export const AppLayout = ({ children }: PropsWithChildren) => (
  <Layout style={layoutStyle}>
    <Header>
      <span className='text-sky-400'>StarWars Heroes App</span>
    </Header>
    <Content className={'p-12'}>{children}</Content>
    <Footer style={footerStyle}>Footer: 2023</Footer>
  </Layout>
);

import { Outlet } from '@modern-js/runtime/router';
import { Layout as ArcoLayout } from '@arco-design/web-react';
import Navigator from '@/components/Navigator';
import UserDropDown from '@/components/UserDropDown';
import '@arco-design/web-react/dist/css/arco.css';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

const { Header, Content, Sider } = ArcoLayout;

export default function Layout() {
  return (
    <ArcoLayout className="w-screen h-screen">
      <Header className="h-20 flex justify-between items-center p-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <h1 className="flex text-2xl font-bold">Akashic</h1>
        <UserDropDown />
      </Header>
      <ArcoLayout>
        <Sider>
          <Navigator />
        </Sider>
        <Content className="relative">
          <Outlet />
        </Content>
      </ArcoLayout>
    </ArcoLayout>
  );
}

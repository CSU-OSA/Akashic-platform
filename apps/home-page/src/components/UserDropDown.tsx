import { Dropdown, Menu, Button, Space } from '@arco-design/web-react';
import { IconUser } from '@arco-design/web-react/icon';

const dropList = (
  <Menu>
    <Menu.Item key="1">user setting</Menu.Item>
    <Menu.Item key="1">logout</Menu.Item>
  </Menu>
);

function App() {
  return (
    <Space className="dropdown-demo">
      <Dropdown droplist={dropList} position="bl">
        <Button type="text">
          <IconUser className="text-white" />
        </Button>
      </Dropdown>
    </Space>
  );
}

export default App;

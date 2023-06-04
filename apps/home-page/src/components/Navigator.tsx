import { Link, Menu } from '@arco-design/web-react';
import { getAppList } from 'micro-app-manager';

const MenuItem = Menu.Item;

export default function Navigator() {
  return (
    <Menu className="z-50">
      <MenuItem key="home">
        <Link href="/">Home</Link>
      </MenuItem>
      {getAppList().map(({ name }) => (
        <MenuItem key={name}>
          <Link href={`./${name}`}>{name}</Link>
        </MenuItem>
      ))}
    </Menu>
  );
}

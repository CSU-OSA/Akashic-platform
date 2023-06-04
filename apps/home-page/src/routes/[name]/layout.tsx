import { Outlet } from '@modern-js/runtime/router';

export default function Layout() {
  return (
    <div className="w-full h-full relative">
      <Outlet />
    </div>
  );
}

import { useParams } from '@modern-js/runtime/router';
import { useModuleApps } from '@modern-js/plugin-garfish/runtime';
import { getAppList } from 'micro-app-manager';

export default function MicroAppPage() {
  const { name } = useParams();
  const appInfo = useModuleApps();
  const appList = getAppList();

  const app = appList.find(app => app.name === name);

  if (!name) {
    return <div>no app found</div>;
  }

  if (app?.type === 'garfish') {
    const MApp = appInfo[name];
    return <MApp />;
  } else if (app?.type === 'iframe') {
    return (
      <iframe className="w-full h-full" src={app.iframeConfig?.entry}></iframe>
    );
  } else {
    return <div>app type not support</div>;
  }
}

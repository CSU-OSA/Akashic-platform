import { IMicroAppConfig } from './types/domain';

export function getAppList(): IMicroAppConfig[] {
  return [
    {
      name: 'knowledge',
      type: 'garfish',
      garfishConfig: {
        entry: 'http://localhost:8081',
        activeWhen: 'knowledge',
      },
    },
    {
      name: 'iosClub',
      type: 'iframe',
      iframeConfig: {
        entry: 'https://csuios.club/',
      },
    },
    {
      name: 'smartCollege',
      type: 'iframe',
      iframeConfig: {
        entry: 'https://www.smartercollege.cn/#/login',
      },
    },
  ];
}

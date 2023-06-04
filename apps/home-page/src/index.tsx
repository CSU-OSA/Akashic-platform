import { bootstrap } from '@modern-js/runtime';
import ReactDOM from 'react-dom/client';

export default (App: React.ComponentType) => {
  // do something before bootstrap...
  bootstrap(App, 'platform-root', undefined, ReactDOM);
};

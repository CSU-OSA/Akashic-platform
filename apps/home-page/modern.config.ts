import appTools, { defineConfig } from '@modern-js/app-tools';
import garfishPlugin from '@modern-js/plugin-garfish';
import tailwindCSSPlugin from '@modern-js/plugin-tailwindcss';
import { getAppList } from 'micro-app-manager';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
    masterApp: {
      apps: [...getAppList()]
        .filter(app => app.type === 'garfish')
        .map(({ garfishConfig: app, name }) => ({
          name,
          entry: '',
          ...app,
          domGetter: () => document.querySelector('#root'),
        })),
    },
  },
  plugins: [appTools(), garfishPlugin(), tailwindCSSPlugin()],
});

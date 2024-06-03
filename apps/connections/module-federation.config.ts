import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'connections',
  exposes: {
    './Routes': 'apps/connections/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

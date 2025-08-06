import { registerPlugin } from '@capacitor/core';

import type { LibztPluginPlugin } from './definitions';

const LibztPlugin = registerPlugin<LibztPluginPlugin>('LibztPlugin', {
  web: () => import('./web').then((m) => new m.LibztPluginWeb()),
});

export * from './definitions';
export { LibztPlugin };

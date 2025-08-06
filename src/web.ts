import { WebPlugin } from '@capacitor/core';

import type { LibztPluginPlugin } from './definitions';

export class LibztPluginWeb extends WebPlugin implements LibztPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

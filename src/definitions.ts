export interface LibztPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

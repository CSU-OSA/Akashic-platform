export interface IMicroAppConfig {
  name: string;
  type: 'garfish' | 'iframe';
  iframeConfig?: {
    entry: string;
  };
  garfishConfig?: {
    entry: string;
    activeWhen?: string;
  };
}

import { DefineComponent } from 'vue-i18n';

declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // Define las propiedades de i18n
    $t(key: string): string;
    $tc(key: string, choice?: number, values?: Record<string, unknown>): string;
    $te(key: string, locale?: string): boolean;
    $d(value: number | string | Date, key?: string): string;
    $n(value: number, key?: string): string;
    $i18n: {
      locale: string;
      t: (key: string) => string;
      tc: (key: string, choice?: number, values?: Record<string, unknown>) => string;
      te: (key: string, locale?: string) => boolean;
      d: (value: number | string | Date, key?: string) => string;
      n: (value: number, key?: string) => string;
      messages: {
        [key: string]: {
          [key: string]: string;
        };
      };
    };
  }
}
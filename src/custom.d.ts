declare module '*.svg' {
  import type * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare module '*.png' {
  const value: never;
  export = value
}

declare module '*.json' {
  const value: never;
  export = value
}

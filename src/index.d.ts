declare module "react-extension-icons" {
  import * as React from "react";

  export type Variant = "color" | "single_color" | "grayscale";

  export interface IconProps {
    extension: string;
    variant?: Variant;
    size?: number;
    className?: string;
    color?: string;
  }

  export const Icon: React.FC<IconProps>;
}

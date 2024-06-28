export type Variant = 'color' | 'single_color' | 'grayscale';

export interface IconProps {
  extension: string;
  variant?: Variant;
  size?: number;
  className?: string;
  color?: string; // Color prop for single_color variant
}

import { Variant } from '../types';
export declare const getIconComponent: (extension: string, variant?: Variant) => React.ComponentType<React.SVGProps<SVGSVGElement> & {
    color?: string;
}> | null;

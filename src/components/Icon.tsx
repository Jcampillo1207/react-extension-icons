
import React from 'react';
import { IconProps } from '../types';
import { getIconComponent } from '../utils/getIconComponent';

const Icon: React.FC<IconProps> = ({ extension, variant = 'color', size = 24, className, color }) => {
  const IconComponent = getIconComponent(extension, variant);

  if (!IconComponent) {
    return null; // Return null if no matching icon component is found
  }

  return (
    <IconComponent
      width={size}
      height={size}
      className={className}
      color={color} // Pass color prop to the icon component
    />
  );
};

export default Icon;

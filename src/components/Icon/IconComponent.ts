import React from 'react';

export interface IconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

type IconComponent = React.FC<IconProps>;

export default IconComponent;

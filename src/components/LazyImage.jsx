import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  wrapperClassName = '', 
  effect = 'blur',
  threshold = 100,
  ...props 
}) => {
  return (
    <LazyLoadImage
      alt={alt}
      src={src}
      effect={effect}
      className={className}
      wrapperClassName={wrapperClassName}
      threshold={threshold}
      {...props}
    />
  );
};

export default LazyImage;

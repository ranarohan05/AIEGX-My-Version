import React, { useState } from 'react';
import { hardwarePlatformImages } from './hardwarePlatformImages';

export default function PlatformImage({ productId, className }) {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const image = hardwarePlatformImages[productId];

  if (!image) {
    return (
      <span className={`${className} platform-image__fallback`} role="img" aria-label="Platform image not provided">
        <span>Platform image not provided</span>
      </span>
    );
  }

  if (imageUnavailable) {
    return (
      <span className={`${className} platform-image__fallback`} role="img" aria-label={`${image.alt} Image unavailable.`}>
        <span>Image unavailable</span>
        <small>Illustrative board image unavailable</small>
      </span>
    );
  }

  return (
    <img
      className={className}
      src={image.src}
      alt={image.alt}
      loading="lazy"
      decoding="async"
      draggable="false"
      onError={() => setImageUnavailable(true)}
    />
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import s from './Image.scss';

export const ImageBlock = ({ alt, src, caption }) => (
  <figure className={s.image__figure}>
    <img className={s.image__img} src={src} alt={alt} />
    {caption && (
      <figcaption className={s.image__caption}>{caption}</figcaption>
    )}
  </figure>
);

ImageBlock.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  src: PropTypes.string,
  caption: PropTypes.node,
};

import React from 'react';
import PropTypes from 'prop-types';
import s from './Author.scss';

export const AuthorBlock = ({ name, bio, image }) => (
  <React.Fragment>
    {image && (
      <div className={s.author__image}>
        <img alt="" src={image} />
      </div>
    )}

    <div className={s.author__text}>
      <p className={s.author__paragraph}>{name}</p>
      <p className={s.author__paragraph}>{bio}</p>
    </div>
  </React.Fragment>
);

AuthorBlock.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  image: PropTypes.string,
};

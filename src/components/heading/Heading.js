import React from 'react';
import PropTypes from 'prop-types';
import s from './Heading.scss';

export const Heading = ({ children, loading }) => (
  <div className={[s.heading, loading && s.isLoading].join(' ')}>
    <div className={s.heading__container}>
      <div className={s.heading__row}>
        <div className={s.heading__col}>
          <h1>
            {children}
          </h1>
        </div>
      </div>
    </div>
  </div>
);

Heading.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
};

import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from './Text.scss';

export const Text = ({ text }) => (
  <div className={s.text}>
    <div className={s.text__container}>
      <div className={s.text__row}>
        <div className={s.text__col}>
          <ReactMarkdown source={text} />
        </div>
      </div>
    </div>
  </div>
)

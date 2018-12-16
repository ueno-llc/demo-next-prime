import React from 'react';
import { Transition } from 'react-transition-group';
import { TimelineLite } from 'gsap';
import ReactMarkdown from 'react-markdown';
import s from './Content.scss';

export const Content = ({ in: show, title, text }) => {

  const t = new TimelineLite();
  const ease = 'Power4.easeInOut';

  const titleRef = React.useRef(null);
  const textRef = React.useRef(null);

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={1000}
      onEnter={() => t.staggerFromTo(
        [titleRef.current, textRef.current],
        0.7,
        { alpha: 0 },
        { alpha: 1, ease },
        '-=0.15',
      )}
      onExit={() => t.staggerFromTo(
        [titleRef.current, textRef.current],
        0.2,
        { alpha: 1 },
        { alpha: 0, ease },
      )}
      addEndListener={(node, done) => t.call(done)}
    >
      <div className={s.content}>
        <h1 className={s.content__title} ref={titleRef}>
          {title}
        </h1>
        <div className={s.content__text} ref={textRef}>
          <ReactMarkdown source={text} />
        </div>
      </div>
    </Transition>
  );
}

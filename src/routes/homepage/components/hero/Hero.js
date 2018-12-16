import React from 'react';
import classNames from 'classnames/bind';
import { TimelineLite } from 'gsap';
import { TransitionGroup } from 'react-transition-group';
import { Content } from './Content';
import styles from './Hero.scss';

const s = classNames.bind(styles);
Object.assign(s, styles);

export const Hero = ({ carousel = [] }) => {
  const [current, setCurrent] = React.useState(0);
  const [slide, setSlide] = React.useState(carousel[current]);
  const heroRef = React.useRef(null);

  React.useEffect(() => setSlide(carousel[current]), [current]);

  const onChange = (index, backgroundColor) => {
    const t = new TimelineLite();
    const ease = 'Power4.easeInOut';
    t.to(heroRef.current, 0.6, { backgroundColor, ease });
    setCurrent(index);
  };

  const onNavItemClick = (e) => {
    const index = Number(e.currentTarget.dataset.index);
    onChange(index, carousel[index].color);
  }

  const renderNavItem = (item, index) => (
    <li
      key={`pagination-item-${index}`}
      data-index={index}
      className={s(s.hero__item, { active: current === index })}
      onClick={onNavItemClick}
    />
  );

  return (
    <div className={s.hero} ref={heroRef}>
      <div className={s(s.hero__container, s.hero__top)}>
        <div className={s.hero__row}>
          {carousel && (
            <TransitionGroup className={s.hero__content}>
              <Content
                key={`content-slide-${current}`}
                title={slide.title}
                text={slide.text}
              />
            </TransitionGroup>
          )}
        </div>
      </div>

      <div className={s.hero__container}>
        <ul className={s.hero__pagination}>
          {carousel && carousel.map(renderNavItem)}
        </ul>
      </div>
    </div>
  );
}

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './Button.scss';

const s = classNames.bind(styles);
Object.assign(s, styles);

export class Button extends PureComponent {

  static propTypes = {
    to: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    stroke: PropTypes.bool,
    large: PropTypes.bool,
  };

  render() {
    const {
      to,
      children,
      className,
      disabled,
      stroke,
      large,
      ...rest
    } = this.props;

    // Some flags
    const isLink = (typeof to !== 'undefined');
    const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to);

    // Extend className of the rest
    rest.className = classNames(s.button, className, { disabled, large });
    rest.disabled = disabled;

    // http, https, //, mailto, etc.
    if (isExternal) {
      return <a target="_blank" rel="noopener noreferrer" href={to} {...rest}>{children}</a>;
    }

    // Everything else
    if (isLink) {
      return <Link href={to}><a {...rest}>{children}</a></Link>;
    }

    // Default
    return <button {...rest}>{children}</button>;
  }
}

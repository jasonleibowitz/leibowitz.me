// modules
import React, { PropTypes, PureComponent } from 'react';

// alias
import Image from 'components/Image/Image';

// file
import styles from './Header.pcss';

export default class Header extends PureComponent {
  render() {
    const bgImage = require('images/emile-perron-190221.jpg');
    return (
      <div
        className={ styles.container }
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${ bgImage }) no-repeat bottom`,
          backgroundSize: 'cover',
        }}
      >
        <Image className={ styles.logo } src='logo.png' />
      </div>
    );
  }
}

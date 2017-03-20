// modules
import React, { PropTypes, PureComponent } from 'react';
import { Link } from 'react-router-dom';

// files
import styles from './NavBar.pcss';

export default class NavBar extends PureComponent {
  render() {
    return (
      <div className={ styles.container }>
        <Link className={ styles.link } to='/about'>{'About'}</Link>
        <Link className={ styles.link } to='/projects'>{'Projects'}</Link>
        <Link className={ styles.link } to='/resume'>{'Resume'}</Link>
        <Link className={ styles.link } to='/contact'>{'Contact'}</Link>
      </div>
    );
  }
}

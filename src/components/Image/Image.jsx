// modules
import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames';

// files
import styles from './Image.pcss';

export default class Image extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
  }

  static defaultProps = {

  }

  render() {
    const { className, src } = this.props;
    const imageSrc = require(`images/${ src }`);
    const classes = classnames(className, styles.container);

    return (
      <img className={ classes } src={ imageSrc } />
    );
  }
}

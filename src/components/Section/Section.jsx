// modules
import React, { PropTypes, PureComponent } from 'react';

// files
import styles from './Section.pcss';

export default class Section extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props;

    return (
      <div className={ styles.container }>
        { children }
      </div>
    );
  }
}

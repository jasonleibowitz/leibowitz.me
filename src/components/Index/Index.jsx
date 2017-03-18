/* Root component. All app content rendered within */
// Use this for any global notifications, etc.

// modules
import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames';

// aliased

// files
import styles from './Index.pcss';

export default class Index extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
    // classname/s to be merged
    className: PropTypes.string,
  };

  static defaultProps = {
  };

  render() {
    const { children, className } = this.props;

    // Merge classes from parent with own
    const classes = classnames(className, styles.index);

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}

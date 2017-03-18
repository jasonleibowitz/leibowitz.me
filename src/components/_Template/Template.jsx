/*
 * NOTE: This is a template for new react components
 * It contains examples of the repo's most common patterns
 * Use this as a base when creating new components
 */

// modules
import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames';
// import ImmutablePropTypes from 'react-immutable-proptypes';
// import { connect } from 'react-redux';

// aliased

// files
import styles from './Template.pcss';

/*
@connect((state) => {
  // map state to props (access state)
}, {
  // map dispatch to props (add action creators)
})
*/
export default class Template extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
    // classname/s to be merged
    className: PropTypes.string,
  };

  static defaultProps = {

  };

  // init state
  // state = {}

  render() {
    const { children, className } = this.props;

    // Merge classes from parent with own
    const classes = classnames(className, styles.template);

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}

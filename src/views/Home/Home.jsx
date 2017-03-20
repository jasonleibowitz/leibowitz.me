// modules
import React, { PropTypes, PureComponent } from 'react';

// alias
import Header from 'components/Header/Header';
import NavBar from 'components/NavBar/NavBar';

// files
import About from './About';
import SelectedProjects from './SelectedProjects';

export default class Home extends PureComponent {
  static propTypes = {

  }

  static defaultProps = {

  }

  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <About />
        <SelectedProjects />
      </div>
    );
  }
}

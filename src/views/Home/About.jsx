// modules
import React, { PropTypes, PureComponent } from 'react';

// alias
import Section from 'components/Section/Section';

export default class About extends PureComponent {
  /* eslint-disable max-len */
  render() {
    return (
      <Section>
        <h1>{ 'About Me' }</h1>
        <p>{ 'I\'m a digital product designer based in Nottingham, UK. I get excited about working with great companies, and building great products. If you\'re interested in hiring me, find out more about how I work.' }</p>
        <p>{ 'Alongside freelance design, I co-founded and am currently working on Plot, an iOS app for movie fans.' }</p>
        <p>{ 'Here\'s some of my recent and ongoing work (check out more on my projects page)' }</p>
      </Section>
    );
    /* eslint-enable max-len */
  }
}

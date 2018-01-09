import React from 'react';
import PropTypes from 'prop-types';

import s from './styles.css';

import Header from '../header';
import Footer from '../footer';

class Layout extends React.Component {
  render() {
    return (
      <div className="container" ref={node => (this.root = node)}>
        <Header />
        <div {...this.props} />
        <Footer />
      </div>
    );
  }
}

export default Layout;

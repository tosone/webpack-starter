import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render() {
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    );
  }
}

export default Footer;

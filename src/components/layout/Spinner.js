import React, { Fragment } from 'react';
import spinner from './spinner-loader-animation.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt=''
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;

import React from 'react';

const NoMatch = ({ location }) => ( // eslint-disable-line
  <div>
    <h2>404</h2>
    <p>No match for <code>{location.pathname}</code></p>
  </div>
);

export default NoMatch;

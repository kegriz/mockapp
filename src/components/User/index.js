import React from 'react';

const User = ({ match }) => ( // eslint-disable-line
  <div>
    <h2>User</h2>
    <p>id: { match.params.id }</p>
  </div>
);

export default User;

import React, { Fragment } from 'react';

function Welcome() {
  return (
    <Fragment>
      <div className="welcome">
          <p>Welcome to expenses tracker</p>
          <p>Track your expenses easily with this app</p>
          <Buttons />
        </div>
    </Fragment>
  );
}
export default Welcome;

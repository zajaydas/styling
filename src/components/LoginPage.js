// import React from 'react';
// import { connect } from 'react-redux';
// import { startLogin } from '../actions/auth';

// export const LoginPage = ({ startLogin }) => (
//   <div className="box-layout">
//     <div className="box-layout__box">
//       <h1 className="box-layout__title">Expensify App</h1>
//       <p>It's time to get your expenses under control.</p>
//       <button onClick={startLogin}>Login</button>
//     </div>
//   </div>
// );

// const mapDispatchToProps = (dispatch) => ({
//   startLogin: () => dispatch(startLogin())
// });

// export default connect(undefined, mapDispatchToProps)(LoginPage);
//----------------------------------------------------------------

import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <div className="box-layout__title">
        <h1>Expensify App</h1>
      </div>

      <p>It's time to get your expenses under control</p>
      <button className="button" onClick={startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

import React from 'react';
import { googleLogin } from '../../api/auth';

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page here</h1>
      <button onClick={googleLogin}>Log in with Google</button>
    </div>
  );
};

export default LandingPage;

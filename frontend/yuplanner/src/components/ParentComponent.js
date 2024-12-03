
import React, { useState } from 'react';
import SignupTextFields from './SignupTextField';
import CreateAccountButton from './CreateAccountButton';

export default function ParentComponent() {
  const [accountDetails, setAccountDetails] = useState({});

  return (
    <>
      <SignupTextFields setAccountDetails={setAccountDetails} />
      <CreateAccountButton accountDetails={accountDetails} />
    </>
  );
}
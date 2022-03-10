import React, { useState } from 'react';
import './SignUp.scss';
import FormInput from '../Form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  auth,
  createUserProfileDocument,
} from '../../firebase/Firebase-utilities';

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  // sign up submit

  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password didn't match!!");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.log(err);
    }
  };
  // sign up form change
  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...setUserCredentials, [name]: value });
  };

  return (
    <div>
      <div className="sign-up">
        <h3 className="title">I don't have an account</h3>
        <span>Sign up using email and password</span>
        <form className="sing-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Display Name"
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            label="confirm password"
          />
          <CustomButton type="submit" boxshadow="true" signInAndSignUp>
            Sign Up
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

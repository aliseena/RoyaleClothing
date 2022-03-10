import './SignIn.scss';
import React, { useState } from 'react';
import FormInput from '../Form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle, auth } from '../../firebase/Firebase-utilities';
import { signInWithEmailAndPassword } from 'firebase/auth';
const SignIn = () => {
  const [userCredential, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredential;
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUserCredentials(...userCredential, { email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredential, [name]: value });
  };

  return (
    <div className="sign-in">
      <h3>I already have an account</h3>
      <span>Sign in using your email and password</span>

      <form onClick={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <div className="buttons">
          <CustomButton signInAndSignUp type="submit" boxshadow="true">
            Sign In
          </CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            boxshadow="true"
            isgooglesignin
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

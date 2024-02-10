import { Link } from 'react-router-dom';
import { arrowLeftSVG, joinSVG } from '../assets/img/img';
import { SignUpFormData } from '../types/TaskTypes';
import React, { useState } from 'react';
import { postSignUp } from '../api/api';

function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptPolicy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSignUpFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (signUpFormData.password !== signUpFormData.confirmPassword)
      throw new Error('Password does not match');

    await postSignUp(signUpFormData);
  };

  return (
    <div className='signUpBackground'>
      <div className='signUp__bgAnimation'></div>
      <div className='signUp'>
        <div className='signUp__head'>
          <div className='signUp__logo'>{joinSVG()}</div>
        </div>
        <div className='signUp__body'>
          <div className='signUp__headlineContainer'>
            <Link to='/' className='signUp__arrowLeft'>
              {arrowLeftSVG()}
            </Link>
            <div className='signUp__headline'>Sign up</div>
          </div>
          <form className='signUp__form' onSubmit={handleSubmit}>
            <label className='signUp__form__inputContainer'>
              <input
                name='name'
                type='text'
                placeholder='Name'
                required
                tabIndex={1}
                onChange={handleChange}
              />
              <img src='src/assets/img/person.svg' alt='person icon' />
            </label>
            <label className='signUp__form__inputContainer'>
              <input
                name='email'
                type='text'
                placeholder='Email'
                required
                tabIndex={2}
                onChange={handleChange}
              />
              <img src='src/assets/img/mail.svg' alt='mail icon' />
            </label>
            <label className='signUp__form__inputContainer'>
              <input
                name='password'
                type='password'
                placeholder='Password'
                required
                tabIndex={3}
                onChange={handleChange}
              />
              <img src='src/assets/img/lock.svg' alt='lock icon' />
            </label>
            <label className='signUp__form__inputContainer'>
              <input
                name='confirmPassword'
                type='password'
                placeholder='Confirm Password'
                required
                tabIndex={4}
                onChange={handleChange}
              />
              <img src='src/assets/img/lock.svg' alt='lock icon' />
            </label>
            <input
              className='signUp__form__checkbox'
              name='acceptPolicy'
              id='checkbox'
              type='checkbox'
              required
              onChange={handleChange}
            />
            <label htmlFor='checkbox' tabIndex={5}>
              I accept the &nbsp;<Link to='/privacypolicy'>Privacy policy</Link>
            </label>
            <div className='signUp__form__buttons'>
              <button className='signUp__form__buttons-signUp' tabIndex={6}>
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className='signUp__footer'>
          <Link to='/privacypolicy'>Privacy Policy</Link>
          <Link to='/legalnotice'>Legal Notice</Link>
        </div>
      </div>
    </div>
  );
}
export default SignUp;

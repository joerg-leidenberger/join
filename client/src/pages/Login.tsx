import { Link } from 'react-router-dom';
import { joinSVG } from '../assets/img/img';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login fehlgeschlagen');
      }

      const { token } = await response.json();

      if (rememberMe) {
        // Token im localStorage speichern, wenn Remember Me aktiviert ist
        localStorage.setItem('token', token);
      } else {
        // Token im sessionStorage speichern, wenn Remember Me nicht aktiviert ist
        sessionStorage.setItem('token', token);
      }

      login(token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='login__bgAnimation'></div>
      <div className='login'>
        <div className='login__head'>
          <div className='login__logo'>{joinSVG()}</div>
          <div className='login__signUp'>
            <div>Not a Join user?</div>{' '}
            <Link to='/signUp'>
              <button tabIndex={6}>Sign up</button>
            </Link>
          </div>
        </div>
        <div className='login__body'>
          <div className='login__headline'>Log in</div>
          <form className='login__form' onSubmit={handleSubmit}>
            <label className='login__form__inputContainer'>
              <input
                type='text'
                placeholder='Email'
                required
                tabIndex={1}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <img src='src/assets/img/mail.svg' alt='mail icon' />
            </label>
            <label className='login__form__inputContainer'>
              <input
                type='text'
                placeholder='Password'
                required
                tabIndex={2}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img src='src/assets/img/lock.svg' alt='lock icon' />
            </label>
            <input
              className='login__form__checkbox'
              id='checkbox'
              type='checkbox'
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor='checkbox' tabIndex={3}>
              Remember me
            </label>
            <div className='login__form__buttons'>
              <button
                type='submit'
                className='login__form__buttons-login'
                tabIndex={4}
              >
                Login
              </button>
              <Link to='/summary'>
                <button
                  type='button'
                  className='login__form__buttons-guestLogin'
                  tabIndex={5}
                >
                  Guest log in
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className='login__footer'>
          <Link to='/privacypolicy'>Privacy Policy</Link>
          <Link to='/legalnotice'>Legal Notice</Link>
        </div>
      </div>
    </>
  );
}
export default Login;

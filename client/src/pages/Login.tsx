import { Link } from 'react-router-dom';
import { joinSVG } from '../assets/img/img';

function Login() {
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
          <form className='login__form'>
            <label className='login__form__inputContainer'>
              <input type='text' placeholder='Email' required tabIndex={1} />
              <img src='src/assets/img/mail.svg' alt='mail icon' />
            </label>
            <label className='login__form__inputContainer'>
              <input type='text' placeholder='Password' required tabIndex={2} />
              <img src='src/assets/img/lock.svg' alt='lock icon' />
            </label>
            <input
              className='login__form__checkbox'
              id='checkbox'
              type='checkbox'
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

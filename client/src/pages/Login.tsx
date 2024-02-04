import { joinSVG } from '../assets/img/img';

function Login() {
  return (
    <div className='login'>
      <div className='login__head'>
        <div className='login__logo'>{joinSVG()}</div>
        <div className='login__signUp'>
          <div>Not a Join user?</div> <button>Sign up</button>
        </div>
      </div>
      <div className='login__body'>
        <div className='login__headline'>Log in</div>
        <div className='login__form'>
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Password' />
          <input
            className='login__form__checkbox'
            id='checkbox'
            type='checkbox'
          />
          <label htmlFor='checkbox'>Remember me</label>
          <div className='login__form__buttons'>
            <button className='login__form__buttons-login'>Login</button>
            <button className='login__form__buttons-guestLogin'>
              Guest log in
            </button>
          </div>
        </div>
      </div>
      <div className='login__footer'>
        <a href='#'>Privacy Policy</a> <a href='#'>Privacy Policy</a>
      </div>
    </div>
  );
}
export default Login;

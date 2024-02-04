import { arrowLeftSVG, joinSVG } from '../assets/img/img';

function SignUp() {
  return (
    <>
      <div className='signUp__bgAnimation'></div>
      <div className='signUp'>
        <div className='signUp__head'>
          <div className='signUp__logo'>{joinSVG()}</div>
        </div>
        <div className='signUp__body'>
          <div className='signUp__headlineContainer'>
            <div className='signUp__arrowLeft'>{arrowLeftSVG()}</div>
            <div className='signUp__headline'>Sign up</div>
          </div>
          <form className='signUp__form'>
            <label className='signUp__form__inputContainer'>
              <input type='text' placeholder='Name' required tabIndex={1} />
              <img src='src/assets/img/person.svg' alt='person icon' />
            </label>
            <label className='signUp__form__inputContainer'>
              <input type='text' placeholder='Email' required tabIndex={2} />
              <img src='src/assets/img/mail.svg' alt='mail icon' />
            </label>
            <label className='signUp__form__inputContainer'>
              <input
                type='password'
                placeholder='Password'
                required
                tabIndex={3}
              />
              <img src='src/assets/img/lock.svg' alt='lock icon' />
            </label>
            <label className='signUp__form__inputContainer'>
              <input
                type='password'
                placeholder='Confirm Password'
                required
                tabIndex={4}
              />
              <img src='src/assets/img/lock.svg' alt='lock icon' />
            </label>
            <input
              className='signUp__form__checkbox'
              name='checkbox'
              id='checkbox'
              type='checkbox'
              required
            />
            <label htmlFor='checkbox' tabIndex={5}>
              I accept the Privacy policy
            </label>
            <div className='signUp__form__buttons'>
              <button className='signUp__form__buttons-signUp' tabIndex={6}>
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className='signUp__footer'>
          <a href='#'>Privacy Policy</a> <a href='#'>Privacy Policy</a>
        </div>
      </div>
    </>
  );
}
export default SignUp;

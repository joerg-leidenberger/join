import { deleteSVG, editSVG } from '../../assets/img/img';

function ContactInfo() {
  return (
    <div className='contactInfo'>
      <div className='contactInfo__container'>
        <div className='contactInfo__header'>
          <div className='contactInfo__initials'>AM</div>
          <div className='contactInfo__name'>
            <div>Anton Mayer</div>
            <div>
              <span>{editSVG()} Edit</span>
              <span>{deleteSVG()} Delete</span>
            </div>
          </div>
        </div>
        <div className='contactInfo__title'>Contact Information</div>
        <div className='contactInfo__infoBox'>
          <div>
            <span>Email</span>
            <span className='contactInfo__email'>antom@gmail.com</span>
          </div>
          <div>
            <span>Phone</span>
            <span>+49 1111 111 11 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactInfo;

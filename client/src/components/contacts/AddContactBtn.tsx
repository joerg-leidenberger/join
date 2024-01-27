import { addContact } from '../../assets/img/img';

function AddContactBtn() {
  return (
    <button className='addContact__button'>
      <span>Add new contact</span>
      <img src={addContact} alt='add contact icon' />
    </button>
  );
}
export default AddContactBtn;

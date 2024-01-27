import { addContact } from '../../assets/img/img';

function AddContactBtn() {
  return (
    <button className='addContactBtn'>
      <span>Add new contact</span>
      <img src={addContact} alt='add contact icon' />
    </button>
  );
}
export default AddContactBtn;

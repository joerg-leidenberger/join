import AddContactBtn from './button/AddContactBtn';
import ContactTable from './ContactTable';

function ContactList() {
  return (
    <div className='contactList'>
      <AddContactBtn />
      <ContactTable />
    </div>
  );
}
export default ContactList;

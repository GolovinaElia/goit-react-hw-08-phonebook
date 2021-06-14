import style from './ContactsView.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';

const ContactsView = () => {
  return (
    <div className={style.phonebook}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={style.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default ContactsView;

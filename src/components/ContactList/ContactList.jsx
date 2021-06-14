import style from './ContactList.module.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <div className={style.contacts}>
    <ul className={style.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={uuidv4()} className={style.contactsItem}>
          <p className={style.contactsForm}>
            <span className={style.contactsName}>{name}</span>: {number}
            <button
              className={style.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContact(state),
});
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

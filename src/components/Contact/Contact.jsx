import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item}>
      <p className={css.text}>
        {name}: {number}
      </p>
      <button onClick={handleDelete} className={css.button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
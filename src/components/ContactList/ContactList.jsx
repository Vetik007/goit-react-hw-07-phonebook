import { useDispatch, useSelector } from 'react-redux'; // для доступу до стору
import { useEffect } from 'react';
// import { GrContactInfo } from 'react-icons/gr';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/contactOperations'; // операції
import css from './ContactList.module.css';
// import { Button, Item, List, Text, Spinner } from './ContactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts); // витягуємо зі стору
  const isLoading = useSelector(selectIsLoading); // витягуємо зі стору
  const error = useSelector(selectError); // витягуємо зі стору
  const dispatch = useDispatch(); // для діспатча екшенів

  useEffect(() => {
    dispatch(fetchContacts()); // діспатчимо екшен
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id)); // діспатчимо екшен
  };

  return (
    <>
      {/* {isLoading && <Spinner />} */}

      {/* якщо немає контактів і не йде загрузка і не виникла помилка */}
      {!filteredContacts?.length && !error && !isLoading && (
        <p>No contacts found.</p>
      )}

      {/* якщо виникла помилка */}
      {error && <p>{error}</p>}
      <ul className={css.list}>
        {/* Перебираємо масив контактів і рендеримо їх */}
        {filteredContacts.map(({ id, name, phone }) => (
          <li className={css.item} key={id}>
            {/* <GrContactInfo size={20} /> */}
            <p className={css.text}>
              {name}: {phone}
            </p>
            <button
              className={`${css.custom} ${css.btn9}`}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

// =====================================================
// import { useDispatch, useSelector } from 'react-redux';
// import { getContactFilter, getContacts } from 'redux/selectors';
// import { deleteContact } from 'redux/contactsSlice';
// import css from './ContactList.module.css';

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getContactFilter);

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <>
//       <ul className={css.list}>
//         {filteredContacts.map(({ id, name, number }) => {
//           return (
//             <li className={css.item} key={id}>
//               <p className={css.text}>{name}</p>
//               <p className={css.text}>{number}</p>
//               <button
//                 className={`${css.custom} ${css.btn9}`}
//                 type="button"
//                 name="delete"
//                 onClick={() => dispatch(deleteContact(id))}
//               >
//                 Delete
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

export default ContactList;

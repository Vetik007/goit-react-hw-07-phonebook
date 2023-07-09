import { useDispatch, useSelector } from 'react-redux'; // доступ до store

import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';
// import { Input, Label } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch(); // для діспатча екшенів
  const filter = useSelector(selectFilter); // витягуємо зі стору

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.input}
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </div>

    // ========================
    // <Label>
    //   Find contacts by name
    //   <Input
    //     type="text"
    //     value={filter}
    //     onChange={event => dispatch(setFilter(event.target.value.trim()))} // діспатчимо екшен
    //   />
    // </Label>
  );
};

// =====================================================
// import { useDispatch, useSelector } from 'react-redux';
// import { getContactFilter } from 'redux/selectors';
// import { setContactFilter } from 'redux/filterSlice';
// import css from './Filter.module.css';

// const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(getContactFilter);

//   return (
//     <div className={css.wrapper}>
//       <label className={css.label} htmlFor="filter">
//         Find contacts by name
//       </label>
//       <input
//         className={css.input}
//         name="filter"
//         type="text"
//         id="filter"
//         value={filter}
//         onChange={e => dispatch(setContactFilter(e.currentTarget.value))}
//       />
//     </div>
//   );
// };

export default Filter;

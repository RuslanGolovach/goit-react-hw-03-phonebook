import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconDelete } from '../../Icon/minus.svg';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteClick }) => (
  <div className={styles.Thumb}>
    <ul className={styles.List}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.ItemList}>
            <p className={styles.Text}>
              {name}: {number}
            </p>
            <button
              className={styles.DeleteBtn}
              type="button"
              onClick={() => onDeleteClick(id)}
            >
              <IconDelete width="20" height="20" fill="white" />
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactList;

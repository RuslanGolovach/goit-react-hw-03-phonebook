import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, changeFilterInput }) => (
  <label className={styles.LabelFind}>
    <span className={styles.SpanFind}>Find contacts by name</span>
    <input
      className={styles.InputFind}
      type="text"
      name="filter"
      value={value}
      onChange={changeFilterInput}
    />
  </label>
);
export default Filter;

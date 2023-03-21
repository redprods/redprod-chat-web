import React from 'react';
import styles from './Dialog.module.scss';

import {RiSearch2Line} from 'react-icons/ri'

export const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder='Search...' />
     <button>
        <RiSearch2Line/>
      </button>
    </div>
  );
};

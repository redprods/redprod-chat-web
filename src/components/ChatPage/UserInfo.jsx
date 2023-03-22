import Image from 'next/image';
import React from 'react';

import man from 'assets/man.png';

import styles from './ChatPage.module.scss';

export const UserInfo = () => {
  return (
    <div className={styles.chat_info}>
      <div className={styles.user_chat}>
        <Image src={man} alt="Image" />

        <div>
          <h1>Parviz</h1>
          <h3>@s10wn</h3>
        </div>
      </div>
      <div className={styles.user_btn}>info</div>
    </div>
  );
};

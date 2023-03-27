import React from 'react';
import { ChatForm } from './ChatForm';

import styles from './ChatPage.module.scss';

export const Chats = () => {
  const data = [
    {
      fromTo: 'Hello World',
      sendTo: 'Good Morning',
    },
    {
      fromTo: 'Hello World',
      sendTo: 'Good Morning',
    },
    {
      sendTo: 'Good Morning',
    },
    {
      sendTo: 'Good Morning',
    },
    {
      fromTo: 'zxc',
    },
    {
      fromTo: 'efgwe',
    },
  ];

  return (
    <div>
      <ul className={styles.message_main}>
        {data.map((message) => (
          <>
            {/* {message.fromTo } */}

            <div className={styles.messages}>
              {message.fromTo ? (
                <div key={0} className={styles.message}>
                  {message.fromTo}
                </div>
              ) : (
                ''
              )}
            </div>

            {message.sendTo ? (
              <div className={styles.messages}>
                <div key={0} className={styles.message}>
                  {message.fromTo}
                </div>
              </div>
            ) : (
              ''
            )}
          </>
        ))}
      </ul>
      <ChatForm />
    </div>
  );
};

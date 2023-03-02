import React from "react";
import Image from 'next/image'
import styles from './ChatCard.module.scss'
import bubbleLeft from 'assets/Bubble_left.png'
import bubbleRight from 'assets/Bubble_right.png'
import avatar from 'assets/Avatar.png'

export const ChatCard = () => {
  return <div className={styles.chatCard}>
    <Image src={avatar}/>
    <div>
    <Image src={bubbleLeft}/>
    <p>You message here</p>
    </div>
  </div>;
};

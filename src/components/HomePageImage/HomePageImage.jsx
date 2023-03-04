'use client'
import React from "react";
import Image from 'next/image'
import {motion} from 'framer-motion'

import styles from './HomePageImage.module.scss'


import dotstop from 'assets/dotstop.png'
import man from 'assets/man.png'
import woman from 'assets/woman.png'
import dotsmid from 'assets/dotsmid.png'
import message from 'assets/message.png'
import messagetype from 'assets/messagetype.png'
import messagewoman from 'assets/messagewoman.png'

export const HomePageImage = () => {
  return <div className={styles.homePageImage}>
    
    <motion.div
      className={styles.man}
      initial={{ opacity: 0, y: -100 }}
      animate={{ y: 0 , opacity: 1 }}
      transition={{ type: "spring" }}
      >
        <section className={styles.messageTop}>
          <Image src={message} alt="message" />
          <Image src={messagetype} alt="message" className={styles.messageType} />
        </section>
        <motion.div
      initial={{ scale: 0 }}
      animate={{x: 0, y:0 , scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
       <Image
        src={dotstop}
        alt="Picture of the author"

      />
    </motion.div>
       <Image
        src={man}
        alt="Picture of the author"

      />
    </motion.div>
    <motion.div
      className={styles.woman}
      initial={{ opacity: 0, y: 100 }}
      animate={{ y: 0 , opacity: 1 }}
      transition={{ type: "spring" }}
      >
          <section className={styles.messageTop}>
          <Image src={messagewoman} alt="message"/>
        </section>
           <motion.div
      initial={{ scale: 0 }}
      animate={{x: 0, y:0 , scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
       <Image
        src={dotsmid}
        alt="Picture of the author"

      />
    </motion.div>
       <Image
        src={woman}
        alt="Picture of the author"

      />
    </motion.div>
  </div>;
};

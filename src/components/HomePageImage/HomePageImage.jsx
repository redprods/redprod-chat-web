'use client'
import React from "react";
import Image from 'next/image'
import {motion} from 'framer-motion'

import styles from './HomePageImage.module.scss'


import dotstop from 'assets/dotstop.png'
import man from 'assets/man.png'
import woman from 'assets/woman.png'
import dotsmid from 'assets/dotsmid.png'



export const HomePageImage = () => {
  return <div className={styles.homePageImage}>
    
    <motion.div
      className={styles.man}
      initial={{ opacity: 0, y: -100 }}
      animate={{ y: 0 , opacity: 1 }}
      transition={{ type: "spring" }}
      >
        <section>
          
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

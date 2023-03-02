import React from "react";
import Image from 'next/image'
import styles from './HomePageImage.module.scss'


import img from '../../assets/dotsmid.png'
export const HomePageImage = () => {
  return <div className={styles.homePageImage}>
  <Image
        src={img}
        alt="Picture of the author"
      />
  </div>;
};

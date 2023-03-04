"use client"
import React,{useState} from "react";
import Link from 'next/link'
import styles from './HomeText.module.scss'
import cx from 'classnames';

export const HomePageText = () => {
   const [isLogin, setIsLogin] = useState(false) 


   return <div className={cx(styles.homeText, isLogin && styles.logIn)}>
    <h1>Create your <br/> Team chat</h1>
    <p>Fast, easy & unlimited team chat services.</p>
    <div className={styles.buttons}>
      <Link href="/" onClick={() => setIsLogin(!isLogin)}>Login</Link>
      <Link href="/">Register</Link>
   </div>
    </div>
}

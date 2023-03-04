"use client"
import React,{useState} from "react";
import styles from './HomeText.module.scss'
import cx from 'classnames';

import {Login} from 'components/Login'

// className={cx(styles.homeText, isLogin && styles.logIn)}>

export const HomePageText = () => {

   const [isLogin, setIsLogin] = useState(false)

   return <div className={styles.homeText}>
    <h1>Create your <br/> Team chat</h1>
    <p>Fast, easy & unlimited team chat services.</p>
    <div className={styles.buttons}>
      <button onClick={() => setIsLogin(!isLogin)}>Login</button>
      <button>Register</button>
   </div>
   <div className={cx(styles.ModalLogin, isLogin && styles.ModalActive)}>
      <div className={styles.ModalBlock}>
         <Login/>
      </div>
   </div>
    </div> 
}

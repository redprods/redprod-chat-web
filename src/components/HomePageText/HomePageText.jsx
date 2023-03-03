import React from "react";
import Link from 'next/link'
import styles from './HomeText.module.scss'

/*TODO:
1. Class main = hometext
2. Div для button = hometext_button
*/
export const HomePageText = () => {
   return <div className={styles.homeText}>
    <h1>Create your <br/> Team chat</h1>
    <p>Fast, easy & unlimited team chat services.</p>
    <div className={styles.buttons}>
      <Link href="/">Login</Link>
      <Link href="/">Register</Link>
   </div>
    </div>
}

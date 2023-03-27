"use client"
import { Suspense, useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import isAuthenticated from 'hooks/isAuth';
import Loading from './loading';
import { MenuProfile } from 'components/MenuProfile';
import { Dialog } from 'components/Dialog';
import { ChatPage } from 'components/ChatPage';

import styles from './chat.module.scss'

 const Home = () => {
  const router = useRouter();
  useLayoutEffect(() => {
    if (!isAuthenticated()) {
      router.push('/');
      console.log('ss');
    }
    else{
      
    }
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <MenuProfile/>
      <div className={styles.chat_main}>
        <Dialog/>
        <ChatPage/>
      </div>
  </Suspense>
  )
}


export default Home
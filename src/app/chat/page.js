"use client"
import { Suspense, useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import isAuthenticated from 'hooks/isAuth';
import Loading from './loading';

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
      <h1>Hello</h1>
  </Suspense>
  )
}


export default Home
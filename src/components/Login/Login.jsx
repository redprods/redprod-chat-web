'use client';
import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import './Login.scss';
import cx from 'classnames';
import { BsChevronCompactUp } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { toast } from 'react-toastify';
import user from 'assets/user.svg';
import lock from 'assets/lock.svg';
import { Input } from 'components/Input';
import { Player } from '@lottiefiles/react-lottie-player';
import hello from 'assets/87845-hello.json';

export const Login = () => {
  const [text, setText] = useState('Login');
  const [animate, setAnimate] = useState(true);

  setInterval(() => {
    setText('Good');
    setAnimate(true);
  }, 6000);

  const checkText = () => {
    if (text === 'Login') {
      return <BsChevronCompactUp />;
    } else if (text === 'Good') {
      return <AiOutlineCheck />;
    }
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values) => {
          // const account = { username: 's10wn', email: 'check@gmail.com', password: 'qweasdzxc' }
          axios.post('http://127.0.0.1:8000/login', values).then((res) => {
            localStorage.setItem('access_token', res.data.access);
          });
          toast.success('GOOD', {
            position: 'bottom-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }}
      >
        {() => (
          <Form>
            <Input image={user} label={'Username'} types={'username'} />
            <Input image={lock} label={'Password'} types={'password'} />

            <div className="auth_btn">
              <button
                onClick={() => setText('Loading')}
                className={cx(
                  text === 'Loading' && 'btn_active',
                  text === 'Login' && 'btn_normal',
                  text === 'Good' && 'btn_success'
                )}
              >
                <div className={cx('check-icon', { zxc: text === 'Loading' })}>
                  {checkText()}
                </div>
                {text}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Player
        autoplay={() =>
          setInterval(() => {
            animate;
          }, 5000)
        }
        // loop
        keepLastFrame
        src={hello}
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
};

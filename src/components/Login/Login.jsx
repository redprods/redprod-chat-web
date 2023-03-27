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
import axios from 'axios';

export const Login = ({ login }) => {
  const [text, setText] = useState(login ? 'Register' : 'Login');
  const [animate, setAnimate] = useState(true);

  setInterval(() => {
    setAnimate(true);
  }, 6000);

  const checkText = () => {
    if (text === 'Login' || text === 'Register') {
      return <BsChevronCompactUp />;
    } else if (text === 'Good') {
      return <AiOutlineCheck />;
    }
  };
  return (
    <div className="form_main">
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        onSubmit={(values) => {
          axios
            .post(
              `http://localhost/api/auth/${login ? 'register' : 'login'}`,
              values
            )
            .then((res) => {
              setText('Good');
              console.log('good');
              localStorage.setItem('token', res.data.accessToken);
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
            <Input image={user} label={'Username'} types={'login'} />
            <Input image={lock} label={'Password'} types={'password'} />

            <div className="auth_btn">
              <button
                onClick={() => setText('Loading')}
                className={cx(
                  text === 'Loading' && 'btn_active',
                  text === 'Login' && 'btn_normal',
                  text === 'Register' && 'btn_normal',
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

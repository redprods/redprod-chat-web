import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Image from 'next/image';
import man from 'assets/man.png';

import styles from './user.module.scss';

export const UserCard = ({ image, name, message, time, active }) => {
  return (
    <div className={cx(styles.user_card, active && styles.active)}>
      <div className={styles.user}>
        <Image src={man} alt="Image" />

        <div className={styles.user_text}>
          <h3>{name}</h3>
          <h6>{message}</h6>
        </div>
      </div>
      <p>{time}</p>
    </div>
  );
};

UserCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  message: PropTypes.string,
  time: PropTypes.string,
};

import React from 'react';
import styles from './MenuProfile.module.scss';
import Image from 'next/image';

import avatar_profile from 'assets/avatar-profile.png';
import { SlSettings } from 'react-icons/sl';
import { MenuCard } from './MenuCard';
import { BsChat } from 'react-icons/bs';
import { HiOutlineUserPlus, HiOutlineUsers } from 'react-icons/hi2';
import { IoExitOutline } from 'react-icons/io5';

export const MenuProfile = () => {
  return (
    <div className={styles.menuProfile}>
      <div className={styles.Menu_Profile}>
        <div className={styles.Menu_Logo}>
          <Image src={avatar_profile} />
          <div>
            <h2>Parviz Hello</h2>
            <p>@c10wn</p>
          </div>
        </div>
        <div>
          <MenuCard name="Setting" icon={<SlSettings />} />
          <MenuCard name="Chat" icon={<BsChat />} />
          <MenuCard name="Add Friend" icon={<HiOutlineUserPlus />} />
          <MenuCard name="Create Group" icon={<HiOutlineUsers />} />
          <MenuCard name="Log Out" icon={<IoExitOutline />} />
        </div>
      </div>
    </div>
  );
};

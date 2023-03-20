import React from "react";
import styles from './MenuProfile.scss'
import Image from 'next/image'

import avatar_profile from 'assets/avatar-profile.png'
import {SlSettings} from 'react-icons/sl'
import { MenuCard } from "./MenuCard";
import {HiOutlineChatBubbleLeftRight} from 'react-icons/hi'


export const MenuProfile = () => {
  return <div className={styles.menuProfile}>  
    <div className="Menu-Profile">
      <div className="Menu-Logo">
          <Image src={avatar_profile} />
          <h2>Parviz Hello</h2>
          <p>@c10wn</p>
      </div>
      <div>
        <MenuCard name="Setting" icon={<SlSettings/>}/> 
        <MenuCard name="Chat" icon={<HiOutlineChatBubbleLeftRight/>}/> 
        <MenuCard name="Add Friend"/> 
        <MenuCard name="Create Group"/>
        <MenuCard name="Log Out"/> 
      </div>
    </div>
  
  </div>;
};


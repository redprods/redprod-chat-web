import React from 'react';
import { UserCard } from './UserCard';

export const UserList = () => {
  return (
    <div>
      <UserCard name="Parviz" message="Hello! How are you?" time="13:05" />
      <UserCard name="Parviz" message="Hello! How are you?" time="13:05" />
      <UserCard
        name="Maksim"
        message="Hello! How are you?"
        time="13:05"
        active
      />
      <UserCard name="Parviz" message="Hello! How are you?" time="13:05" />
      <UserCard name="Parviz" message="Hello! How are you?" time="13:05" />
    </div>
  );
};

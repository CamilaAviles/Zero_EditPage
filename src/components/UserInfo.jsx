import React from 'react';

const UserInfo = ({ userInfo }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {userInfo.name}</p>
      <p>Last Name: {userInfo.lastName}</p>
      <p>Role: {userInfo.role}</p>
    </div>
  );
};

export default UserInfo;

import React, { useState } from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import EditUserInfo from './components/EditUserInfo';

function App() {
  const inicial = { name: "Luis", lastName: "Gutierrez", role: "teacher" };
  const [userInfo, setUserInfo] = useState(inicial);

  const updateUserInfo = (updatedUserInfo) => {
    setUserInfo(updatedUserInfo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <UserInfo userInfo={userInfo} />
        <EditUserInfo userInfo={userInfo} updateUserInfo={updateUserInfo} />
      </header>
    </div>
  );
}

export default App;


import React from 'react';
import List from './components/List';
import Details from './components/Details';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import useServerApi from './useServerApi';

function App() {
  const [selectedUser, setSelectedUser] = useState([]);

  const { REACT_APP_USERLIST_URL } = process.env;

  const [{data, isLoading}] = useServerApi(
    `${REACT_APP_USERLIST_URL}/users.json`,
    []
  );

  const handleClick = (obj) => {
    setSelectedUser(obj);
  }

  return (
    <div className="app_container">
      {(isLoading) ? <div className='loading'>{'Loading...'}</div>
      : <>
      <List data={data} onClick={handleClick} selectedUser={selectedUser}/>
      <Details info={selectedUser} />
      </>}
    </div>
  );
}

export default App;

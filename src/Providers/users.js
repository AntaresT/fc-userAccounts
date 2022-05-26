import React, { useState, useEffect } from 'react'

import api from '../Services/api'

export const UserContext = React.createContext({});

export const UserProvider = (props) => {
  const [ users, setUsers ] = useState([]);

  useEffect( () => {
    getUserList()
  }, []);

  async function getUserList () {
    await api.getUsers()
    .then((res) => {
      setUsers(res.data['hydra:member'])
    },
    (err) => {
      console.log(err)
    })
  }

  return (
    <UserContext.Provider value={users}>
      {props.children}
    </UserContext.Provider>
  )

}

export const useProviderUser = () => React.useContext(UserProvider);

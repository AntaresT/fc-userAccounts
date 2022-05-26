import React, { useState, useEffect } from 'react'

import { UserContext } from '../../Providers/users'
import UserList from '../../Components/userList';

function List() {
  const [ users, setUsers ] = useState([]);

  const contextUser = React.useContext(UserContext)

  useEffect(() => { setContextUser() });

  async function setContextUser () { 
    await setUsers(contextUser)
  }

  return(
    <div>
      <h2>Accounts</h2>
      <div>
        {
          users? (
            <>
              <UserList userList={users} />
            </>
          ) :
          (
            <div>
              <h3>vazio</h3>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default List;

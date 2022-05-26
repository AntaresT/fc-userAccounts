import React, {useEffect, useState} from 'react'

import { Container } from './styles'

function UserList (users) {

  const [ userList, setUserList ] = useState([]);

  useEffect(() => {
    setUserList(users.userList)
  }, [users])

  console.log(userList)

  return(
    <div>
      <span>Lista de user</span>
      <Container show={userList[0]? true : false}>
        {
          userList? (
            userList.map((item, index) => (
              <div key={index}>
                <span>{item.name}</span>
              </div>
            ))
          )
          :
          (<div></div>)
        }
      </Container>
    </div>
  )
}

export default UserList;

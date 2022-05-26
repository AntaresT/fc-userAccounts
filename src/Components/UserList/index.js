import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

import { Button, CellContent, Span } from './styles'

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';

function UserList (item) {
  const [ userList, setUserList ] = useState({});

  const navigate = useNavigate();
  
  useEffect(() => {
    setUserList(item.singleUser)
  }, [item])

  function handleSelectedUser() {
    navigate('/user')
  }

  return(
    <TableRow hover key={userList.name}>
      <TableCell onClick={handleSelectedUser}>
        <CellContent>
          <Span>{userList.name}</Span>
          <Button>
            <DeleteIcon />
          </Button>
        </CellContent>
      </TableCell>
    </TableRow>
  )
}

export default UserList;

import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

import { Button, CellContent, Span } from './styles'
import DeleteDialog from '../DeleteDialog';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';

function UserList (item) {
  const [ userList, setUserList ] = useState({});
  const [ open, setOpen ] = useState(false);
  const [ userId, setUserId ] = useState();

  const navigate = useNavigate();
  
  useEffect(() => {
    setUserList(item.singleUser)
  }, [item])

  function handleSelectedUser() {
    navigate(`/user/${userList.id}`)
  }

  function handleClickDelete (id) {
    console.log('delete')
    setUserId(userList.id)
    setOpen(true)
  }

  function handleClose () {
    setOpen(false)
  }

  return(
    <>
    <TableRow hover key={userList.name}>
      <TableCell>
        <CellContent>
          <Span onClick={handleSelectedUser}>{userList.name}</Span>
          <Button type="button" onClick={handleClickDelete}>
            <DeleteIcon />
          </Button>
        </CellContent>
      </TableCell>
    </TableRow>
    <DeleteDialog
      open={open}
      onClose={handleClose}
      userId={userId}
    />
    </>
  )
}

export default UserList;

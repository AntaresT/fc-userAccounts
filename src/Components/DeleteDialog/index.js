import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../Services/api'

import { Button } from './styles'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function DeleteDialog(props) {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { onClose, open, userId } = props;

  const navigate = useNavigate();

  function handleClickDelete () {
    api.deleteUser(userId)
    .then((res) => {
      navigate('/')
      window.location.reload(true);
      onClose()
    },
    (err) => {
      console.log(err)
    })
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Do you agree to Delete this user?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          The user ID is {userId}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Disagree
        </Button>
        <Button customColor="#ff7675" onClick={handleClickDelete} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog; 

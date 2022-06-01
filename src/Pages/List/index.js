import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../Providers/users'
import SingleUser from '../../Components/SingleUser';

import { Table, TableContainer, BtnContainer, Button } from './styles'

import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

function List() {
  const [ users, setUsers ] = useState([]);
  const [ page, setPage ] = useState(0);
  const [ loading, setLoading ] = useState(false)

  const navigate = useNavigate();

  const contextUser = React.useContext(UserContext);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => { 
    setContextUser()
    if(!loading){
      isLoading()
    }
  });

  async function setContextUser() { 
    await setUsers(contextUser)
  }

  function isLoading () {
    if (users[0]){
      return setLoading(!loading)
    }
  }

  function handleNewUser() {
    navigate('/user')
  }

  return(
    <div>
      <h2>Accounts</h2>
      <BtnContainer>
        <Button variant="outlined" onClick={handleNewUser}>New User</Button>
      </BtnContainer>
      {
        loading? 
          <TableContainer>
            <Table>
              <TableBody>           
                { 
                (
                  users?
                    users.slice(page * 5, page * 5 + 5)
                    : users
                  ).map((item, index) => (
                    <SingleUser key={index} singleUser={item} />
                  )
                )
                }
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5]}
                    colSpan={3}
                    count={users.length}
                    rowsPerPage={5}
                    page={page}
                    onPageChange={handleChangePage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
          :
          <CircularProgress/>
      }
    </div>
  )
}

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default List;

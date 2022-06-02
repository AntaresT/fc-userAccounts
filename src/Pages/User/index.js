import React, { useEffect, useState } from 'react'
import { useFormik, FieldArray, FormikProvider } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

import api from '../../Services/api'
import { BankContext } from '../../Providers/banks'
import SnackbarSucces from '../../Components/SnackBar';

import { Container, FieldSlot, Actions, Form, FormContainer,
  Button, NestedContainer, UserContainer, NestedFields,
  ButtonRemove, ArraySlot, AgencyFields, AccountFields,
  ButtonBankAccount, FormHeader, ButtonReturn } from './styles'

import { TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import * as Yup from 'yup';

function User () {
  
  const [ name, setName ] = useState('');
  const [ cpf, setCpf ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ bankAccountsValues, setBankAccounts ] = useState([]);
  const [ loadedValues, setLoadedValues ] = useState(null);
  const [ bankList, setBankList ] = useState();
  const [ isEdit, setIsEdit ] = useState(false);
  const [ open, setOpen ] = useState(false);
  const [ message, setMessage ] = useState('')


  const navigate = useNavigate();

  const contextBank = React.useContext(BankContext);

  const { id } = useParams();

  const validationSchema = Yup.object({
    name: Yup
      .string("Enter your name")
      .required("Name is required"),
    cpf: Yup
      .string("Enter your CPF")
      .max(11, "CPF should be of minimum 11 characters length")
      .required("CPF is required"),
    email: Yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required")
  });
  
  useEffect(() => {
    if(id && loadedValues === null){
      setUserEdit(id)
    }
    if(loadedValues !== [] && loadedValues !== null){
      setFormValues()
    }
    setContextBank()
  });

  const bankAccountForm = {
    user: '',
    bank:  '',
    agency: '',
    agencyDigit: '',
    accountNumber: '',
    accountName: '',
    accountType: '',
    accountDigit: ''
  }

  const initialValues = {
    name: name,
    cpf: cpf,
    email: email,
    bankAccounts: bankAccountsValues
   }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: values => {
            
      if(!id){
        postNewUser(values)
      }

      if(id && isEdit){
        values.id = loadedValues.id
        updateUser(values)
      }
      
      return new Promise(res => setTimeout(res, 1000))
    }

  });

  async function setContextBank() { 
    await setBankList(contextBank)
  }

  async function setUserEdit(id) { 
    if(id){
      setIsEdit(true)
      try{
        const res = await api.getUserId(id)
        setLoadedValues(res.data)
      } catch(err) {
        console.log(err)
      }
    }
  }
  
  function postNewUser(item) {
    // api.postBankAccount(item.bankAccounts)
    // .then((res) => {
    //   console.log(res ,'post new bank')
    // },
    // (err) => {
    //   console.log(err)
    // })

    api.postUser(item)
    .then((res) => {
      setOpen(true)
      setMessage('New user created')
    },
    (err) => {
      console.log(err)
    })
  }

  function updateUser(item) {
    api.putUser(item)
    .then((res) => {
      setOpen(true)
      setMessage('User updated')
    },
    (err) => {
      console.log(err)
    })
  }

  function setFormValues() {
    setName(loadedValues.name)
    setCpf(loadedValues.cpf)
    setEmail(loadedValues.email)
    
    // api.getUserBanks(loadedValues.id)
    // .then((res) => {
    //   const userBanks = res.data['hydra:member']
    //   console.log(userBanks ,'response user banks')
    // },
    // (err) => {
    //   console.log(err)
    // })
  
  }

  function handleReturn() {
    navigate('/')
    window.location.reload(true);
  }

  function handleClose () {
    setOpen(false)
  }

  return (
    <Container>
      <FormHeader>
        <ButtonReturn variant="outlined" type="button" onClick={handleReturn}>
          <ArrowBackIcon />
        </ButtonReturn>
        <h2> {isEdit? 'Edit User' : 'New User' }</h2>
      </FormHeader>

      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <FormContainer>
            <UserContainer>
              <FieldSlot>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </FieldSlot>
              <FieldSlot>
                <TextField
                  fullWidth
                  id="cpf"
                  name="cpf"
                  label="CPF"
                  type="text"
                  value={formik.values.cpf}
                  onChange={formik.handleChange}
                  error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                  helperText={formik.touched.cpf && formik.errors.cpf}
                />
              </FieldSlot>
              <FieldSlot>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </FieldSlot>
            </UserContainer>
            <NestedContainer>
              <FieldArray
                name="bankAccounts"
                render={(arrayHelpers) => (
                  <>
                  <ArraySlot>
                    {formik.values.bankAccounts.map((item, index) => (
                      <NestedFields key={index}>
                        <FieldSlot customWidth='300px'>
                          <TextField
                            fullWidth
                            select
                            id="bank"
                            name={`bankAccounts[${index}].bank`}
                            value={formik.values.bankAccounts[index].bank}
                            label="Bank"
                            onChange={formik.handleChange}
                          >
                            {bankList.map((bank, index) => (
                              <MenuItem key={index} value={bank}>
                                <span>{bank.name}</span>
                              </MenuItem>
                            ))}
                          </TextField>
                        </FieldSlot>
                        <FieldSlot >
                          <TextField
                            fullWidth
                            id="accountName"
                            name={`bankAccounts[${index}].accountName`}
                            label="Account Name"
                            type="text"
                            value={formik.values.bankAccounts[index].accountName}
                            onChange={formik.handleChange}
                            error={formik.touched.accountName && Boolean(formik.errors.accountName)}
                            helperText={formik.touched.accountName && formik.errors.accountName}
                          />
                        </FieldSlot>
                        <AgencyFields>
                          <FieldSlot customWidth='200px'>
                            <TextField
                              fullWidth
                              id="agency"
                              name={`bankAccounts[${index}].agency`}
                              label="Agency"
                              type="text"
                              value={formik.values.bankAccounts[index].agency}
                              onChange={formik.handleChange}
                              error={formik.touched.agency && Boolean(formik.errors.agency)}
                              helperText={formik.touched.agency && formik.errors.agency}
                            />
                          </FieldSlot>
                          <FieldSlot customWidth='150px'>
                            <TextField
                              fullWidth
                              id="agencyDigit"
                              name={`bankAccounts[${index}].agencyDigit`}
                              label="Agency Digit"
                              type="text"
                              value={formik.values.bankAccounts[index].agencyDigit}
                              onChange={formik.handleChange}
                              error={formik.touched.agencyDigit && Boolean(formik.errors.agencyDigit)}
                              helperText={formik.touched.agencyDigit && formik.errors.agencyDigit}
                            />
                          </FieldSlot>
                        </AgencyFields>
                        <FieldSlot customWidth='200px'>
                          <TextField
                            fullWidth
                            id="accountType"
                            name={`bankAccounts[${index}].accountType`}
                            label="Account Type"
                            type="text"
                            value={formik.values.bankAccounts[index].accountType}
                            onChange={formik.handleChange}
                            error={formik.touched.accountType && Boolean(formik.errors.accountType)}
                            helperText={formik.touched.accountType && formik.errors.accountType}
                          />
                        </FieldSlot>
                        <AccountFields>
                          <FieldSlot customWidth='200px'>
                            <TextField
                              fullWidth
                              id="accountNumber"
                              name={`bankAccounts[${index}].accountNumber`}
                              label="Account Number"
                              type="text"
                              value={formik.values.bankAccounts[index].accountNumber}
                              onChange={formik.handleChange}
                              error={formik.touched.accountNumber && Boolean(formik.errors.accountNumber)}
                              helperText={formik.touched.accountNumber && formik.errors.accountNumber}
                            />
                          </FieldSlot>
                          <FieldSlot customWidth='150px'>
                            <TextField
                              fullWidth
                              id="accountDigit"
                              name={`bankAccounts[${index}].accountDigit`}
                              label="Account Digit"
                              type="text"
                              value={formik.values.bankAccounts[index].accountDigit}
                              onChange={formik.handleChange}
                              error={formik.touched.accountDigit && Boolean(formik.errors.accountDigit)}
                              helperText={formik.touched.accountDigit && formik.errors.accountDigit}
                            />
                          </FieldSlot>
                        </AccountFields>
                        <ButtonRemove type='button' onClick={() => arrayHelpers.remove(index)}>
                          <DeleteIcon fontSize="medium" />
                        </ButtonRemove>
                      </NestedFields>
                    ))}
                  </ArraySlot>
                  <ButtonBankAccount type='button' onClick={() => arrayHelpers.push(bankAccountForm)}>
                    New Bank Account
                  </ButtonBankAccount>
                </>
                )}
              />
            </NestedContainer>
          </FormContainer>

          <Actions>
            <Button disabled={formik.isSubmitting} type="submit" endIcon={<SendIcon />}> 
              {!formik.isSubmitting? 'Submit' : <CircularProgress/>} 
            </Button>
          </Actions>

        </Form>
      </FormikProvider>
      <SnackbarSucces 
        open={open}
        onClose={handleClose}
        message={message}
      />
    </Container>
  )
}

export default User;

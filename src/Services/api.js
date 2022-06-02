import axios from 'axios'

const bankApi = axios.create({
  baseURL: process.env.REACT_APP_API_URI
})

const api = {
  //Bank
  getBanks: () => bankApi.get('/banks'),
  getBankId: (data) => bankApi.get(`/banks/${data}`),

  //User
  getUsers: () => bankApi.get('/users'),
  getUserId: (data) => bankApi.get(`/users/${data}`),
  getUserBanks: (data) => bankApi.get(`/users/${data}/bank_accounts`), 
  postUser: (data) => bankApi.post('/users', data),
  putUser: (data) => bankApi.put(`/users/${data.id}`, data),
  deleteUser: (data) => bankApi.delete(`/users/${data}`),

  //BankAccount
  getBankAccounts: () => bankApi.get('/bank_accounts'),
  getBankAccountsId: (data) => bankApi.get(`/bank_accounts/${data}`),
  postBankAccount: (data) => bankApi.post(`/bank_accounts`, data),
  putBankAccount: (data) => bankApi.put(`/bank_accounts/${data}`),
  deleteBankAccount: (data) => bankApi.put(`/bank_accounts/${data}`)

}

export default api;

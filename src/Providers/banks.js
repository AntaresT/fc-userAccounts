import React, { useState, useEffect } from 'react'

import api from '../Services/api'

export const BankContext = React.createContext({});

export const BankProvider = (props) => {
  const [ banks, setBanks ] = useState([]);

  useEffect( () => {
    getBankList()
  }, []);

  async function getBankList () {
    await api.getBanks()
    .then((res) => {
      setBanks(res.data['hydra:member'])
    },
    (err) => {
      console.log(err)
    })
  }

  return (
    <BankContext.Provider value={banks}>
      {props.children}
    </BankContext.Provider>
  )

}

export const useProviderBank = () => React.useContext(BankProvider);

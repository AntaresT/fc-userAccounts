import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media (min-width: 320px) and (max-width: 720px){
    padding: 20px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FieldSlot = styled.div`
  text-align: left;
  margin-right: 10px;
  padding-top: 10px;
  width: ${props => props.customWidth ? props.customWidth : '400px'};

  @media (min-width: 320px) and (max-width: 720px){
    width: auto;
  }
`

export const ArraySlot = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 650px;

  @media (min-width: 320px) and (max-width: 720px){
    height: auto;
    overflow-y: inherit;
  }
`

export const Actions = styled.div`
  margin-top: 20px;
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 320px) and (max-width: 720px){
    flex-direction: column;
  }
`

export const Button = styled.button`
  background-color: unset;
  border: 0.7px solid #55efc4;
  border-radius: 4px;
  color: black;
  cursor: pointer;
  padding: 15px 20px;
  text-decoration: none;
  font-size: 18px;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: #00b894;
    color: black;  
    transform: scale(1.1);
  }
`

export const NestedContainer = styled.div`
  display: flex;

  @media (min-width: 320px) and (max-width: 720px){
    align-items: center;
    flex-direction: column-reverse;
  }

`
export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  @media (min-width: 320px) and (max-width: 720px){
    margin: 0;
  }
`

export const Select = styled.select`
  margin-right: 20px;
  width: 100%;
`

export const NestedFields = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 720px){
    margin-top: 10px;
  }
`

export const ButtonRemove = styled.button`
  align-self: center;
  background-color: unset;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 15px 20px;
  margin-top: 8px;
  text-decoration: none;
  font-size: 18px;
  transition: all .2s ease-in-out;
  width: 50%;

  &:hover {
    background-color: #ff7675;
    transform: scale(0.9);
  }

  @media (min-width: 320px) and (max-width: 720px){
    &:hover {
      background-color: #ff7675;
      transform: scale(0.8);
    }
  }
`

export const ButtonBankAccount = styled.button`
  background-color: unset;
  border: 0.7px solid black;
  border-radius: 4px;
  color: 74b9ff;
  cursor: pointer;
  margin-top: 10px;
  text-decoration: none;
  font-size: 16px;
  transition: all .2s ease-in-out;
  height: 54px;
  width: 220px;

  &:hover {
    background-color: #74b9ff;
    transform: scale(1.1);
  }

  @media (min-width: 320px) and (max-width: 720px){
  }

`

export const ButtonReturn = styled.button`
  background-color: unset;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 20px;
  padding: 5px;
  text-decoration: none;
  font-size: 16px;
  transition: all .2s ease-in-out;
  height: 35px;
  width: 35px;


  &:hover {
    background-color: #74b9ff;
    transform: scale(1.1);
  }

  @media (min-width: 320px) and (max-width: 720px){
  }

`

export const AgencyFields = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AccountFields = styled.div`
  display: flex;
  justify-content: space-between;

`

export const FormHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`

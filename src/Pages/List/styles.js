import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Table = styled.table`
  width: 600px;
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 85%;
`

export const Button = styled.button`
  background-color: unset;
  border: 0.5px solid grey;
  border-radius: 4px;
  cursor: pointer;
  padding: 15px 20px;
  text-decoration: none;
  text-size: 24px;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: #bdc3c7;
    transform: scale(1.1);
  }
`

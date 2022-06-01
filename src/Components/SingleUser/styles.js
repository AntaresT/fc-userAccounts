import styled from "styled-components";

export const CellContent = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const Button = styled.button`
  border: none;
  background-color: unset;
  cursor: pointer;
  text-decoration: none;
  transition: all .2s ease-in-out;
  height: 35px;
  width: 35px;


  &:hover {
    transform: scale(1.2);
  }
`

export const Span = styled.span`
  align-self: center;
  width: 100%;
`

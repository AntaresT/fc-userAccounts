import styled from 'styled-components'

export const Button = styled.button`
  background-color: unset;
  border: 0.5px solid grey;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 10px;
  text-decoration: none;
  text-size: 24px;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: ${props => props.customColor? props.customColor : '#bdc3c7'};
    transform: scale(1.1);
  }
`

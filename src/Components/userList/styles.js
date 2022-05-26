import styled from "styled-components";

export const Container = styled.div`
  display: ${props => props.show? 'flex' : 'none'};
  flex-direction: column;
  height: 600px;
`
import styled from "styled-components";


export const Listmenu = styled.li`
  list-style: none; 
  padding: 1%; 
  @media (max-width: 500px) {
    padding: 2%;  
  }

`

export const DivMenu = styled.div`
  display: flex; 
  justify-content: flex-end;
  @media (max-width: 500px) {
    justify-content: center; 
  }

  `

export const SpanMenu = styled.span`
  text-transform: uppercase; 
  font-size: 16px; 
  cursor: pointer; 
  font-weight: 300; 
  &: hover{
    color: #00B8E0;
  }
`
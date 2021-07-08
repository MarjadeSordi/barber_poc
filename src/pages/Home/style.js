import styled from "styled-components";


export const CoverPoc = styled.div`
  height: 100vh;
  display: flex; 
  align-items: center;
  justify-content: center; 
`

export const ImgLogo = styled.img`
  width: 60%; 
  @media (max-width: 500px){
    width: 80%;
  }
   `

export const CoverAgendamento = styled.div`
 
  position: absolute; 
  padding: 5%; 
  width: 10%; 
  top: 50%;
  left: 30%; 
  display: flex; 
  @media (max-width: 500px) {
  left: 10%;
  width: 30%;
}
`

export const ButtonAgendamento = styled.button`
padding:5%;
border-radius: 8px; 
border-color: #D929AB;
width: 70%;
color: #fff;
margin-left: 40%;
cursor: pointer; 
box-shadow: 0 0 40px 40px #D929AB inset, 0 0 0 0 #D929AB;
transition: all 150ms ease-in-out;
 &: hover {
  box-shadow: 0 0 10px 0 #D929AB inset, 0 0 10px 4px #D929AB;
  color:#D929AB;
 }
 @media (max-width: 500px) {
  width: 70%;
  margin-left: 0;

`

export const WhatsAppButton = styled.button`
left: 90%;
top: 90vh;
position: fixed;
border-radius: 100%;
border: none;
cursor: pointer; 
background-color: transparent;
@media (max-width: 700px) {
  top: 70vh;
  left: 80%;
  position: fixed;

}`

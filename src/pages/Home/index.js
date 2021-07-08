import React from 'react';
import { CoverPoc, ImgLogo, CoverAgendamento, ButtonAgendamento, WhatsAppButton } from './style';
import logomaior from '../../assets/logotipo/logomaior.jpg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import AboutCarlos from '../../about/index';


function Onclick(){
  window.open('https://calendly.com/barberpoc/', '_blank')

}

function OnclickZap(){
  window.open('https://api.whatsapp.com/send?phone=555192999131&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.%20', '_blank')
}

const Home = () => {
  return(
    <>
  <CoverPoc> 
    <ImgLogo src={logomaior} alt='Logotipo escrito BarberPOC' /> 
    <CoverAgendamento>
      <ButtonAgendamento onClick={Onclick}> Agendar </ButtonAgendamento>
      <WhatsAppButton onClick={OnclickZap}> <AiOutlineWhatsApp size={'50'} color={'#3DD485'}/> </WhatsAppButton>
    </CoverAgendamento>
  </CoverPoc>
  <AboutCarlos /> 
  
  </>)

}


export default Home; 
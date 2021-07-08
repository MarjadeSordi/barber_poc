import React from 'react';
import { CoverPoc, ImgLogo, CoverAgendamento, ButtonAgendamento, WhatsAppButton } from './style';
import logomaior from '../../assets/logotipo/logomaior.jpg'
import {AiOutlineWhatsApp} from 'react-icons/ai'

function Onclick(){
  window.open('https://calendly.com/barberpoc/', '_blank')

}

function OnclickZap(){
  window.open('https://whats.link/barberpoc', '_blank')
}

const Home = () => {
  return(
  <CoverPoc> 
    <ImgLogo src={logomaior} alt='Logotipo escrito BarberPOC' /> 
    <CoverAgendamento>
      <ButtonAgendamento onClick={Onclick}> Agendar </ButtonAgendamento>
      <WhatsAppButton Onclick={OnclickZap}> <AiOutlineWhatsApp size={'50'} color={'#3DD485'}/> </WhatsAppButton>
    </CoverAgendamento>
  </CoverPoc>)

}


export default Home; 
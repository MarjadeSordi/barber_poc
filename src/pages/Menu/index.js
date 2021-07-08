import React from 'react';
import { Listmenu, DivMenu, SpanMenu } from './style';
import { datamenu } from './data';

const Menuweb = () => {
  return(
    <DivMenu>
    {datamenu.map((ancoras, key) => 
    <Listmenu key={key}> 
      <SpanMenu> {ancoras.title} </SpanMenu> 
    </Listmenu>
 )}
 </DivMenu>)
}



export default Menuweb; 
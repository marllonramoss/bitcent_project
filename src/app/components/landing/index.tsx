import React from 'react'
import Cabecalho from './cabecalho'
import Depoimentos from './depoimentos'
import Destaque from './destaque'
import Rodape from './rodape'
import Vantagens from './vantagens'
import Pagina from '../template/Pagina'

const Landing = () => {
  return (
    <Pagina>
      <Cabecalho/>
      <Destaque/>
      <Vantagens/>
      <Depoimentos/>
      <Rodape/>
    </Pagina>
  )
}

export default Landing

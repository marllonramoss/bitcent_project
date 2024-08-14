import React from 'react'
import Area from '../comum/Area'
import Vantagem from './Vantagem'
import vantagem1 from '../../../../../public/vantagem-1.jpg'
import vantagem2 from '../../../../../public/vantagem-2.jpg'
import vantagem3 from '../../../../../public/vantagem-3.jpg'

const Vantagens = () => {
  return (
    <Area id='vantagens' className='bg-black py-16 sm:py-36'>
      <div className='flex flex-col items-center gap-y-16 sm:gap-y-36'>
      <Vantagem 
        imagem={vantagem1} 
        titulo='Gerenciador financeiro completo e simples de usar'
        subtitulo='Aqui voce consegue ter controle completo de suas financas e uma visualizacao facil de entender. O caminho da economia comeca aqui!'
        ></Vantagem>

      <Vantagem 
        imagem={vantagem2} 
        titulo='Organizado para voce nunca mais esquecer uma conta'
        subtitulo='Visualize e acompanhe as suas financas dia a dia. A organizacao mensal vai te ajudar a ter um controle claro das receitas e despesas!'
        inverter
        ></Vantagem>

      <Vantagem 
        imagem={vantagem3} 
        titulo='Ideal para planejamento financeiro'
        subtitulo='Nosso principio numero 1 e ser uma plataforma que torne o controle financeiro simples.'
        ></Vantagem>
      </div>
    </Area>
  )
}

export default Vantagens

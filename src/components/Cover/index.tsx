import React from 'react'

import Inserter from '../Inserter'

import ETH from './img/ETH.svg'
import ETH_graph from './img/ETH_graph.svg'
import KAI from './img/KAI.svg'
import KAI_graph from './img/KAI_graph.svg'


const Cover: React.FC = () => {
  return <Inserter div_id='graph'>
    <div className='Cover'>
      <div className='Cover__line' />
      <div className='Cover__line' />
      <div className='Cover__line' />
      <img
        src={ETH}
        className='Cover__logo Cover__logo--ETH'
      />
      <img
        src={ETH_graph}
        className='Cover__graph'
      />
      <img
        src={KAI}
        className='Cover__logo Cover__logo--KAI'
      />
      <img
        src={KAI_graph}
        className='Cover__graph'
      />
    </div>
  </Inserter>
}


export default Cover

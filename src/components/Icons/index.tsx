import React from 'react'

import Inserter from '../Inserter'

import aim from './1/Aim.svg'
import sphere from './1/Sphere.svg'

import line from './2/Line.svg'
import tails from './2/Tails.svg'

import curve from './3/Curve.svg'
import lines from './3/Lines.svg'


const Icons: React.FC = () => {
  const Icon1 = () =>
    <div className='Icon'>
      <img
        src={aim}
        className='Icon__img Icon__img--aim'
      />
      <img
        src={sphere}
        className='Icon__img Icon__img--sphere Icon__img--sphere--1'
      />
      <img
        src={sphere}
        className='Icon__img Icon__img--sphere Icon__img--sphere--2'
      />
      <img
        src={sphere}
        className='Icon__img Icon__img--sphere Icon__img--sphere--3'
      />
    </div>

  const Icon2 = () =>
    <div className='Icon'>
      <img
        src={line}
        className='Icon__img Icon__img--line'
      />
      <img
        src={tails}
        className='Icon__img Icon__img--tails'
      />
    </div>

  const Icon3 = () =>
    <div className='Icon'>
      <img
        src={lines}
        className='Icon__img Icon__img--lines'
      />
      <img
        src={curve}
        className='Icon__img Icon__img--curve'
      />
    </div>

  return (
    <>
      <Inserter div_id='icon1'>
        <Icon1 />
      </Inserter>
      <Inserter div_id='icon2'>
        <Icon2 />
      </Inserter>
      <Inserter div_id='icon3'>
        <Icon3 />
      </Inserter>
    </>
  )
}


export default Icons

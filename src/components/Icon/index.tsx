import React from 'react'

import aim from './1/Aim.svg'
import sphere from './1/Sphere.svg'

import line from './2/Line.svg'
import tails from './2/Tails.svg'

import curve from './3/Curve.svg'
import lines from './3/Lines.svg'

const Icon: React.FC = () => {

  return (
    <div className='flex flex-row w-100 ms-2'>
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
    </div>
  )
}


export default Icon

import React from 'react'
import { createPortal } from 'react-dom'

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

  const [icon1_div, set_icon1_div] = React.useState<any>(null)
  const [icon2_div, set_icon2_div] = React.useState<any>(null)
  const [icon3_div, set_icon3_div] = React.useState<any>(null)

  React.useEffect(() => {
    set_icon1_div(document.getElementById('icon1'))
    set_icon2_div(document.getElementById('icon2'))
    set_icon3_div(document.getElementById('icon3'))
  }, [set_icon1_div, set_icon2_div, set_icon3_div])

  return (
    <>
      {icon1_div && createPortal(<Icon1 />, icon1_div)}
      {icon2_div && createPortal(<Icon2 />, icon2_div)}
      {icon3_div && createPortal(<Icon3 />, icon3_div)}
    </>
  )
}


export default Icons

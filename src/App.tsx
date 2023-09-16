import React from 'react'

import './styles/index.sass'

import Icons from './components/Icons'
import Cover from './components/Cover'


const App: React.FC = () => {
  return (
    <div className='App'>
      <Cover />
      <Icons />
    </div>
  )
}


export default App

import React from 'react'

import './styles/index.sass'

import Icons from './components/Icons'
import Cover from './components/Cover'


const App: React.FC = () => {
  return (
    <div className='App'>
      <Icons />
      <Cover />
    </div>
  )
}


export default App

import React from 'react'
import { createPortal } from 'react-dom'


export type InserterProps = {
  div_id: string
  children: React.ReactNode
}


const Inserter: React.FC<InserterProps> = ({
  div_id,
  children
}) => {
  const [div, set_div] = React.useState<any>(null)

  React.useEffect(() => {
    set_div(document.getElementById(div_id))
  }, [set_div])

  return div ?
    createPortal(children, div)
    :
    <div />
}


export default Inserter

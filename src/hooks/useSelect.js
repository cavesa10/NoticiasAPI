import React, {useState} from 'react'

export const useSelect = (stateInicial, opciones) => {
  // state del custom hook
  const [state, setState] = useState('')

  const SelectNoticias = () => (
    <select className="browser-default" name="" id="">
      <option value="">Seleccione</option>
    </select>
  )

  return [state, SelectNoticias]
}

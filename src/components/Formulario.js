import React from 'react'
import styles from './Formulario.module.css'
import {useSelect} from '../hooks/useSelect'

export const Formulario = () => {

  // utilizar custom hook
  const [categoria, SelecNoticias] = useSelect()

  return (
    <div className={`${styles.buscador} row`} >
      <div className="col s12 m8 offset-m2">
        <h2 className={styles.heading} >Encuentra Noticias por Categorías</h2>
        <SelecNoticias />
        <div className="input-field col s12">
          <input 
            type="submit" 
            className={`${styles.btn_block} btn-large amber darken-2`} 
            value="Buscar"    
          />
        </div>
      </div>
    </div>
  )
}

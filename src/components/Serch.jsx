import React from 'react'

const Serch = () => {
  return (
    <form className=' my-5'>
        <p>Nombre</p>
        <input type="text" name="Nombre" id="" />
        <p>Numero</p>
        <input type="number" name="Numero" id="" />
        <p>Tipo</p>
        <input type="text" name="Tipo" id="" />
        <button type="submit">Buscar</button>
    </form>
  )
}

export default Serch
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUnaReceta } from '../../../public/asyncmock'
import RecetasDetalle from '../RecetasDetalle/RecetasDetalle'
import ContenedorFiltro from '../ContenedorFiltro/ContenedorFiltro'
import './RecetasDetalleContenedor.css'


const RecetasDetalleContenedor = () => {
  const [unaReceta, setUnaReceta] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getUnaReceta(id)
      .then(res => setUnaReceta(res))

  }, [id])
  return (
    <div className='recetaDetalleContenedor'>
      <ContenedorFiltro />
      <div className='recetaDetalle'>
        <RecetasDetalle {...unaReceta} />
      </div>
    </div>
  )
}

export default RecetasDetalleContenedor
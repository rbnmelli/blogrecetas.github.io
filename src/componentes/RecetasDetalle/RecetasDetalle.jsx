import React from 'react'
import './RecetasDetalle.css'

const RecetasDetalle = ({ id, categoria, titulo, descripcion, imagen }) => {
    return (
        <div className='recetaContemedor'>
            <h3>{categoria}</h3>
            <h2>{titulo}</h2>
            <img className='imgReceta' src={imagen} alt={imagen} />
            <p>{descripcion}</p>
        </div>
    )
}

export default RecetasDetalle
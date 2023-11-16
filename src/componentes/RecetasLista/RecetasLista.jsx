import React from 'react'
import Recetas from '../Recetas/Recetas'
import './RecetasLista.css';

const RecetasLista = ({ recetas }) => {
    return (
        <div className='contenedorRecetas'>
            {
                recetas.map(recetas => <Recetas key={recetas.id}{...recetas} />)
            }
        </div>
    )
}

export default RecetasLista
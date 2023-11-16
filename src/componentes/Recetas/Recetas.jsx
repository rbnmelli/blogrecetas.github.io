import React from 'react'
import './Recetas.css';
import { Link } from 'react-router-dom';


const Recetas = ({ id, categoria, titulo, descripcion, imagen }) => {
    return (
        <div className='cardRecetas'>
            <img className='imgReceta' src={imagen} alt={imagen} />
            <h3>{categoria}</h3>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <Link to={`/id/${id}`}>Ver detalles</Link>
        </div>
    )
}

export default Recetas
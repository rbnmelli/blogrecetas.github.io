import React from 'react'
import { useState, useEffect } from 'react'
import RecetasLista from '../RecetasLista/RecetasLista'
import { getRecetas, getRecetasPorCategoria } from '../../../public/asyncmock'
import { useParams } from 'react-router-dom'
import './RecetasListaContenedor.css'
import ContenedorFiltro from '../ContenedorFiltro/ContenedorFiltro'



const RecetasListaContenedor = () => {
    const [recetas, setRecetas] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        const listRecetas = categoria ? getRecetasPorCategoria : getRecetas;

        listRecetas(categoria)
            .then(respuesta => setRecetas(respuesta))
            .catch(error => console.log(error))
    }, [categoria])

    return (
        <>
            <h3>Resultado</h3>
            <div className='containerRecetas'>
                <ContenedorFiltro />
                <div className='containerList'>
                    <RecetasLista recetas={recetas} />
                </div>

            </div>
        </>
    )
}

export default RecetasListaContenedor
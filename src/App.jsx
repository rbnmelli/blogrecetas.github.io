
import './App.css'
import RecetasListaContenedor from './componentes/RecetasListaContenedor/RecetasListaContenedor'
import RecetasDetalleContenedor from './componentes/RecetasDetalleContenedor/RecetasDetalleContenedor'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'


function App() {

  return (
    <>
      {/* <RecetasListaContenedor />
      <RecetasDetalleContenedor /> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<RecetasListaContenedor />} />
          <Route path='/categoria/:categoria' element={<RecetasListaContenedor />} />
          <Route path='/id/:id' element={<RecetasDetalleContenedor />} />
        </Routes>

      </BrowserRouter>



    </>
  )
}

export default App

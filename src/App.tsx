import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria'
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria'
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      
        
          
          <div className='min-h-[80vh]'>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<ListaCategoria />} />
          <Route path="/categorias/:id" element={<FormularioCategoria />} />
          <Route path="/categorias/:id" element={<DeletarCategoria />} />

          </Routes>
          </div>
         
        
     
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App

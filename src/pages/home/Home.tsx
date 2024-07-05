import React from 'react'
import farmacialogo from '../../assets/farmacia-logo.png'
import { Link } from 'react-router-dom'
import ListaCategoria from '../../components/categorias/listaCategoria/ListaCategoria'

function Home() {
  return (
    <>
      <div className="bg-cyan-600 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>A saúde em primeiro lugar</h2>
              <p className='text-xl'>O lugar certo para você!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4 hover:bg-green-500 hover:text-white'>
                    <Link to='/categorias' > Ver Categorias</Link>
                    
                    </button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={farmacialogo} alt="" className='w-80vh p-5' />
      
            </div>
          </div>
        </div>

    <ListaCategoria/>
    </>
  )
}

export default Home

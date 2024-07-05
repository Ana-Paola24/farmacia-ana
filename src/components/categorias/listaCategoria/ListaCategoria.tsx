import React, { useEffect, useState } from 'react'
import Categoria from '../../../model/Categoria';
import CardCategoria from '../cardCategoria/CardCategoria';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../service/Service';
import { Dna } from 'react-loader-spinner';

function ListaCategoria() {

    const [categorias, setCategoria] = useState<Categoria[]>([]);

  let navigate = useNavigate();

  async function buscarCategoria() {
    try {
      await buscar('/categorias', setCategoria);
    } catch (error: any) {
      if(error.toString().includes('403')) {
        // toastAlerta('O token expirou, favor logar novamente', 'info')
      }
    }
  }

  useEffect(() => {
    buscarCategoria();
  }, [categorias.length]);

  return (
    <>
      {categorias.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaCategoria

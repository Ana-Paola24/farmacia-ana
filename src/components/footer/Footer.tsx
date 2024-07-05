import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'
import farmacialogo from '../../assets/farmacia-logo.png'

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-green-600 text-white">
          <div className="container flex flex-col-3 items-center justify-between p-4 ">
            <div className='flex items-center'>
                <img src={farmacialogo} alt="logo" className='object-contain h-20 mx-auto  p-5' />
                <p className='flex justify-center text-xl font-bold'>Farmacia Popular</p>
            </div>
            
            
            <div className='flex flex-col'>
              <p className='flex text-xl font-bold justify-center'>Copyright: </p>
              <p className='text-xl font-bold '>Ana Paola - Generation-T74 </p>
            </div>
            
            
            <div className='flex flex-col'>
                <p className='text-lg '>Acesse nossas redes sociais</p>
                <div className='flex gap-2 justify-center'>
                  <LinkedinLogo size={48}  />
                  <InstagramLogo size={48}  />
                  <FacebookLogo size={48}  />
                </div>
            </div>
            
          </div>
        </div>
    </>
  )
}

export default Footer

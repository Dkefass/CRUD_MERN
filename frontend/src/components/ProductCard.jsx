import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useProductStore } from '../store/product';
import toast from 'react-hot-toast';
import { useModal } from './Modal/ModalContext';
import ProductUpdate from './ProductUpdate';
import Confirmation from './Confirmation';



function ProductCard({product}) {


    const {setOpen,setBody}=useModal()
   
  return (
    <div className='w-full h-[300px] hover:scale-105 transition-all duration-300 rounded-md  bg-white dark:bg-slate-900'>
      
        <div className='flex p-4 justify-between items-center h-[20%]'>
        <div className=' '>
            <h3 className='text-md text-slate-600 dark:text-slate-300  font-bold'>{product.name}</h3>
            <h4 className='text-sm text-slate-600 dark:text-slate-300 font-semibold'>{product.price} FCFA</h4>
          </div>
          <div className='flex gap-1 justify-center items-center'>
            
            <div onClick={()=>{setOpen(true),setBody(<Confirmation product={product}/>)}} className= 'p-1 text-white flex justify-center items-center border-[2px] border-red-300 bg-red-500 hover:bg-red-400 hover:scale-110 transition-all duration-300 rounded-md'><MdDeleteForever size={20} /></div>
            <div onClick={()=>{setOpen(true),setBody(<ProductUpdate product={product}/>)}} className='p-1 text-white flex justify-center items-center border-[2px] border-blue-300 bg-blue-500 hover:bg-blue-400 hover:scale-110 transition-all duration-300 rounded-md'><FaEdit size={20}/></div>
           </div>
        </div>
          
          <img className="h-[80%] w-full bg-no-repeat   rounded-md" src={product.image}/>
          
          
        </div>
  )
}

export default ProductCard
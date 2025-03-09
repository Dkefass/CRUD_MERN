import React from 'react'
import { useModal } from './Modal/ModalContext'
import { useProductStore } from '../store/product';
import toast from 'react-hot-toast';
import { FaTrashAlt } from "react-icons/fa";

function Confirmation({product}) {

    const {deleteProduct}=useProductStore();
    const {setOpen}=useModal();

    const handleDelete = async(id)=>{
        setOpen(false)
        const {success,message}= await deleteProduct(id)
        if(!success){
            toast.error({message})

        }
        toast.success(message)
        
      }
   
    
  return (
    <div  className='min-h-[18vh] min-w-[15vw] px-4 rounded-md flex flex-col justify-center bg-white dark:bg-slate-900 '>
        
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-md text-gray-500 font-semibold dark:text-white'>Are you sure ?</h1>
          
          <div className='flex justify-center gap-4'>
          <button  onClick={()=>handleDelete(product._id)}className='flex justify-center items-center gap-1 bg-red-500 w-full hover:bg-red-400 p-2 rounded-md text-white text-md font-semibold' >
            <FaTrashAlt/> Delete
          </button>
          <button onClick={()=>setOpen(false)} className='bg-gray-200  w-full hover:bg-gray-200/50 dark:bg-white  p-2 rounded-md text-gray-500 text-md font-semibold' >
            Cancel
          </button>
          </div>
        </div>
      </div>
  )
}

export default Confirmation
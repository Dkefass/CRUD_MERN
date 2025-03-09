
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useProductStore } from '../store/product.js';

function CreatePage() {
const [newProduct,setNewProduct] = useState({
  name:"",
  price:"",
  image:""
});

const {createProduct}=useProductStore();

const handleCreateSubmit = async ()=>{
 const {message,success} = await createProduct(newProduct)

 if(success===false){
  toast.error(message)
 }
 if(success===true){
  toast.success(message)
 }
 


console.log(message)

}

  return (
    <div className='flex flex-row justify-center items-center '>

      <div className='m-[15vh] py-4 px-4 rounded-[10px] flex flex-col justify-center bg-white dark:bg-slate-900 min-w-[80vw] md:min-w-[35vw] '>
        <h1 className='text-md font-bold text-slate-500 tracking-wider dark:text-slate-200'> CREATE NEW PRODUCT</h1>

        <div className='flex flex-col gap-4 pt-2 mt-4 '>

          <div className='flex flex-col gap-1'><span className='text-slate-500 text-sm'>Name*</span><input type='text' onChange={(e) => setNewProduct({...newProduct, name:e.target.value})} name='name' value={newProduct.name} placeholder='Name' className='p-2 bg-slate-100 focus:outline-blue-300 rounded-md w-full dark:bg-black dark:text-white'/></div>
          <div className='flex flex-col gap-1'><span className='text-slate-500 text-sm'>Price*</span>  <input type='number' onChange={(e) => setNewProduct({...newProduct, price:e.target.value})} name='price' value={newProduct.price} placeholder='Price' className='p-2 bg-slate-100 focus:outline-blue-300 rounded-md w-full dark:bg-black dark:text-white'/></div>
          <div className='flex flex-col gap-1'><span className='text-slate-500 text-sm'>Image Url*</span> <input type='text' onChange={(e) => setNewProduct({...newProduct, image:e.target.value})} name='image' value={newProduct.image} placeholder='Image' className='p-2 bg-slate-100 focus:outline-blue-300 rounded-md w-full dark:bg-black dark:text-white'/></div>
          <button className='bg-blue-500 w-full hover:bg-blue-400 p-2 rounded-md text-white text-md font-semibold' onClick={handleCreateSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatePage;
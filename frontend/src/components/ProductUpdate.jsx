import React from 'react'
import { useModal } from './Modal/ModalContext'
import { useState ,useEffect} from 'react';
import { useProductStore } from '../store/product';
import toast from 'react-hot-toast';
 
function ProductUpdate({product}) {
    const {setOpen,setBody}=useModal();
        console.log(product)
        const [updatedProduct,setUpdatedProduct] = useState({
          name:"",
          price:"",
          image:""
        });

       
        useEffect(() => {
            if (product) {
              setUpdatedProduct({
                name: product.name || "",
                price: product.price || "",
                image: product.image || "",
              });
            }
          }, [product]);
        
        const {updateProduct}=useProductStore();
        
        const handleUpdateSubmit = async (id,product)=>{
        
         const {message,success} = await updateProduct(id,product)

        
         if(success===false){
          toast.error(message)
         }
         if(success===true){
            setOpen(false)
            setUpdatedProduct({name:"",price:"",image:""})
          toast.success(message)
         }
         
        
        console.log(message,product)
        
        }
    
  return (
    <div  className='m-[15vh] py-4 px-4 rounded-[10px] flex flex-col justify-center bg-white dark:bg-slate-900  min-w-[80vw] md:min-w-[35vw]'>
        <h1 className='text-md font-bold text-slate-500 tracking-wider dark:text-slate-200'> UPDATE PRODUCT</h1>

        <div className='flex flex-col gap-4 pt-2 mt-4'>
        <div className='flex flex-col gap-1'><span className='text-slate-500  text-sm'>Name*</span><input type='text' onChange={(e) => setUpdatedProduct({...updatedProduct, name:e.target.value})} name='name' value={updatedProduct.name} placeholder='Name' className='p-2 bg-slate-100 focus:outline-blue-300 rounded-md w-full dark:bg-black dark:text-white'/></div>
          <div className='flex flex-col gap-1'><span className='text-slate-500 text-sm'>Price*</span>  <input type='number' onChange={(e) => setUpdatedProduct({...updatedProduct, price:e.target.value})} name='price' value={updatedProduct.price} placeholder='Price' className='p-2 bg-slate-100 focus:outline-blue-300 rounded-md w-full dark:bg-black dark:text-white'/></div>
          <div className='flex flex-col gap-1'><span className='text-slate-500 text-sm'>Image Url*</span> <input type='text' onChange={(e) => setUpdatedProduct({...updatedProduct, image:e.target.value})} name='image' value={updatedProduct.image} placeholder='Image' className='p-2 bg-slate-100 focus:outline-blue-300 rounded-md w-full dark:bg-black dark:text-white'/></div>
          
          
          
          <div className='flex justify-center gap-4'>
          <button onClick={()=>handleUpdateSubmit(product._id,updatedProduct)} className='bg-blue-500 w-full hover:bg-blue-400 p-2 rounded-md text-white text-md font-semibold' >
            Update
          </button>
          <button onClick={()=>setOpen(false)} className='bg-gray-200  w-full hover:bg-gray-200/50 dark:hover:bg-white  p-2 rounded-md text-gray-500 text-md font-semibold' >
            Cancel
          </button>
          </div>
        </div>
      </div>
  )
}

export default ProductUpdate
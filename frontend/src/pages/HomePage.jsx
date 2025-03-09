import React, { useEffect } from 'react'

import { useProductStore } from '../store/product.js';
import ProductCard from '../components/ProductCard.jsx';

function HomePage() {
  const {fetchProducts,products}=useProductStore()


  
  useEffect (()=>{
    fetchProducts();
    console.log(products)

  },[fetchProducts])
  return (
    <div className='px-8 mt-8 pb-12'>
      
      {
  products && Array.isArray(products) && products.length > 0 ? (
    <div className=''> <h1 className=' mb-8 text-md font-bold flex items-center justify-start text-slate-400 dark:text-gray-200'>
    #products/list
  </h1><div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8'>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div></div>
    
  ) : (
    <h1 className='text-2xl font-semibold flex items-center justify-center text-slate-700'>
      No product found!
    </h1>
  )
}
    </div>
  )
}

export default HomePage;
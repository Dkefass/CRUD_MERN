import mongoose from "mongoose";
import Product from "../models/product.model.js"

export const getAllProduct =async (req,res) => {
    
    try {
        const products = await Product.find({});
        res.status(200).json({success:true,message:"Opération réussi",data: products})
    } catch (error) {
        console.error(`Erreur ${error.message}`);
        res.status(500).json({success:false,message:"ECHEC"})
    }
};

export const updateProduct = async(req,res) =>{

    const {id }= req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:"false",message:"Not found"})
         }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,message:"product updated",data:updatedProduct})
    } catch (error) {
        console.error(`Erreur : ${error.message}`);
        res.status(500).json({success:false,message:"Server error"})
    }
};


export const deleteProduct = async(req,res)=>{

    try {
        const {id} =req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.status(201).json({success:true,message:'Product deleted'})
    } catch (error) {
        console.error()
        res.status(500).json({success:false,message:"Server error"})

    }
 
    
};

export const createProduct = async (req,res) => {

    const product = req.body ;

    if( !product.name || !product.price || !product.image){

          res.status(400).json({success:false,message:"Veuillez remplir tout les champs"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success:true, message:"Produit enrégistré avec succès",data:newProduct})
    } catch (error) {
        console.error(`Erreur: ${error.message}`)
        res.status(500).json({success:false,message:"Erreur lors de l'enrégistrement"})
    }
};




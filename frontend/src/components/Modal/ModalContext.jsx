import { createContext, useState,useContext } from "react";

const ModalContext =createContext();

export const ModalProvider = ({children})=>{
     const[open,setOpen]=useState(false);
     const[body,setBody]=useState("");
     
    return (<ModalContext.Provider value={{open,setOpen,body,setBody}}>
        
        {children}
        </ModalContext.Provider>)
};

export const useModal =()=>useContext(ModalContext)


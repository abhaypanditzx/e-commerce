import { Children, createContext, useState } from "react";
import React from 'react'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    // states 
    const myUrl =  "https://e-commerce-zegt.onrender.com";
   
  return (
  <UserContext.Provider value={{myUrl}} >
    {children}
  </UserContext.Provider>
  )
}





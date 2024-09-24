import React, {createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({Children }) {
  const initialAuthUser = localStorage.getItem()
  return (
    <div>
      
    </div>
  )
}


export const useAuth = () => useContext(AuthContext);
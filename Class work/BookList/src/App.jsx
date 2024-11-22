import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import routes from './router/routes'


const router = createBrowserRouter([...routes])
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

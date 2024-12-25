import React from 'react'
import { Router, createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Homepage from './pages/Homepage.jsx'
// import './App.css'


const App = () => {

  //CRUD goes here


  //routes

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/Portfolio-Website' element= {<MainLayout />} > 
  
        <Route index element={<Homepage/>} />
    
        {/* <Route path="/habits" element={<Habits />} />
        <Route path="/habits/:id" element={<HabitPage />} />
        <Route path="/addhabit" element={<HabitPage />} />  */}

        {/* <Route path="*" element={<NotFound/>} /> */}

      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App


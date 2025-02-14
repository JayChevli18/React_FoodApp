import React from 'react'
import "./App.css"
import { Header } from './components/Header';
import { Body } from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { About } from './components/About';
import { Error } from './components/Error';
import { Contact } from './components/Contact';
import { RestaurantMenu } from './components/RestaurantMenu';

const Page=()=>{
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element: <Page/>,
    children:[
      {
        path:"/",
        element:<Body></Body>
      },
      {
        path:"/about",
        element:<About></About>      
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu></RestaurantMenu>
      }
    ],
    errorElement:<Error></Error>
  },
])


const App = () => {
  return(
    <RouterProvider router={appRouter}>
    </RouterProvider>
  )
}


export default App

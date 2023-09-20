import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './home/header/header.jsx'
import Home from './home/home.jsx'
import Homepage from './homepage/homepage.jsx'
import Homepagedetails from './homepagedetails.jsx'
import Profile from './profile/profile.jsx'
import About from './about/about.jsx'

const myrouter=createBrowserRouter([
  {
    path:"/",
    element: <Header></Header>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/homepage",
        element:<Homepage></Homepage>,
        loader:()=>fetch("https://dummyjson.com/products"),
      },
      {
        path:"/homepage/:id",
        element:<Homepagedetails></Homepagedetails>,
        loader:(object)=>fetch(`https://dummyjson.com/products/${object.params.id}`),
      },
      {
        path:"/portfolio",
        element:<Profile></Profile>
      },
      {
        path:"/about",
        element:<About></About>
      }
    ]
    
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myrouter} ></RouterProvider>
  </React.StrictMode>,
)

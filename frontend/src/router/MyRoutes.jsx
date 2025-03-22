
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'
import Home from "../page/Home";
import Login from "../page/Login";
import Users from "../page/Users";
import Register from "../page/Register";
import NotFound from "../page/NotFound";
import Layout from "../layouts/Layout";
const router = createBrowserRouter(
    [
        {
            // path: "/",
            element: <Layout />,
            children: [
                {
              path: "/",
              element: <Home />,
            },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
            ]
          },
          
]
)
export default function MyRoutes() {
  return <RouterProvider router={router} />
}

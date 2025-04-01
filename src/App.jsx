import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import Footer from "./components/Footer";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div>
          {/* Home */}
          <Navbar />
          <Home />
          <Footer />
        </div>
      )
    },

    {
      path: "/pastes",
      element: (
        <div>
          {/* Pastes */}
          <Navbar />
          <Paste />
          <Footer />
        </div>
      )
    }, 

    {
      path: "/pastes/:id",
      element: (
        <div>
          {/* Paste by Id */}
          <Navbar />
          <ViewPaste />
        </div>
      )
    },
    
  ]
)



function App() {
  

  return (
    <RouterProvider router={router}>
      {router}
    </RouterProvider>
  );
}

export default App;

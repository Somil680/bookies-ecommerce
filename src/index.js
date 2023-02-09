import React from "react";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom"
import { CartProvider, StoreProvider } from "./context";
import { SortProvider } from "./context/SortContext/Sortcontext";
import { WishlistProvider } from "./context";
import { AuthProvider } from "./context/AuthContext";
import { createRoot } from 'react-dom/client';
// Call make Server
makeServer();
const container = document.getElementById("root")
const root = createRoot(container);
root.render(

    <Router>
      <AuthProvider>
        <StoreProvider>
         <CartProvider>
           <WishlistProvider>
             <SortProvider>
              <App />
             </SortProvider>
            </WishlistProvider>
          </CartProvider>
        </StoreProvider>
        </AuthProvider>
    </Router>


);




import { NavBar } from "./components/NavBar/NavBar"
import { Routes, Route, Navigate } from "react-router-dom"
import { ProductsPage } from "./pages/ProductsPage"
import { CartPage } from "./pages/CartPage"
import { ProductProvider } from "./context/ProductProvider"
import { CartProvider } from "./context/CartProvider"

export const CarritoApp = () => {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <NavBar/>
          <div className="container">
              <Routes>
                  <Route path="/" element={<ProductsPage/>}/>
                  <Route path="/carrito" element={<CartPage/>}/>
                  <Route path="/*" element={<Navigate to="/"/>}/>
              </Routes>
          </div>
        </CartProvider>
      </ProductProvider>
    </>
  )
}

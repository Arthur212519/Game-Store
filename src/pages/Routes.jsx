import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer } from "../components/footer/Footer";
import { NavBar } from "../components/Navbar/navbar";
import { Cart } from "./Cart";
import { GameDetails } from "./GameDetails";
import { Shop } from "./Shop";
const RoutesPage= () => {
   return(
     <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/GameDetails/:id" element={<GameDetails />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
   )
}

export { RoutesPage}

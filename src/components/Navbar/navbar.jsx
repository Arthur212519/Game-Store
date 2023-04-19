import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"
import styled from "styled-components"
const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <H1> ART GS</H1>
                <ul>
                    <li><Link to={"/"}>Loja</Link></li>
                    <li><Link to={"/Novidades"}>Novidades</Link></li>
                    <li><Link to={"/FAQ"}>FAQ</Link></li>
                </ul>
            <div>
                <Link to={"/cart"}><AiOutlineShoppingCart size={35} /></Link>
            </div>
            </div>
        </nav>
    )
}
const H1 = styled.h1`
cursor:default;
color:#ffffff;
font-size:35px;
`
export { NavBar }
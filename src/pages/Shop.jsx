import React from "react"
import { data } from "../data"
import { ProductCard } from "../components/productCard/ProductCard"
import styled from "styled-components"

const Shop = () => {
    return (

        <Product >
            {data.map((itens) => (<ProductCard products={itens} />))}
        </Product>

    )

}
const Product = styled.div`
display: flex;
margin-bottom:30px;
gap:20px;
justify-content:center;
flex-wrap: wrap;
width: 100%;
`
export { Shop }
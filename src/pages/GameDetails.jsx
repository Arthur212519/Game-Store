import React, { useContext } from "react"
import { ImageSelector } from "../components/imageSelector/imageSelector"
import styled from "styled-components"
import { ShopContext } from "../Context/Shop-Context"
import { useParams } from "react-router-dom"
import { data } from "../data"
const GameDetails = () => {
    const { id } = useParams()
    const {addToCart,cartItems } = useContext(ShopContext);
        const cartItemAmount = cartItems[id]
    return (
        <Container>
            <ImageSelector />
            <Description>
                <H2>Sobre</H2>
                <P>{data[id - 1].description}</P>
                <Price>R$: {data[id - 1].price}</Price>
                <Button className="cartButton" onClick={()=>addToCart(id)}>Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>} </Button>
            </Description>
        </Container>
    )

}
const Button = styled.button`
background-color: #474b4f;
color:white;
font-size:22px;
width:30%;
height:5%;
border-style:none;
border-radius:10px;
`
const Price = styled.div`
font-size:24px;
`
const Description = styled.div`
color:#61892f;
width:40%;`
const P = styled.p`
color:white;
font-size:18px;`
const H2 = styled.h2`
font-size:28px;`
const Container = styled.div`
width:100%;
display:flex;
justify-content: space-evenly;
margin-bottom:20px;`
export { GameDetails }

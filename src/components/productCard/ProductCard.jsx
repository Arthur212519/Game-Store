import styled from "styled-components"
import { Link } from "react-router-dom"
import "./ProductCard.css"
const ProductCard = (props) => {
    const { id, name, gameImage, price } = props.products
    return (
        <Link to={`/GameDetails/${id}`} >
            <div className="productCard">
                <Img src={gameImage} alt={name} />
                <div className="description">
                    <b>{name}</b>
                    <p>R${price}</p>
                </div>
            </div>
        </Link>
    )
}
const Img = styled.img`
width:90%;
border-radius:15px;
height:300px;
`
export { ProductCard }
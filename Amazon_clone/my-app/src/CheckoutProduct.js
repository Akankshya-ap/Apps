import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider";


function CheckoutProduct({id, title, image, rating, price}) {
    const [{basket}, dispatch ] = useStateValue();
    const removeFromBasket = ()=> {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }
    
    return (
        <div className="checkoutproduct">
            <img src={image} alt=""/>
            <div className="checkoutP_info">
                <p className="checkoutP_title">{title}</p>
                <p className="checkoutP_price">
                <small>$</small>
                <strong>{price}</strong>
                </p>            
            <div className="checkoutP_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=>(
                        <p>⭐</p>
                    ))
                }
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
            
        </div>
    )
};



export default CheckoutProduct;

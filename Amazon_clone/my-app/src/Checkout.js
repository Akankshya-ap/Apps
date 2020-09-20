import React from 'react';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";


export default function Checkout() {
    const [{basket}] = useStateValue();

    return (

        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" src="https://adexchanger.com/wp-content/uploads/2018/02/shutterstock_376692970.jpg" alt="" />
        
        {basket?.length==0 ?(
            <div>
                <h2>Your Shopping Basket is empty</h2>
                <p>
                    You have no items in your basket. To buy items, click on "Add to Basket" next to the item.
                </p>
            </div>
        ):
        (
            <div>
                <h2 className="checkout_title">Your Shopping Basket</h2>
                {/*all the products will be listed out here  */}
                {basket?.map(item=>(
                    <CheckoutProduct
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    />
                ))}
            </div>
        )
        }
        </div>
        {basket.length>0 && (<div className="checkout_right">
            <h1>Subtotal</h1>
            </div>
            )}
        </div>

    )
};


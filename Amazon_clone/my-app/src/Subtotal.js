import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import {getBasketTotal} from './reducer';

export default function Subtotal() {
    const[{basket},dispatch] = useStateValue();

    return (
        <div className="subtotal">
            {/* price*/}

            <CurrencyFormat 
            renderText={(value)=>(
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/> This order contins a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType = {"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button className="subtotal_btn">Proceed to checkout</button>
            
        </div>
    )
}

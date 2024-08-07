import React from "react";
import { useNavigate } from "react-router-dom";

function Cart()
{
    const navigate=useNavigate();
    return (<div>
        add to cart<br/>
        <button onClick={()=>navigate("/-1")}>back to home</button>
    </div>)
}
export default Cart;
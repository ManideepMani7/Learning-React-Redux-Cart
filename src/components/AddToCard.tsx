
import type { JSX } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../Redux/store";
import { Link } from "react-router-dom";

const AddToCart = (): JSX.Element => {
    const itemsCount = useSelector((state: RootState) => state.cartItems.length);
    return (
        <>
            <div className="cart">
                <Link to={"/cart"}><span className="cart-icon"></span>🛒</Link>

                <span className="cart-count">{itemsCount}</span>
            </div>
        </>
    )
}

export default AddToCart;
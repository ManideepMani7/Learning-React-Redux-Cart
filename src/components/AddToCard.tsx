
import type { JSX } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../Redux/store";

const AddToCart = (): JSX.Element => {
    const itemsCount = useSelector((state: RootState) => state.cartItems.value);
    return (
        <>
            <div className="cart">
                <span className="cart-icon">🛒</span>
                <span className="cart-count">{itemsCount}</span>
            </div>
        </>
    )
}

export default AddToCart;
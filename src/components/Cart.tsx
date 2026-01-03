import type { JSX } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import type { Product } from "../Redux/slices/productSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { removeItem, updateItem } from "../Redux/slices/AddToCartSlice";


const Cart: React.FC = (): JSX.Element => {
    const cartItems: Product[] = useAppSelector(state => state.cartItems);
    const dispatch = useAppDispatch();

    const handleRemoveItem = (id: number): void => {
        try {
            dispatch(removeItem(id))
        } catch (error) {
            console.error(error);
        }
    }

    const handleQuantityChange = (value: string, item: Product) => {
        let input: number = parseInt(value);
        if (input >= 1) {
            dispatch(updateItem({ ...item, quantity: input }));
        }
    }

    return (
        <>
            <div className="cart-container">
                <div className="cart-header">
                    <h2>Your Cart Items</h2>
                </div>
                {
                    cartItems.length > 0 ?
                        cartItems.map((item: Product) => (
                            <div key={item.id} className="cart-item">
                                <div className="item-info">
                                    <img src={item.thumbnail} />
                                    <div className="item-details">
                                        <h4>{item.title}</h4>
                                        <p>{item.brand}</p>
                                    </div>
                                    <div className="item-quantity-textbox">
                                        <input type="number" value={item.quantity} onChange={(e) => { handleQuantityChange(e.target.value, item) }} />
                                    </div>
                                    <div className="item-actions">
                                        <span className="item-price">${item.quantity ? Number(item.quantity * item.price).toFixed(2) : 0}</span>
                                        <button className="item-remove-button" onClick={() => { handleRemoveItem(item.id) }}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <>
                        </>
                }
                <div className="item-total-price">
                    <span className="item-total-label">Total Price : </span> <span className="item-total-price-withspace-me-2">${cartItems.reduce((sum: number, item: Product) => sum + (item.quantity ? item.price * item.quantity : 0), 0).toFixed(2)}</span>
                </div>
            </div>
        </>
    )
}

export default Cart;
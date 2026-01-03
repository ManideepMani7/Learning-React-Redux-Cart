import type { JSX } from "react";
import type { Product } from "../Redux/slices/productSlice";
import { useAppSelector } from "../hooks/useAppSelector";

export type ProductTileProps = Pick<Product, "id" | "title" | "price" | "rating" | "brand" | "thumbnail"> & {
    onAddToCart: (item: Product) => void
    removeItemFromCart: (id: number) => void
    item: Product
}

const ProductTile: React.FC<ProductTileProps> = ({ title, thumbnail, price, onAddToCart, id, removeItemFromCart, brand, rating, item }): JSX.Element => {

    const existingItems: Product[] = useAppSelector(state => state.cartItems);
    return (
        <>
            <div className="product-card">
                <img src={thumbnail} alt={title} className="product-image" />

                <h3 className="product-title">{title}</h3>
                <p className="product-price">Brand : {brand}</p>
                <p className="product-price">${price.toFixed(2)}</p>
                <p className="product-price">Rating : {rating}</p>
                <div className="cart-buttons">
                    {existingItems.find((e: Product) => e.id === item.id) ?
                        <>
                            <button
                                disabled
                                className="disable-to-cart-btn"
                                onClick={() => onAddToCart(item)}
                            >
                                Add to Cart
                            </button>
                        </>
                        :
                        <>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => onAddToCart(item)}
                            >
                                Add to Cart
                            </button>
                        </>

                    }

                    <button
                        className="remove-item-from-cart-btn"
                        onClick={() => removeItemFromCart(id)}
                    >
                        Remove From Cart
                    </button>
                </div>

            </div>
        </>
    )
}

export default ProductTile;
import type { JSX } from "react";
import type { Product } from "../Redux/slices/productSlice";

export type ProductTileProps = Pick<Product, "id" | "title" | "price" | "rating" | "brand" | "thumbnail"> & {
    onAddToCart: (id: number) => void
    removeItemFromCart: (id: number) => void
}

const ProductTile: React.FC<ProductTileProps> = ({ title, thumbnail, price, onAddToCart, id, removeItemFromCart, brand, rating }): JSX.Element => {
    return (
        <>
            <div className="product-card">
                <img src={thumbnail} alt={title} className="product-image" />

                <h3 className="product-title">{title}</h3>
                <p className="product-price">Brand : {brand}</p>
                <p className="product-price">${price.toFixed(2)}</p>
                <p className="product-price">Rating : {rating}</p>
                <div className="cart-buttons">
                    <button
                        className="add-to-cart-btn"
                        onClick={() => onAddToCart(id)}
                    >
                        Add to Cart
                    </button>
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
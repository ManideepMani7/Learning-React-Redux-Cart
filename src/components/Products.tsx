import { useEffect, type JSX } from "react";
import { addItem, removeItem } from "../Redux/slices/AddToCartSlice";
import ProductTile from "./ProductTile";
import { fetchProducts, type Product } from "../Redux/slices/productSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";


const Products: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const { items, status } = useAppSelector(state => state.products)

    const handleAddToCart = (id: number): void => {
        console.log(id);
        dispatch(addItem());
    }
    const handleRemoveFromCart = (id: number): void => {
        console.log(id);
        dispatch(removeItem());
    }

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [])

    console.log(items);

    return (
        <>
            <div className="products-grid">
                {items.length > 0 &&
                    items.map((item: Product) => (

                        <ProductTile
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            thumbnail={item.thumbnail}
                            onAddToCart={handleAddToCart}
                            removeItemFromCart={handleRemoveFromCart}
                            rating={item.rating}
                            brand={item.brand} />

                    ))
                }
            </div>
        </>
    )
}

export default Products;
import type { JSX } from "react"
import AddToCart from "./AddToCard"
// import '../App.css'

const Header = (): JSX.Element => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/products">Products</a>
            </div>
            <AddToCart />
        </nav>
    )
}

export default Header

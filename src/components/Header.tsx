import type { JSX } from "react"
import AddToCart from "./AddToCard"
import { Link } from "react-router-dom"
// import '../App.css'

const Header = (): JSX.Element => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to={"/"}> Home</Link >
            </div>
            <AddToCart />
        </nav>
    )
}

export default Header

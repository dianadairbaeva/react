import {Link, useNavigate} from "react-router-dom"

export default function Header(){
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    function handleLogout(){
        localStorage.removeItem("token")
        navigate("/login")
    }

    return(
       <header className="header">
            <Link to="/" className="logo"> React shop</Link>

            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </nav>

       </header>
    )
}
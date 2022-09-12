import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'


function Header(props) {
    
    const { isloggedIn,setIsLoggedIn} = props

    const onLoggedinHandler = () => {
        localStorage.removeItem('userName')
        localStorage.removeItem('password')
        setIsLoggedIn(false);
    }

    return (
        <>
            <header className="d-flex justify-content-around py-3 header">
                <Link to="/dashboard" className="d-flex align-items-center mb-3 text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                    <span className="fs-4">PRODUCT ADMIN</span>
                </Link>

                <ul className="nav nav-pills list">
                    <li className="nav-item"><Link to="/dashboard" className="nav-link" aria-current="page"><i className="fas fa-2x fa-tachometer-alt"></i><div>Dashboard</div></Link></li>
                    <li className="nav-item"><Link to="/products" className="nav-link"><i className="fa-solid fa-2x fa-cart-shopping"></i><div>Products</div></Link></li>
                    <li className="nav-item"><Link to="/accounts" className="nav-link"><i className="fa-solid fa-2x fa-user"></i><div>Accounts</div></Link></li>
                </ul>

               { isloggedIn &&
                <ul className="navbar-nav logout list">
                    <li className="nav-item" onClick={() => onLoggedinHandler()}>
                        <Link className="nav-link d-block align-middle" to="/loginpage">
                            Admin, <b>Logout</b>
                        </Link>
                    </li>
                </ul>}
            </header>
        </>
    )
}
export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const cartStyle ={
        background: '#F59E0D',
        display:'flex',
        padding: '6px 12px',
        borderRadius: '50px',
    }
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4 px-3">
                
                    <Link to = "/">
                        <img style={{ height: 70 }} src="/images/icon.jpg" alt="logo" />
                    </Link>
                    <ul className="flex items-center">
                        <li className=""><Link to="/">Home</Link></li>
                        <li className="ml-6"><Link to="/products">Products</Link></li>
                        <li className="ml-6">
                            <Link to="/cart">
                                <div style={cartStyle}>
                                    <span className="text-white">10</span>
                                    <img className="ml-3" style={{ height: 25 }} src="/images/shopping_cart.png" alt="" />
                                </div>    
                            </Link>
                        </li>
                    </ul>
                
            </nav>
        </>
    )
}

export default Navigation;

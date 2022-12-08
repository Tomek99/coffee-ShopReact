import React, { useRef, useState } from 'react'
import '../../styles/HeaderSection.scss'
import { BsCartFill, BsSearch } from 'react-icons/bs'
import PopupSearch from '../PopupSearch/PopupSearch';
import PopupBasket from '../PopupBasket/PopupBasket'

function Header(props) {
    const [isBasketOpen, setBasketOpen] = useState(false);
    const [isNavigationOpen, setNavigationOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);

    const handleSearch = () => {
        setSearchOpen(!isSearchOpen);
        setNavigationOpen(false);
        setBasketOpen(false);
    }

    const handleNavigation = () => {
        setNavigationOpen(!isNavigationOpen);
        setBasketOpen(false);
        setSearchOpen(false);
    }

    const handleBasket = () => {
        setBasketOpen(!isBasketOpen);
        setNavigationOpen(false);
        setSearchOpen(false);
    }

    return (
        <>
            <div className='HeaderSection'>
                <div className={isNavigationOpen ? 'hamburger active' : 'hamburger'} onClick={handleNavigation}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                <div className='navBar' >
                    <div>
                        <a href="#homeSection"><img src="/images/logo.png" className="logo" alt="" /></a>
                    </div>
                    <nav >
                        <ul className={isNavigationOpen ? 'navMenu active' : 'navMenu'} >
                            <li className='nav-item'><a href='#homeSection' className='nav-link'>Home</a></li>
                            <li className='nav-item'><a href='#aboutSection' className='nav-link'>About</a></li>
                            <li className='nav-item'><a href='#menuSection' className='nav-link'>Menu</a></li>
                            <li className='nav-item'><a href='#productsSection' className='nav-link'>Products</a></li>
                            <li className='nav-item'><a href='#reviewSection' className='nav-link'>Review</a></li>
                            <li className='nav-item'><a href='#contactSection' className='nav-link'>Contact</a></li>
                            <li className='nav-item'><a href='#blogsSection' className='nav-link'>Blogs</a></li>
                        </ul>
                    </nav>

                    <div className='btn-section'>
                        <PopupBasket
                            isBasketOpen={isBasketOpen}
                            basketItems={props.basketItems}
                            deleteItem={props.deleteItem}
                            basketPrice={props.basketPrice}
                        />

                        <button
                            type="button"
                            onClick={handleSearch} >
                            <BsSearch
                                size={30}
                                color={"#fff"}
                                onMouseOver={({ target }) => target.style.color = "d3ad7f"} onMouseOut={({ target }) => target.style.color = "#fff"} />
                        </button>
                        <PopupSearch isSearchOpen={isSearchOpen} />

                        <button
                            type="button"
                            onClick={handleBasket}>
                            <BsCartFill size={30} color={"#fff"} onMouseOver={({ target }) => target.style.color = "d3ad7f"} onMouseOut={({ target }) => target.style.color = "#fff"} />
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
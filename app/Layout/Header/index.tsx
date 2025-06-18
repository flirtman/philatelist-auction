import { useNavigate } from "react-router-dom";

// Icons
import { IoSearch, IoCartOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";

// media
import Img1 from "../../media/lord-stempee-1.png";

import "./styles.scss";
import {useState} from "react";

const SearchBar = () => {
    return (
        <div className={'search-wrapper'}>
            <input
                id="search-field"
                placeholder="Search stamp listings..."
                type="text"
                aria-label="Search stamp listings"
            />
            <button aria-label="Search"><IoSearch/></button>
        </div>
    )
}

const Header = () => {
    const navigate = useNavigate();
    const [openNav, setOpenNav] = useState(false);

    return (
        <header className="top-bar">
            <div className={'logo'} onClick={() => navigate('/')}>
                <img src={Img1} alt=""/> Stampee's Auction
            </div>
            <span className={'hide-sm search-bar-wrapper-lg'}><SearchBar/></span>

            <HiMenuAlt3 className={'menu-icon'} onClick={() => setOpenNav(!openNav)}/>
            <div className={`account-actions ${openNav ? 'open' : ''}`}>
                <a href="">Sign In</a>
                <a href="">Sign Up</a>
                <a href="">Wish List</a>
                <a href="" aria-label="View cart"><IoCartOutline/></a>
                <br/>
                <span className={'show-sm'}>
                    <SearchBar/>
                </span>
            </div>
        </header>
    )
}

export default Header;
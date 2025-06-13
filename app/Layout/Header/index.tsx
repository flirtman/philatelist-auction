import { useNavigate } from "react-router-dom";

// Icons
import { IoSearch, IoCartOutline } from "react-icons/io5";

// media
import Img1 from "../../media/lord-stempee-1.png";

import "./styles.scss";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="top-bar">
            <div className={'logo'} onClick={() => navigate('/')}>
                <img src={Img1} alt=""/> Stampee's Auction
            </div>
            <div className={'search-wrapper'}>
                <input
                    id="search-field"
                    placeholder="Search stamp listings..."
                    type="text"
                    aria-label="Search stamp listings"
                />
                <button aria-label="Search"><IoSearch/></button>
            </div>
            <div className={'account-actions'}>
                <a href="">Sign In</a>
                <a href="">Sign Up</a>
                <a href="">Wish List</a>
                <a href="" aria-label="View cart"><IoCartOutline/></a>
            </div>
        </header>
    )
}

export default Header;
// Icons
import { IoSearch, IoCartOutline } from "react-icons/io5";

// media
import Img1 from "../../media/lord-stempee-1.png";

import "./styles.scss";

const Header = () => {
    return (
        <header className="top-bar">
            <div className={'logo'}><img src={Img1} alt=""/> Stampee's Auction</div>
            <div className={'search-wrapper'}>
                <input type="text" placeholder={"Search stamp listings..."}/>
                <button><IoSearch/></button>
            </div>
            <div className={'account-actions'}>
                <a href="">Sign In</a>
                <a href="">Sign Up</a>
                <a href="">Wish List</a>
                <a href=""><IoCartOutline/></a>
            </div>
        </header>
    )
}

export default Header;
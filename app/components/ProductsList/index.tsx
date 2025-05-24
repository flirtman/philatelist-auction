import React, {useState} from "react";
import { FaRegHeart } from "react-icons/fa";
import "./styles.scss";

import Img1 from "../../media/stamps/CK2205_-_USSR_Postal_Stamp.png";
import Img2 from "../../media/stamps/The_Soviet_Union_1969_CPA_3812_stamp_(Lenin_when_a_Youth_and_Emblems).png";
import Img3 from "../../media/stamps/The_Soviet_Union_1965_CPA_3264_stamp_(History_of_the_Russian_Post._Modern_means_of_mail_transportation._Diesel-electric_train_and_railwa.png";

import productsData from "./products.json";

// Icons
import { RiGalleryView } from "react-icons/ri";
import { RiListView } from "react-icons/ri";


const imageMap = {
    img1: Img1,
    img2: Img2,
    img3: Img3,
};

const ProductsList = () => {
    const [displayAs, setDisplayAs] = useState('gallery');

    return (
        <>
            <div className={'filter-bar'}>
                <div>830 Listings Found. Showing 1 to 48.</div>
                <div className={'spacer'}></div>
                <div className={'controllers'}>
                    <button onClick={() => setDisplayAs('gallery')}><RiGalleryView/></button>
                    <button onClick={() => setDisplayAs('list')}><RiListView/></button>
                </div>
            </div>
            <div className="products-list" data-display={displayAs}>
                {productsData.map((product) => (
                    <div className="card" key={product.id}>
                        <div className="img-holder">
                            <button><FaRegHeart/></button>
                            <img src={imageMap[product.image as keyof typeof imageMap]} alt={product.title}/>
                        </div>
                        <div>
                            <div className="time-left">
                                {product.timeLeft}
                            </div>
                            <h3>{product.title}</h3>
                        </div>


                        <div className="current-bid">
                            <hr/>
                            <small>Current Bid</small>
                            ${product.currentBid.toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductsList;

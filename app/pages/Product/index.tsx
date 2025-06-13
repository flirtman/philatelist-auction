import Layout from "~/Layout";
import "./styles.scss";

import Img1 from "../../media/stamps/CK2205_-_USSR_Postal_Stamp.png";
import Img2 from "../../media/stamps/The_Soviet_Union_1969_CPA_3812_stamp_(Lenin_when_a_Youth_and_Emblems).png";
import Img3 from "../../media/stamps/The_Soviet_Union_1965_CPA_3264_stamp_(History_of_the_Russian_Post._Modern_means_of_mail_transportation._Diesel-electric_train_and_railwa.png";

import graphic1 from "../../media/paypal-protection.png";
import {Link} from "react-router-dom";


const MoreItemsCard = ({img, desc, price}: { img: string; desc: string; price: number } ) => {
    return (
        <div className={'more-items-card'}>
            <div className="header">
                <img src={img} alt=""/>
            </div>
            <div className="body">
                <div className="desc">{desc}</div>
                <div className="price">${price}</div>
            </div>
        </div>
    )
}

const Product = () => {
    return (
        <Layout>
            <section className={'product-view'}>
                <div className="breadcrumbs">
                    <ul>
                        <li><Link to={'/'}>Listing</Link></li>
                        <li>Product Name (#1123456)</li>
                    </ul>
                </div>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <div className="prod-img-container">
                            <div className="main-img-container">
                                <img src={Img1} alt=""/>
                            </div>
                            <ul className="thumbs-container">
                                <li>
                                    <img className={'thumb'} src={Img1} alt=""/>
                                </li>
                                <li>
                                <img className={'thumb'} src={Img2} alt=""/>
                                </li>
                                <li>
                                    <img className={'thumb'} src={Img3} alt=""/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={'col-8'}>
                        <div className="product-details">
                            <h2>Product name</h2>
                            <div className="row">
                                <div className="col-6">
                                    <h3>$0.99</h3>
                                    <ul>
                                        <li>Seller: mushbigdog (1426)</li>
                                        <li>Time Left: <span> Closed</span></li>
                                    </ul>
                                    <br/>
                                    <img src={graphic1} alt=""/>
                                </div>
                                <div className="col-6">
                                    <div className="row extra-info">
                                        <div className="col-8">
                                            <div className={'bidings'}>
                                                <p><b>Place Bid</b></p>
                                                <input type="number" placeholder={'USD'}/>
                                                <p><small>Minimum Bid: $0.99</small></p>
                                            </div>
                                            <button>PLACE BID</button>
                                        </div>
                                        <div className="col-4">
                                            <p className={'current-bid'}>Current Bid: $0.99</p>
                                            <p className={'n-bids'}>Bids: 0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <hr/>
                            <div className="more-items">
                                <h3>More Items from Wolfhound Stamps</h3>

                                <div className="row">
                                    <div className="col-3">
                                        <MoreItemsCard img={Img1} desc={"lorem ipsum sit amit"} price={15.55}/>
                                    </div>
                                    <div className="col-3">
                                        <MoreItemsCard img={Img2} desc={"lorem ipsum sit amit"} price={15.55}/>
                                    </div>
                                    <div className="col-3">
                                        <MoreItemsCard img={Img3} desc={"lorem ipsum sit amit"} price={15.55}/>
                                    </div>
                                    <div className="col-3">
                                        <MoreItemsCard img={Img1} desc={"lorem ipsum sit amit"} price={15.55}/>
                                    </div>
                                    <div className="col-3">
                                        <MoreItemsCard img={Img2} desc={"lorem ipsum sit amit"} price={15.55}/>
                                    </div>
                                    <div className="col-3">
                                        <MoreItemsCard img={Img3} desc={"lorem ipsum sit amit"} price={15.55}/>
                                    </div>
                                </div>

                                <div className={'more-items-footer'}>
                                    <button className={'button-trans'}>View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Product;
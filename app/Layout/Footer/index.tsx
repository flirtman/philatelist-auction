import Img1 from "../../media/lord-stempee-1.png";

import "./styles.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col">
                    <div className={'logo'}><img src={Img1} alt=""/> Stampee's Auction</div>
                    <p className="desc">
                        Stampee’s Auction is a classic, collector-focused platform where members can browse and bid on rare stamps from around the world—founded by the distinguished Lord Reginald Stampee.
                    </p>
                </div>
                <div className="col">
                    <section>
                        <h4>About Lord Reginald Stampee III</h4>
                        <ul>
                            <li><a href="">Philately Is Life</a></li>
                            <li><a href="">The Duke’s Biography</a></li>
                            <li><a href="">Family History</a></li>
                        </ul>
                    </section>
                </div>
                <div className="col">
                    <section>
                        <h4>News</h4>
                        <ul>
                            <li><a href="">Stamps</a></li>
                            <li><a href="">Auctions</a></li>
                            <li><a href="">Bridge</a></li>
                        </ul>
                    </section>
                </div>
                <div className="col">    
                    <section>
                        <h4>How It Works</h4>
                        <ul>
                            <li><a href="">Profile Help</a></li>
                            <li><a href="">How to Bid</a></li>
                            <li><a href="">How to Follow an Auction</a></li>
                            <li><a href="">How to Find the Desired Auction</a></li>
                            <li><a href="">Contact the Webmaster</a></li>
                        </ul>
                    </section>
                </div>
            </div>
            <p>© 2025 Stampee's Auction | <a href="">Terms & Conditions</a></p>
        </footer>
    )
}

export default Footer;
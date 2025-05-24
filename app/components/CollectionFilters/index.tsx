import { useState } from "react";

// UI
import Card from "../UI/Card";
import { FaArrowDownShortWide, FaArrowUpWideShort } from "react-icons/fa6";

// Icons
import { GrCertificate } from "react-icons/gr";
import { LuNotebookTabs } from "react-icons/lu";
import { MdOutlinePriceChange, MdOutlineWebhook, MdFormatShapes} from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbCategoryPlus } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiMapPinRangeLine } from "react-icons/ri";

// Styles
import "./styles.scss";

const CollectionFilters = () => {
    const [openSection, setOpenSection] = useState<null | "locations" | "stamp-type" | "price-range" | "condition" | "stamp-format" | "show-only" | "certificate">(null);
    const [certificateFilter, setCertificateFilter] = useState<"yes" | "no" | "">("");

    const toggleSection = (section: "locations" | "stamp-type" | "price-range" | "condition" | "stamp-format" | "show-only" | "certificate") => {
        setOpenSection(prev => (prev === section ? null : section));
    };

    return (
        <div className="collection-filters">
            <h2>Collection Filters</h2>
            <hr/>
            <Card>
                <div className="card-header pointer" onClick={() => toggleSection("locations")}>
                    <RiMapPinRangeLine />
                    Locations
                    <div className="spacer" />
                    {openSection === "locations" ? <FaArrowUpWideShort /> : <FaArrowDownShortWide />}
                </div>
                <div className="card-body">
                    <ul data-show={openSection === "locations"}>
                        <li><a href="#"><MdKeyboardArrowRight/> Australia</a></li>
                        <li><a href="#"><MdKeyboardArrowRight/> Australian Antarctic Territory</a></li>
                        <li><a href="#"><MdKeyboardArrowRight/> Australian States - New South Wales</a></li>
                        <li><a href="#"><MdKeyboardArrowRight/> Australian States - Queensland</a></li>
                        <li><a href="#"><MdKeyboardArrowRight/> Australian States - South Australia</a></li>
                        <li><a href="#"><MdKeyboardArrowRight/> Australian States - Tasmania</a></li>
                        <li><a href="#"><MdKeyboardArrowRight/> Australian States - Victoria</a></li>
                        <li><a href="#"><MdKeyboardArrowRight/> Australian States - Western Australia</a></li>
                        <li><a href="#"><MdKeyboardArrowRight/> Christmas Island</a></li>
                        <li><a href="#"><MdKeyboardArrowRight/> Cocos Islands (Keeling Islands)</a></li>
                        <li><a href="#"><MdKeyboardArrowRight/> North West Pacific Islands</a></li>
                        <li><a href="#"><MdKeyboardArrowRight/> Victoria</a></li>
                    </ul>
                    <div data-show={openSection !== "locations"}><small>Expand to manage locations.</small></div>
                </div>
            </Card>

            <br />

            <Card>
                <div className="card-header pointer" onClick={() => toggleSection("stamp-type")}>
                    <LuNotebookTabs />
                    Stamp Types
                    <div className="spacer" />
                    {openSection === "stamp-type" ? <FaArrowUpWideShort /> : <FaArrowDownShortWide />}
                </div>
                <div className="card-body">
                    <div data-show={openSection === "stamp-type"}>
                        <label><input type="checkbox"/> General Issue <small>(97,480)</small></label>
                        <label><input type="checkbox"/> Air Mail <small>(1,090)</small></label>
                        <label><input type="checkbox"/> Booklets <small>(123)</small></label>
                        <label><input type="checkbox"/> Locals & Carriers <small>(2,437)</small></label>
                        <label><input type="checkbox"/> Military <small>(50)</small></label>
                        <label><input type="checkbox"/> Offices Abroad - Forerunners <small>(13)</small></label>
                        <label><input type="checkbox"/> Officials <small>(792)</small></label>
                        <label><input type="checkbox"/> Postage Due <small>(1,570)</small></label>
                        <label><input type="checkbox"/> Postal Cards <small>(12)</small></label>
                        <label><input type="checkbox"/> Postal Stationery <small>(330)</small></label>
                        <label><input type="checkbox"/> Revenues <small>(39)</small></label>
                        <label><input type="checkbox"/> Semi-Postal <small>(42)</small></label>
                        <label><input type="checkbox"/> Special Delivery <small>(9)</small></label>
                        <label><input type="checkbox"/> Back of Book (Other) <small>(393)</small></label>
                        <label><input type="checkbox"/> Not Specified <small>(5,859)</small></label>
                    </div>
                    <div data-show={openSection !== "stamp-type"}><small>Expand to manage Stamp Type.</small></div>
                </div>
            </Card>

            <br/>

            <Card>
                <div className="card-header pointer" onClick={() => toggleSection("condition")}>
                    <MdOutlineWebhook />
                    Conditions
                    <div className="spacer" />
                    {openSection === "condition" ? <FaArrowUpWideShort /> : <FaArrowDownShortWide />}
                </div>
                <div className="card-body">
                    <div data-show={openSection === "condition"}>
                        <label><input type="checkbox" /> Mint (NH) <small>(27,757)</small></label>
                        <label><input type="checkbox" /> Unused <small>(22,463)</small></label>
                        <label><input type="checkbox" /> Used <small>(86,193)</small></label>
                        <label><input type="checkbox" /> First Day Cover <small>(6,919)</small></label>
                        <label><input type="checkbox" /> Cover (Postal History) <small>(3,365)</small></label>
                        <label><input type="checkbox" /> Not Specified <small>(838)</small></label>
                    </div>
                    <div data-show={openSection !== "condition"}>
                        <small>Expand to manage Condition.</small>
                    </div>
                </div>
            </Card>

            <br/>

            <Card>
                <div className="card-header pointer" onClick={() => toggleSection("stamp-format")}>
                    <MdFormatShapes />
                    Stamp Formats
                    <div className="spacer" />
                    {openSection === "stamp-format" ? <FaArrowUpWideShort /> : <FaArrowDownShortWide />}
                </div>
                <div className="card-body">
                    <div data-show={openSection === "stamp-format"}>
                        <label><input type="checkbox" /> Single <small>(135,140)</small></label>
                        <label><input type="checkbox" /> Block <small>(2,689)</small></label>
                        <label><input type="checkbox" /> Error <small>(444)</small></label>
                        <label><input type="checkbox" /> Full Sheet <small>(870)</small></label>
                        <label><input type="checkbox" /> Miniature Sheet <small>(1,030)</small></label>
                        <label><input type="checkbox" /> Multiple <small>(5,619)</small></label>
                        <label><input type="checkbox" /> Pair <small>(2,576)</small></label>
                        <label><input type="checkbox" /> Plate Block <small>(27)</small></label>
                        <label><input type="checkbox" /> Plate Number Coil <small>(46)</small></label>
                        <label><input type="checkbox" /> Souvenir Sheet <small>(1,207)</small></label>
                    </div>
                    <div data-show={openSection !== "stamp-format"}>
                        <small>Expand to manage Stamp Format.</small>
                    </div>
                </div>
            </Card>
            <br/>

            <Card>
                <div className="card-header pointer" onClick={() => toggleSection("certificate")}>
                    <GrCertificate />
                    Has a Certificate
                    <div className="spacer" />
                    {openSection === "certificate" ? <FaArrowUpWideShort /> : <FaArrowDownShortWide />}
                </div>
                <div className="card-body">
                    <div data-show={openSection === "certificate"}>
                        <label>
                            <input
                                type="radio"
                                name="certificate"
                                value="no"
                                checked={certificateFilter === "no"}
                                onChange={() => setCertificateFilter("no")}
                            />
                            No <small>(149,354)</small>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="certificate"
                                value="yes"
                                checked={certificateFilter === "yes"}
                                onChange={() => setCertificateFilter("yes")}
                            />
                            Yes <small>(262)</small>
                        </label>
                    </div>

                    <div data-show={openSection !== "certificate"}>
                        <small>Expand to manage Certificate status.</small>
                    </div>
                </div>
            </Card>

            <br/>

            <Card>
                <div className="card-header pointer" onClick={() => toggleSection("show-only")}>
                    <RiMoneyDollarCircleLine/>
                    Show Only
                    <div className="spacer"/>
                    {openSection === "show-only" ? <FaArrowUpWideShort/> : <FaArrowDownShortWide/>}
                </div>
                <div className="card-body">
                    <div data-show={openSection === "show-only"}>
                        <label><input type="checkbox" /> Free Shipping</label>
                        <label><input type="checkbox" /> Offers Accepted</label>
                        <label><input type="checkbox" /> Listed Today</label>
                        <label><input type="checkbox" /> Listed This Week</label>
                        <label><input type="checkbox" /> Listed This Month</label>
                        <label><input type="checkbox" /> Items On Sale</label>
                        <label><input type="checkbox" /> On Sale 25% or More</label>
                        <label><input type="checkbox" /> On Sale 50% or More</label>
                    </div>
                    <div data-show={openSection !== "show-only"}>
                        <small>Expand to manage Show Only filters.</small>
                    </div>
                </div>
            </Card>

            <br/>
            <Card>
                <div className="card-header pointer" onClick={() => toggleSection("price-range")}>
                    <MdOutlinePriceChange />
                    Price Range
                    <div className="spacer" />
                    {openSection === "price-range" ? <FaArrowUpWideShort /> : <FaArrowDownShortWide />}
                </div>
                <div className="card-body">
                    <div data-show={openSection === "price-range"}>
                        <label>
                            Min: <input type="number" placeholder="$0" className="price-input" />
                        </label>
                        <label>
                            Max: <input type="number" placeholder="$1000" className="price-input" />
                        </label>
                    </div>
                    <div data-show={openSection !== "price-range"}>
                        <small>Expand to filter by price range.</small>
                    </div>
                </div>
            </Card>

        </div>
    );
};

export default CollectionFilters;

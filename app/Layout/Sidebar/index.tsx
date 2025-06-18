import {useState, useEffect} from "react";

// components
import CollectionFilters from "../../components/CollectionFilters";

// Icons
import { BsFilterLeft } from "react-icons/bs";
import { LuPanelLeftClose } from "react-icons/lu";
import { LuPanelRightClose } from "react-icons/lu";

// Styles
import "./styles.scss";

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1500) {
                setOpen(true);
            } else {
                setOpen(false);
            }
        };

        handleResize()
        // Optional: Only update on resize if you want it to be dynamic
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className={'settings-icon'} data-open={open} onClick={() => setOpen(!open)}>
                {!open ? <LuPanelRightClose/> : <LuPanelLeftClose/>}

            </div>
            <nav className="sidebar" data-open={open}>
                <CollectionFilters/>
            </nav>
        </>
    )
}

export default Sidebar;
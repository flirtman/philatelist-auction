import {useEffect} from "react";
import { useLocation } from "react-router-dom";

// Sections
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "./styles.scss";

const Layout = ({children}: {children: any}) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return (
        <div className={'layout-wrapper'}>
            <Header/>
            <div className="layout">
                <Sidebar/>
                <main className="content">
                    {children}
                </main>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;
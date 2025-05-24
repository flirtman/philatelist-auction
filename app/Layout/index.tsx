
// Sections
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "./styles.scss";

const Layout = ({children}: {children: any}) => {
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
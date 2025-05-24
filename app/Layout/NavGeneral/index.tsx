import "./styles.scss";

const NavGeneral = () => {
    return (
        <nav>
            <a href="">Home</a>
            <a href="">Biography</a>
            <div className="dropdown">
                <a href="">Movies</a>
                <div>
                    <a href="">Con Air</a>
                    <a href="">The Rock</a>
                    <a href="">Raising Arizona</a>
                    <a href="">Face Off</a>
                </div>
            </div>
            <a href="">Contact</a>
        </nav>
    )
}

export default NavGeneral;
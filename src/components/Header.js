import './Header.css';
function Header() {
    return (
        <nav className={"header__nav blue lighten-1"} >
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Repositories</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
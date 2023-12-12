import "./header.css";

function Header() {
    return (
        <header className="center">
            <div className="logo center">
                <a href="#">
                    <img src="/img/Piano_logo.png" alt="" />
                    <h2 className="header-text center">RPKeys</h2>
                </a>
            </div>

            <nav className="center">
                <div className="nav-link center">
                    <a href="#">Home</a>
                    <a href="">Starting Level</a>
                    <a href="">Intermediate Level</a>
                    <a href="">Advance Level</a>
                </div>
                    
                <div className="nav-loging center">
                    <a href="">Sign in</a>
                    <a href="">Sign up</a>
                </div>

            </nav>
        </header>
    );
}

export default Header;
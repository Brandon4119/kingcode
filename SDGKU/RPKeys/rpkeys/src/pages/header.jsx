import "./header.css";

function Header() {
    return (
        <div className="header">
            
            <div className="logo">
                <h1>RPKeys</h1>
            </div>

            <div className="nav-bar">
                <nav>
                    <a href="">Home</a>
                    <a href="">Starting Level</a>
                    <a href="">Intermediate Level</a>
                    <a href="">Advance Level</a>
                </nav>
            </div>
        </div>
    );
}

export default Header;
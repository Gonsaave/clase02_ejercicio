const Menu = () => {

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
            <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarMenu"
                aria-controls="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                    <button className="nav-link btn-outline-default" aria-current="page">Home</button>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    );
}

export default Menu
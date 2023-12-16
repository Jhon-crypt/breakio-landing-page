export default function Header() {

    return (

        <>

            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a id="breakio-navbar" className="navbar-brand" href="#">break<span id="nav-span-text">iO</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div id="menu" className="navbar-nav ms-auto">
                            <a className="nav-link active me-3" href="#">Explore</a>
                            <a className="nav-link active me-3" href="#">Solutions</a>
                            <a className="nav-link active me-3" href="#">About</a>
                            <a className="nav-link active me-3">Blog</a>
                            <a className="nav-link active me-3">Login</a>
                            <a id="signup-btn" className="nav-link active me-3">Start Now</a>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    )

}
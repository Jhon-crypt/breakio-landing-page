export default function IntroHero() {

    return (

        <>

            <div className="px-4 pt-5 mt-3 text-center mb-5">
                <h1 id="intro-hero-text-heading" className="display-4 fw-bold text-body-emphasis">
                    It is time to take a break
                </h1>

                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Build your meditation skills with an app that gives you all you need!</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <div className="input-group input-group-lg mb-3">
                            <input id="intro-hero-input" type="text" className="form-control me-3" placeholder="Search"/>
                            <button id="intro-hero-serach-btn" className="btn btn-success" type="submit">
                                <span id="intro-hero-btn-text">Start Now</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="container">
                        <img src="/Picture.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="1420rem" height="400px" loading="lazy" />
                    </div>
                </div>
            </div>
            <br />

        </>

    )

}
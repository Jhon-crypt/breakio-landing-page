export default function SecondHero() {

    return (

        <>

            <div className="px-4 pt-5 mt-5 text-center border-bottom mb-5">
                <h2 id="second-hero-text-heading" className="display-4 fw-bold text-body-emphasis">
                    Get better everyday
                </h2>

                <div className="col-lg-6 mx-auto">
                    <p id="second-hero-text-lead" className="lead mb-4">
                        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed
                        turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">

                        <button id="intro-hero-serach-btn" className="btn btn-success" type="submit">
                            <span id="intro-hero-btn-text">Start Now</span>
                        </button>

                    </div>
                </div>
                <div className="overflow-hidden" style={{"max-height" : "30vh"}}>
                    <div className="container px-5">
                        <img src="/desktop.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
                    </div>
                </div>
            </div>
            <br />

        </>

    )

}
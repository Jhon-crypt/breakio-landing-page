import UserFeedBackCards from "../card/userFeedbackCards"

export default function UserFeedbackHero() {

    return (

        <>

            <div className="px-4 pt-5 mt-3 mb-5">
                <h1 id="feedback-hero-text-heading" className="text-center display-4 fw-bold text-body-emphasis">
                    Stories from our users
                </h1>

                <div className="col-lg-6 mx-auto">
                    <p className="text-center lead mb-4">
                        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed
                        turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum
                        sollicitudin.
                    </p>
                </div>
                <br />
                <div className="">
                    <UserFeedBackCards />
                </div>
            </div>
            <br />

        </>

    )

}
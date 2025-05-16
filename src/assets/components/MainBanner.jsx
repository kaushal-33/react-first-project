import Header from "./Header"

const MainBanner = (props) => {
    return (
        <section className='mainBanner position-relative'>
            <div className="container">
                <div className="position-relative z-1 py-4">
                    <div className="row gy-2 py-5">
                        <div className="col-lg-7">
                            <div>
                                <h6 className="text-light fs-5 mb-3 text-uppercase">{props.shortTitle}</h6>
                                <h1 className="text-light text-uppercase mb-4 display-1 fw-bold">{props.heroTitle}</h1>
                                <hr className="border w-75" />
                                <p className="text-secondary mt-3 mb-5">{props.heroDiscription}</p>
                                <button className="hero-btn btn border border-secondary py-3 px-4 text-uppercase text-light rounded-pill">{props.heroBtnDiscription}
                                    <span className="ps-2"><i className="ri-arrow-right-line"></i></span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="position-relative">
                                <img src={props.heroImage} alt="Main Image" width="100%" className="hero-img"/>
                                <div className="campaign-label p-3 position-absolute bottom-0 text-light end-0">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h4 className="text-uppercase m-0 text-white fs-1 ">{props.totalCampaign}k</h4>
                                        <span className="campaign-btn"><i className="ri-arrow-right-up-line"></i></span>
                                    </div>
                                    <p className="m-0 fs-sm">Successful Campaigns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainBanner
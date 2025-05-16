
const AboutCard = (props) => {
    return (
        <div className="col-lg-6">
            <div className="about-card p-4 text-secondary h-100 rounded">
                <span className="text-warning fs-1">
                    <i className={props.icon}></i>
                </span>
                <h6 className="text-white mb-4 mt-2">{props.title}</h6>
                <p className="text-white m-0">{props.disc}</p>
            </div>
        </div>
    )
}

export default AboutCard
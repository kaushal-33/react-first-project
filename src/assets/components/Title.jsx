
const Title = (props) => {
    return (
        <div>
            <h6 className="text-secondary text-uppercase m-0 base-title position-relative d-inline-block">{props.baseTitle}</h6>
            <h3 className="text-uppercase text-light mt-2">{props.mainTitle}</h3>
        </div>
    )
}

export default Title
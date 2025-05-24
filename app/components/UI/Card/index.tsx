import "./styles.scss";

const Card = ({children}: {children: any}) => {
    return (
        <div className="card">{children}</div>
    )
}

export default Card;
function MenuCard (props) {
    return (
        <div className="card" style={{display: "flex", flexDirection: "column"}}>
            <img className="image" src={props.source}/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>Order to delivery #{props.num}</p>
        </div>
    )
}

export default MenuCard
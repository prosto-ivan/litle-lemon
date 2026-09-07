
import Rating from '../components/Rating'

function Testimonial (props) {
    return (
        <div className="testimonial">
            <h3>{props.name}</h3>
            <h4>{props.dish}</h4>
            <p>{props.coment}</p>
            <Rating stars={props.stars}></Rating>
        </div>
    )
}

export default Testimonial
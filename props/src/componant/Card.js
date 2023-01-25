import {contact} from "../Contact";
function Card(props){
    return <div>
        <h2>{props.name}</h2>
        <img
           src={props.img}
          />
        <p>{props.number}</p>
        <p>{props.email}</p>
    </div>
}

export default Card;
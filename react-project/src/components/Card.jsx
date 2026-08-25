function Card(props){
    return(
        <div className={props.style}>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <button>{props.btn}</button>
        </div>
    )
}
export default Card;

// props = {
//     title = 'Card 1 title',
//      
// }
// props.title
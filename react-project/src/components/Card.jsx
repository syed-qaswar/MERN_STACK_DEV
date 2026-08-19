function Card(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet quam dignissimos soluta.</p>
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
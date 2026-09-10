function Card({type, data}){
    // props = {'product', {title, desc, price}}
    console.log(type)
    console.log(data)
    return(
        <>
        {type === 'products' && (
            <div style={{ padding: '10px', border: '2px solid black'}}>
                <h1>{data.title}</h1>
                <span>{data.desc}</span>
                <span>{data.price}</span>
            </div>
        )}    
        {type === 'users' && (
            <div style={{ padding: '10px', border: '2px solid black'}}>
                <h1>{props.title}</h1>
                <span>{props.desc}</span>
                <span>{props.price}</span>
                <button>Click here</button>
            </div>
        )}    
        
        </>
    )
}
export default Card;
import Card from '../components/Card';

function Home(){
    // array of objects
    const services = [
        {
            id: 1,
            title : 'Web Development',
            desc : 'Modern MERN stack development services',
            btn : 'Add to cart',
            style: 'bg-red-200'
        },
        {
            title : 'SEO',
            desc : 'Modern SEO services with AI',
            btn : 'Add to cart'
        },
        {
            title : 'Python',
            desc : 'Advanced python services',
            btn : 'Add to cart'
        },
        {
            title : 'Cyber Security',
            desc : 'Best Cyber security services',
            btn : 'Add to cart'
        },
        {
            title : 'Graphics',
            desc : 'Best Cyber security services',
            btn : 'Add to cart'
        }
    ]

    return(
        <>
            <main>
                <section>
                    <div>
                        <h1></h1>
                        <p></p>
                    </div>
                    {/* <div className='grid grid-cols-3'>
                        <Card title='Card 1 Title' btn='Card 1 btn'/>
                        <Card title='Card 2 Title'/>
                        <Card title='Card 3 Title'/>
                    </div> */}
                    {/* efficient approach to use props */}
                    <div className='grid grid-cols-4'>
                        {services.map((service) => (
                            <Card 
                                key = {service.id}
                                // spread operator to unpack properties
                                {...service}
                                // pass the whole object as a prop
                                // props = {service}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    )

}

export default Home;


// function greet(name){
//     console.log(`Hi, ${name}`)
// }
// greet('Ali')
// greet('Ahmed')

// service = {
//     title : 'Web Development',
//     desc : 'Modern MERN stack development services',
//     btn : 'Add to cart'
// }
// <Card 
// title : 'Web Development'
//  desc : 'Modern MERN stack development services'
//  btn : 'Add to cart'
//  />
// <Card 
// title : 'Web Development'
//  desc : 'Modern MERN stack development services'
//  btn : 'Add to cart'
//  />

[<Card />, <Card /> ]
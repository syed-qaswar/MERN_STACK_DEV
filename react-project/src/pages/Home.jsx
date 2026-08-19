import Card from '../components/Card';
import Navbar from '../components/Navbar'
function Home(){
    return(
        <>
            <main>
                <section>
                    <div>
                        <h1></h1>
                        <p></p>
                    </div>
                    <div className='grid grid-cols-3'>
                        <Card title='Card 1 Title' btn='Card 1 btn'/>
                        <Card title='Card 2 Title'/>
                        <Card title='Card 3 Title'/>
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
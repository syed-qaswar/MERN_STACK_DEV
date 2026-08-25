import Card from "../components/Card";

function About(){
    return(
        <>
            <main>
                <section>
                    <div>
                        <h1>Our services</h1>
                        <p>Best services in town</p>
                    </div>
                    <div>
                        <Card title='About Card 1' btn='Add to cart'/>
                        <Card />
                        <Card />
                    </div>
                </section>
            </main>
        </>
    )
}

export default About;
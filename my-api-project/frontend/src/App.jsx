import Card from "./components/Card";
import { useEffect, useState } from "react";

function App(){
  const [products, setProducts] = useState([]);
  const [users, setUser] = useState([]);

  useEffect(() => {
   

    async function getData(){
      const [productResponse, userResponse] = await Promise.all([
        fetch('http://localhost:5000/api/products'),
        fetch('http://localhost:5000/api/user')
      ])

      const productData = await productResponse.json()
      const userData = await userResponse.json()
      setProducts(productData)
      setUser(userData)
    }
    getData();


    // Product api ->  wait -> Product response | User api -> wait -> User response

    // async function getData(){
    //   let productResponse = await fetch('http://localhost:5000/api/products');
    //   const productData = await productResponse.json()
    //   setProducts(productData)

    //   // for the users
    //   let userResponse = await fetch('http://localhost:5000/api/user');
    //   const userData = await userResponse.json()
    //   setUser(userData)
    // }
    // getData();
  }, []);



  return(
    <>
      {products.map((product) => (
        // {title, description, price}
        <Card 
          key = {product.id}
          type = 'products'
          data = {product}
        />
      ))}

      {users.map((user) => (
        // {name, email, city}
        <Card 
          key = {user.id}
          type = 'users'
          data = {user}
          
        />
      ))}
      
    </>
  )
}

export default App;
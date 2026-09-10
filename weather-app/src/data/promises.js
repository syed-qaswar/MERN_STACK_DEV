// Promises in JS
// fetch() -> request -> APi -> reponse (2s)
// 2s -> Weather is loading -> Weather Forecast


// --using then()
// const user_data = new Promise((resolve, reject) => {
//     let error = true;
//     console.log('Establishing a connection')

//     setTimeout(() => {
//       if (!error) {
//         resolve({ username: "Ahmed", password: 123 });
//       } else {
//         reject("JS encountered an error");
//       }
//     }, 2000);
//   });

//   user_data
//     .then((user) => {
//       console.log(user);
//       return user.username;
//     })
//     .then((user) => {
//       console.log(user);
//     })
//     .catch((error) => {
//         console.log(`Error: ${error}`)
//     })

// --modern way with async
function fetchUserData(){
    return new Promise((resolve, reject) => {
    let error = true;
    console.log('Establishing a connection')

    setTimeout(() => {
      if (!error) {
        resolve({ username: "Ahmed", password: 123 });
      } else {
        reject("JS encountered an error");
      }
    }, 2000);
  });
}
async function main(){
    try{
        const result = await fetchUserData()
        console.log(result)
    }
    catch(error){
        console.log(`Error: ${error}`)
    } 
};
main()


export {user_data};
// promises x async

// API URL -> server -> response -> error 404 -> error = true
// API URL -> server -> response -> 200 -> error = false

// weather api -> server -> status code = 200
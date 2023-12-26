const jokeEl= document.getElementById('joke')
// .getElementsByTagName('p')
const jokeBtn= document.getElementById('btn')

generatejoke()
jokeBtn.addEventListener('click', generatejoke)


//USING Async/await
async function generatejoke()
{
    const config={
        headers:{
            'Accept':'application/json',
        },
       }
   const response= await fetch('https://icanhazdadjoke.com', config)
   const data = await response.json()
    jokeEl.innerHTML= data.joke
       
          
   
}




//Using .then
// function generatejoke()
// {
//     const config={
//         headers:{
//             'Accept':'application/json',
//         },
//        }
//    fetch('https://icanhazdadjoke.com', config)
//    .then((response)=>response.json())
//    .then((data)=>//console.log(data)
//       {
//            jokeEl.innerHTML=data.joke
       
//           }
      
   
//    )
// }


// generatejoke()
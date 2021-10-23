

const url =  'https://dog.ceo/api/breeds/image/random'
    
fetch(url)
.then(res =>res.json())
.then (mascostas =>{
  console.log(mascostas);
 
})

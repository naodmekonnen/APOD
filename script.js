let displayimg = document.querySelector("#search")
console.log(displayimg)
displayimg.addEventListener('click',()=>{
  // get value from the date picker
  let date = document.getElementById('chosenDate').value
      // value
  
  console.log("clicked")
  
  fetchAPIdata(date)                             
}) 


const title = document.querySelector("#title")
const description = document.querySelector("#description")
const photo = document.querySelector("#photo")
const copyright = document.querySelector("#copyright")
// let theDate = '2021-01-01'

function fetchAPIdata(date){
     let theDate = date
     fetch(`https://api.nasa.gov/planetary/apod?api_key=zd6rddirHaIxgMA4cUeRATEfb5jLDArZM7hhjTje&date=${theDate}`)
     .then(response=>response.json())
     .then(json=>{
     console.log(json)
     displayAPIdata(json)
   
       
function displayAPIdata(data){
   title.innerHTML=data.date;
   title.innerHTML=data.title;
   description.innerHTML=data.explanation;
   photo.innerHTML = `<img src="${data.hdurl}">`
   copyright.innerHTML = data.copyright;
   
 
// console.log(photo.innerHTML)
   } 
     })}

// function displayAPIdata(data){
//    title.innerHTML=data.date;
//    title.innerHTML+=data.title;
//    description.innerHTML+=data.explanation;
//    photo.innerHTML += `<img src="${data.hdurl}">
 

//    } 

// // fetchAPIdata()
// "${data.hdurl}
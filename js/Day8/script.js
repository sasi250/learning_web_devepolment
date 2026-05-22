
// try {
//     console.log(y);
// }catch(err){
//     console.log(err);
// }
// console.log("hello");



// function myFun(){
//     console.log(-1);
// }
//  setTimeout(myFun,2000) //set timeout give once 
//  setInterval(myFun,2000) //setinterval give repeative
//  clearInterval

// fetch('https://dog.ceo/api/breeds/image/random')
//      .then((res) =>res.json())
//      .then((data) => console.log(data.status))
//      .catch(err =>console.log(err))


let display = document.getElementById("display")
const changeImage = async() => {
    try{
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json()
        display.style.backgroundImage = `url(${data.message})`
    } catch(err){
        console.log(err);
    }
}
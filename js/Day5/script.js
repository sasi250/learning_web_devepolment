 console.log(document.body);
let para = document.getElementsByTagName("p")
console.log(para[0]);
let heading = document.getElementsByTagName("h1")[0]
console.log(heading);
let priyanka = document.getElementsByClassName("priyanka")
console.log(priyanka[0]);
let sasi = document.getElementById("sasi")
//->innerText is use to change text 
sasi.innerText = "hello"
sasi.innerText = "<u>hello</u>"
// //->innerHTML is use for underline or edit the text
sasi.innerHTML = "<u>hello</u>"

let paras = document.getElementsByTagName("p")
paras[4].innerHTML = "hello"
document.getElementsByClassName("para")[1].innerHTML="Welcome"
document.getElementsByClassName("para")[0].innerHTML="Welcome"
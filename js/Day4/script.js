let arr = [10,412.123,"hello",true]
arr.push(30)//add in last
console.log(arr);
arr.pop(10)//remove last element
console.log(arr);
arr.shift()// remove first element
console.log(arr);
arr.unshift(30)// add in first
console.log(arr);
console.log(arr.length);//show arr length

//creating objects
let obj = {
    id: 1,
    name: "sasi",
    age: 16,
    salary: 12345323,
    techStact:["Python","HTML","CSS"]
}
console.log(obj.techStact[0]);
console.log(obj.name);
console.log(obj.age);


//creating multiple object in single user

let data= [
    {
    id: 1,
    name: "sasi",
    age: 22,
    salary: 12345600,
    techStact:["Python","HTML","CSS"]
    },
    {
    id: 2,
    name: "Priyanka",
    age: 23,
    salary: 1234500,
    techStact:["Python","HTML","CSS"]
    },
    {
    id: 3,
    name: "buddi",
    age: 16,
    salary: 12345323,
    techStact:["Python","HTML","CSS"]
    },

]
console.log(data[2]);
console.log(data[0].techStact[0]);
console.log(data[2].salary);
console.log(data[1].age);


//Create an array of 5 student names and print them using a for loop.
let arr1=["sasi","priya","priyanka","nalluri","buddi"]
for (i=0;i<=5;i++){
    console.log(arr1[i])
}


// Add, remove, and update elements in an array using:
// push()
// pop()
// splice()
let arr2=[10,20,30,40,50]
arr2.push(60)
arr2.pop()
arr2.splice(0,2)
console.log(arr2)



// Create an object for a mobile phone with properties:
// brand
// model
// price
// Print all values in the console.
let phone=[
    {
        brand:"realme",
        model:"16promax",
        price:15000
    },
    {
       brand:"miui",
        model:"14promax",
        price:10000 
    },

]
console.log(phone[0])
console.log(phone[1])
console.log(phone[1].price)
console.log(phone[0].model)


// Write a program using switch statement to display the day of the week.
// let arr3=["mondy","tue","wed","thr","fri","sat"]
let day=[1,2,3,4,5,6,7]
switch(1){
    case 1:
        console.log("mon")
        break;
    case 2:
        console.log("tue")
        break;
    default:
        console.log("Invalid")
}

// Create an array of numbers and write a function to find the largest number in the array

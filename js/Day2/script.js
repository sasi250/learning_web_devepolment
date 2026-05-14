console.log("hello")
var num = 121
var rev = 0
var t=num
var fc=0
for (var i=2; i<num; i++){
    if (num%i==0){
        fc++
    }
}if (fc==0){
    console.log(num+ "is a prime number")

}else{
    console.log(num+ "is a Not prime number")
}


function is_prime(s){
    for (var i = 2;i<=Math.sqrt(s) ; i++){
        if (s%i==0){
            return false;
        }
    }
    return true;
}

var num=5;
if (is_prime(num)) {
    console.log(num+"is a Prime Number");
}else{
    console.log(num + "is not a prime Number");
}

while (num>0){
    r=num%10
    rev=rev*10+r
    // num=(num-r)/10
    num= Math.floor(num/10)
   

}
if (rev==t){
    console.log("palindrom")
}else{
    console.log("not")

}
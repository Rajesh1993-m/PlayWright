/*
function example()
{
    let x=1;
    if(true)
    {  
     x=2;
    }
    console.log(x);
}
example();
*/
const greet=function(name)
{
return "hello";
}
console.log(greet);

// funcitoms


function name() {
    return (
      "Hellow word"
    )
}
console.log(name());


let a=[1,2,3,4];
let sum=0; 
for(let i=a.length-1;i>=0;i--)
{
    sum=sum+a[i];
   
}
console.log(sum);

//count no of digits
    let b=[1,2,3,4];
    console.log(b.length);

const g=function(names)
{
   return names+"world";
}
console.log(g("Hi"));

function c(data)
{
    return data+"new";
}
console.log(c("check"));

let k = 123456;
let count = 0;

while (k > 0) {
    k = parseInt(k / 10);
    count++;
}

console.log(count);

//arrays
const fruits=["Apple","Banana","carrot","Pineapple"];
/*
fruits.push("Mango");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("sappota");
console.log(fruits);
fruits.shift();
console.log(fruits);
*/

const removeItmes = fruits.splice(0,1);
console.log(removeItmes);

//asynchronous
setTimeout(function a()
{

 console.log("how are you")
},2000)
console.log("fine");

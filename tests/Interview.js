/*
const person=
{
name:"john",
age:30,
greet:function()
{
    console.log("Hello Im"+this.name);
}
}
person.greet();
*/

//2nd - Reverse number
/*
let num=1234;
let rev=0;
while(num!=0)
{
    rev=rev*10+num%10;
    num=num/10;
}
console.log(rev);
*/


//3rd - palindrome number
/*
let num=121;
let orgnum=num;
let rev=0;
while(num!=0)
{
    rev=rev*10+num%10;
    num=num/10;
}
if(orgnum==rev)
{
    console.log("palindrome");
}
else
{
console.log("not palindrome");
}
*/
//4th-reverse string
let s="madam";
let rev=" ";
for(let i=s.length-1;i>=0;i--)
{
    rev=rev+s.charAt(i);
}
console.log(rev);

//print even and odd numbers
let a=[10,11,12,13,14];
for(let i=0;i<a.length;i++)
{
    if(a[i]%2!==0)
    {
        console.log(a[i]);
    }      
}




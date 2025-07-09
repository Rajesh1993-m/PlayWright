const flag=true;

if(!flag)
{
    console.log("satsified");
}
else
{
    console.log("not satsified");

}

let i=1;
while(i<10)
{
console.log(i);
i++;
}

let j=1;
do
{
console.log(j);
i++;

}while(j>10);

console.log("***");
let n=0;
for(let k=1;k<=100;k++)
{

    if(k%2==0 && k%5==0)
    {
        n++;
    console.log(k);
    if(n==3)
    {
        break;
    }
    }
}
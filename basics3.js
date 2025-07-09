let marks=[10,20,30,40,50];
console.log(marks[2]);

let sum=0;
for(let i=0;i<marks.length;i++)
{
  //  console.log(marks[i]);
    sum=sum+marks[i];
}
console.log(sum);

console.log(marks.slice(1,4));
 

//chnage the value
marks[3]=35;
console.log(marks[3]);

//length of an array
console.log(marks.length);

//Add new element
marks.push(50);
console.log(marks);

//delete an element
marks.pop();

//Add new element in beginning
marks.unshift(12);
console.log(marks);

//check which index is present in value
console.log(marks.indexOf(20));

//print true or false
console.log(marks.includes(120));


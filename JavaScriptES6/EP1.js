//Arrow Function

//แบบเดิม
// function fullname(fname,lname){
//     return fname+lname
// }

// console.log(fullname("nut","chs"));

//แบบใหม่
fullname=(fname,lname)=>fname+lname

setAge=(age)=>"อายุ ="+age

console.log(fullname("nut","chs"));
console.log(setAge(20));
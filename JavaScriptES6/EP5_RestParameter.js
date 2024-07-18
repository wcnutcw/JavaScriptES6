//Rest Parameter

sunmmation=(...numberArr)=>{
    let total=0
    for(let number of numberArr) total+=number //0+500+1000
    return total
}

console.log(summation(50,100));
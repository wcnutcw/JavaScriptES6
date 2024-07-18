// Array Map

const numbers = [10,20,30,40]

const result=numbers.map(e=>{
    const a=e*2
    return a
})

console.log(`Array map = ${result}`)

// [10,20,30,40]
// result =>> [20,40,60,80]

const data =[
    {day:"01/06/2024",weather:"แดดร้อน",temp:27},
    {day:"02/06/2024",weather:"ฝนตก",temp:23},
    {day:"03/06/2024",weather:"หมอก",temp:18}
]

const result2 = data.map(e=>e.weather)

console.log(result2);
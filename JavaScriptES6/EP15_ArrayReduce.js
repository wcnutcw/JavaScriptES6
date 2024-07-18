// Array Reduce : นำ Array เข้ามาทำงาน แล้วส่งสมาชิกตัวเดียวตอบกลับออกไป
// array.reduce((ค่าที่ถูกประมวลผล,e)=>{},ค่าเริ่มต้น)    

const data=[10,20,30,40]

const summation=data.reduce((value,e)=>{        // เริ่มต้นที่ค่า 0 คือ  value=0 : ค่าที่ถูกประมวลผลจะสะสมตาม return 0=>10=>30=>60=>100 (รอบสุดท้ายจะถูกreturnออกไป)
    console.log(value)
    const total =e+value
    return total
},0)

console.log(summation);


const cart =[
    {name:"กระเป๋า",price:500},
    {name:"หนังสือ",price:900},
    {name:"กล้องถ่ายรูป",price:5000}
]

const summation2 = cart.reduce((value,e)=>e.price+value,0)
console.log(summation2)
// push , pop , shift , unshift

//push  : add สมาชิกเข้าไปด้านหลัง
const data=[10,20,30]
console.log(data)
data.push(500)
console.log(data)
data.push(...[100,200,300])
console.log(data)


//pop : remove สมาชิกที่อยู่หลังสุด
data.pop()
console.log(data)


//shift : remove สมาขิกที่อยู่หน้าสุด
data.shift()
console.log(data)


//unshift : add สมาขิกเข้าไปด้านหน้า
data.unshift(999)
console.log(data)
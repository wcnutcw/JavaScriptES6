// splice & slice
// splice(ตำแหน่งที่จะลบ,จำนวนที่จะลบ,สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่ลบ)
// slice(ตำแหน่งที่เริ่มต้น,ตำแหน่งสุดท้าย-1)

const data=[10,20,30,40,50]
console.log(data);
data.splice(1,3,999)
console.log(data);
const lastdata=data.slice(0,2)
console.log(lastdata);





// การ Loop Array
// For Loop , ForEach , ForOf

const data=[10,20,30,40,50]

// for(let i=0;i<data.length;i++){
//     if (data[i]>=30) break
//     console.log(`ลำดับที่ ${i+1} = ${data[i]}`);
// }


// forEach : ดึงสมาชิกในArrayมาทีละตัวทำการวนลูป  ** ไม่สามารถเขียน if break continue ใน forEach ได้ **
// data.forEach(element =>{
//     console.log(`สมาชิกใน Array Data = ${element}`);
// }
// )


//ForOf : นำ ForLoop ForEach มาเขียนรวมกัน **สามารถเขียน break continue ได้**

for (const element of data){
    if(element>=30) break
    console.log(`สมาชิกใน Array Data = ${element}`)
}
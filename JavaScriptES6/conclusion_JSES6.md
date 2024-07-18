Block Scope
    กำหนดตัวแปร
        let : ประกาศตัวแปร โดยตัวแปรเปลี่ยนค่าได้
        constant : ประกาศตัวแปน โดยค่าตัวแปรคงที่

Arrow Function : การกำหนดฟังก์ชันให้มีความกระชับมากกว่าเดิม ( ไม่ต้องใส่ปีกกาหรือreturn ใช้ในกรณีที่มีคำสั่งไม่เยอะ )


String 
    MultiLine String : สามารถทำงานกับข้อความยาวๆได้ โดยการขึ้นบรรทัดใหม่แล้วไม่มีข้อผิดพลาดเกิดขึ้นโดยใช้ `
    Interpolation : สามารถแทรกตัวแปรลงในพื้นที่ String ได้โดยใช้ ${ชื่อตัวแปร} ร่วมกับ `


Spread Operator : ใช้ในการกระจายสมาชิกใน Array ออกมาใช้งานโดยเติมเครื่องหมาย ...ด้านหน้าตัวแปร Array
                เช่น               
                    const newArr=[100,200,300]
                    const data=[10,20,...newArr]

                    console.log(data)    


Rest Parameter : ใช้ในการส่งค่า Parameter เข้าไปทำงานใน Function โดยไม่จำกัดจำนวนโดยใช้เครื่องหมาย ...
            เช่น 
                    sunmmation=(...numberArr)=>{
                        let total=0
                        for(let number of numberArr) total+=number
                        return total
                    }

                    console.log(summation(50,100));


Destructuring (การสลายโครงสร้าง) คือ การกำหนดค่าที่อยู่ภายใน Array หรือ Object ให้กับตัวแปรโดยใช้วิธีการจับคู่ตัวแปรกับค่าในArray/Object

    เช่น     
            const colors=["ขาว","แดง"]
            const [a,b]=colors

Array
        .join("สัญลักษณ์คั่นระหว่างสมาชิกในArray / ไม่ใส่ก็ได้") : แปลงเป็น string


        ชื่อArray.concat(ชื่อArrayที่ต้องการนำมาต่อ) : ต่อArray 

        .push() : เพิ่มสมาชิกเข้าไปด้านหลัง

        .pop() : ลบสมาชิกที่อยู่ด้านหลังสุด

        .shift() : ลบสมาชิกที่อยู่หน้าสุด

        .unshift() : เพิ่มสมาชิกเข้าไปด้านหน้า

        splice(ตำแหน่งที่จะเริ่มลบ,จำนวนที่จะลบเริ่มนับจากตัวที่กำหนดตำแหน่งที่ลบ,สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่ลบ) : ลบสมาชิกแบบกำหนดช่วง 

        slice(ตำแหน่งที่เริ่มต้น,ตำแหน่งสุดท้าย-1) : สมาชิกที่ต้องการเก็บ  (ต้องมีตัวแปรมารับค่า)


Loop
    for : การวนลูป
    forEach : ดึงสมาชิกในArrayมาทีละตัวทำการวนลูป  ** ไม่สามารถเขียน if break continue ใน forEach ได้ **
        เช่น
            const data=[10,20,30,40,50]
            data.forEach(element =>{
                console.log(`สมาชิกใน Array Data = ${element}`);
            }
            )

    ForOf : นำ ForLoop ForEach มาเขียนรวมกัน **สามารถเขียน break continue ได้**
        เช่น
            for (const element of data){
                if(element>=30) break
                console.log(`สมาชิกใน Array Data = ${element}`)
            }


ค้นหาข้อมูลใน Array
        indexOf(ข้อมูล) : ผลค้นหาจะได้ตำแหน่ง  Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
        find(ข้อมูล) : ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
        findIndex(ข้อมูล) : ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1


Array Map : นำสมาชิกใน Array มาทำการเปลี่ยนแปลงค่า แล้วนำมาสร้างเป็น Array ใหม่
    เช่น
            const numbers = [10,20,30,40]

            const result=numbers.map(e=>{
                const a=e*2
                return a
            })

            console.log(`Array map = ${result}`)

            console.log(result)
                                    // [10,20,30,40]
                                    // result =>> [20,40,60,80]


Array Filter : คัดกรองสมาชิกภายใน array ตามเงื่อนไขที่กำหนด แล้วจัดเก็บใน Arrayใหม่
        เช่น
            const data=[10,20,30,40]

            const result=data.filter(e=>e>20)
            // const result=data.filter(e=>{
            //     return e>20
            // })

            console.log(result)


Array Reduce : นำ Array เข้ามาทำงาน แล้วส่งสมาชิกตัวเดียวตอบกลับออกไป  คือ array.reduce((ค่าที่ถูกประมวลผล,e)=>{},ค่าเริ่มต้น)
เช่น

    const data=[10,20,30,40]

    const summation=data.reduce((value,e)=>{       
                                                     // เริ่มต้นที่ค่า 0 คือ  value=0 : ค่าที่ถูกประมวลผลจะสะสมตาม return       0=>10=>30=>60=>100 (รอบสุดท้ายจะถูกreturnออกไป)
    
        console.log(value)
        const total =e+value
        return total
    },0)
        //เขียนแบบลดรูปรูป
        const summation=data.reduce((value,e)=>e+value,0)
        
    console.log(summation);


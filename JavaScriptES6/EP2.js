//ทำงานกับ Object

//ตัวแปรเก็บข้อมูล

const username="nutchs"
const age=25
const address="กรุงเทพมหานคร"

const customer ={
    customerName:username,
    age,
    address,
    showData(){
        console.log("ข้อมูลลูกค้าชื่อว่า ="+this.customerName)
    }
}

console.log(customer)
customer.showData()
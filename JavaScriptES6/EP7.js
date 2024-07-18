//Default Parameter

getDataCustomer=(customerName,customerAddress="chiangmai" )=>{    //Default Parameter คือ  chiangmai
    const address=`ชื่อลูกค้า:${customerName}
    ที่อยู่:${customerAddress}`
    return address
}

console.log(getDataCustomer("nut","bangkok"));
console.log(getDataCustomer("jojo"));
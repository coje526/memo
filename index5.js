function addmoney(p1,p2,discount){
  let result = p1 + p2 - discount
  let message = '普通會員'

if (result >= 50000){
    message = 'VVIP'
    return message
}
if (result >= 20000){
    message = 'VIP'
    return message
}
    return message
}


let msg = addmoney (10000,10000,1000)
console.log('msg',msg)
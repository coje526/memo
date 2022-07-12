
let myName ='鄭任宏大ＧＧ'
console.log(myName)
let condition = true || false
console.log(condition)
let appleClass = ['kiki','levi','nick']
console.log('蘋果班同學：',appleClass)

let score = 100
let isBoy = true
console.log(score === 100 && isBoy)
if (score === 100 && isBoy){
    console.log('甲')
}else if (score >= 90){
    console.log('乙')
}else if (score >=60){
    console.log('丙')
}else{
    console.log('不及格')
}

let number = 80
switch (true) {
    case number === 100:
        console.log('甲')
        break;
    case number >=90:
        console.log('乙')
        break;
    case number >=60:
        console.log('丙')
        break;
    default:
        console.log('沒去考試')
        break;
}
for(let i = 1; i < 10;i++){
    for(let j = 1; j < 10;j++){
        console.log(i +' * '+ j +' = '+ i * j)
    }
}

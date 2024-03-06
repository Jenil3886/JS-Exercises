// write a JS program find the greatest number of three given numbers

function findGreatest(a, b, c) {
    if (a >= b && a >= c) return a
    else if (b >= a && b >= c) return b
    else return c
}

let result1 = findGreatest(10, 20, 30)
let result2 = findGreatest(4, 40, 40)
let result3 = findGreatest(35, 35, 35)

console.log(result1)
console.log(result2)
console.log(result3)

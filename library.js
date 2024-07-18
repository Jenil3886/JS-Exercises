function areaOfCircle(a, b, c) {
a = 10
b = 20
c = 25

let p = (a + b + c) / 2

let areaOfCircle = Math.ceil(Math.sqrt(p * (p - a) * (p - b) * (p - c)))
console.log(areaOfCircle)
}

function areaOfRectangle(x, y) {
    x = 10
    y = 20
    
    let areaOfRectangle = x * y
    console.log(areaOfRectangle)
}

module.exports = {
    areaOfCircle,
    areaOfRectangle
}

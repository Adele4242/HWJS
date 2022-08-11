
//first

let name = ['Анастасия']
name.splice(0,1,'Максим')
name = name.join('')
console.log(name)


//second

let a = 'Я хочу быть большим и сильным'
console.log(a.length)

//third

let a1 = '15'
let b = 15
let c = 10
console.log(a1 + b + c) //151510, конкатенация
console.log(b + c + a1) //2515, сначала 'b' сложили с 'c', а "+а1" числовым значением, вместо сложения


//fourth ??? second???
let d = 'Я хочу быть большим и сильным'
console.log(a.length)


//fifth
let f = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
console.log(f[1][0])


//sixth
//
let person = {
name: 'Ivan',
age: 35,
gender: 'male',
job: 'web-developer'
}

for (let key in person){
console.log(key, person [key])
}

//seventh

let surname = 'Серебров'
surname = surname.split('')
surname[surname.length - 1] = 'фф'
surname = surname.join('')
console.log(surname)


//eighth

let g = 'Я люблю торт'
console.log(g.includes('торт'))


//ninth

let h = '10223040'
console.log(h.split('').reverse().join(''))

//tenth

let age = 25
console.log(`Мне ${age} лет!`)

//eleventh

let i = ' asdasdsadsadsadsadc'
i = i.split('')
i.splice(0, 1)
console.log(i)


//twelfth

let j = [2,1,3,4,5]
//[1, 2, 3, 'a', 'b', 'c', 4, 5]
j = j.sort()
j.splice(3, 0, 'a','b', 'c')
console.log(j)


//thirteenth

let k = 'Мой город самый лучший город в России!'
console.log(k.indexOf('город', 9)) //23, нашел второй "город"

//fourteenth

let l = 'House'
l = l.split('')
l.pop()
l.shift()
l = l.join('')
console.log(l)

//fifteenth

//let m = 4
//let n = 2

//let m = 3
//let n = 4

//let m = 4
//let n = 4

//if (m > n){
//console.log(m + n)
//} else if (m == n){
//console.log('Числа одинаковые')
//} else {
//console.log(m * n)
//}



//sixteenth

let o = [12, '12', true, undefined, 'Ivan', 35]
for (let item of o){
console.log(item)
}















































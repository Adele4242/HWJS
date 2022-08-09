

//first

let a = [1, 2, 3, 4, 5]
for (let i = 0; i < a.length; i++){
console.log(a[i])
}

//second

let b = [1, 2, 3, 4, 5]
let result = 0
for (let i = 0; i < b.length; i++){
result = b[i]+ result
}
console.log(result)


//third

let i = 0
while (i < 3) {
i++
console.log(`number ${i}!`)
}



//fourth

let c = [-2,7,9,5,8,1,12,15,17,3]

for (let i = 0; i < c.length; i++){
if (c[i] < 0 || c[i] < 10) {
console.log(c[i])
    }
}

//fifth

for (let i = 0; i <= 10 ; i++) {
 if (i % 2 == 0){
  console.log(i)
 }
}

//sixth
result1 = 0
for (let i = 0; i <= 100 ; i++) {
result1 += i
}
console.log(result1)

//seventh

let cars = ['BMW', 'Mersedes', 'Opel', 'Mazda', 'FIAT', 'Ferarri', 'Reno']
cars2 = []
for (let i = 0; i < cars.length; i++) {
if (cars[i] === cars[i].toUpperCase()) {
cars2 = [...cars2, cars[i]]
}
}
console.log(cars2)


//eighth

let arr = [2,3,4,5,6,7]
let arr2 = []
for (let i = 0; i < arr.length; i++) {
 if (arr[i] != 5){
 arr[i] *= 2
 }
 if (arr[i] % 2 == 0) {
       arr2 = [...arr2, arr[i]]
      }
}
 console.log(arr2)



//ninth

let d = [-2, 7, '9б', 'Vlad', 1, 12, 15, 'Ivan', 17, 3]
d2 = []
for (let i = 0; i < d.length; i++) {
if (typeof d[i] === 'number') {
continue;
} else {
d2 = [...d2, d[i]]
}
}
console.log (d2)

//tenth

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
for (let i = 0; i < week.length; i++) {
if (week[i] == 'Суббота' || week[i] == 'Воскресенье'){
console.log('Выходной')
} else{
console.log(week[i])
}
}

//eleventh

let names = ['Наташа','Анастасия','Дмитрий','Максим']
for (let i = 0; i < names.length; i++) {
if (names[i] == 'Наташа'){
 continue
}
console.log(names[i])
}

//twelfth  !!!

let f = ['Наташа', 'Анастасия', 2, 'Максим', 4]
for (let i = 0; i < f.length; i++) {
f.sort()
}
console.log(f)


//thirteenth

for (let i = 2; i <= 10; i++) {
if (j = i * 5)
 console.log(5 + '*' + i + '=' + j)
}










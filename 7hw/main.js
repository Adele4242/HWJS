//first

function val (a) {
return typeof a
}
console.log(val('Adele'))
console.log(val(42))
console.log(val(true))
console.log(val(['Adele']))


//second

function square (a) {
return Math.pow(a, 2)
}
console.log(square('3'))


//third

function task3 (str1, str2,str3) {
str1 = str1.split('')
str2 = str2.split('')
str3 = str3.split('')
for (let i = 0; i < str1.length; i++) {
if(str1[i] = str1[i][0] + str2[i][0] + str3[i][0]) {
return str1[i]
}
}
}
console.log(task3('this', 'test', 'lock'))
//return `${str1[0]} ${str2[0]} ${str3[0]}`

//fourth

const task4 = (name) => {
name = name.split(' ')
return `${name[0][0]}. ${name[1][0]}.`
}

console.log(task4('Сергей Семенов'))
console.log(task4('Анастасия Черданцева'))
console.log(task4('Горинов Максим'))


//fifth

function task5 (name, city,region) {
return `Привет, ${name.join(' ')}! Добро пожаловать в ${city}, ${region}`
}
console.log(task5(['Дмитрий', 'Серебров'], 'Ишим', 'Тюменская обл.'))
console.log(task5(['Анастасия'], 'Миасс', 'Челябинская обл.'))
console.log(task5(['Горинов', 'Максим', 'Владимирович'], 'Ишим', 'Тюменская обл.'))


//sixth

function task6 (a) {
if (a < 0) {
return 'Negative'
} else if (a > 0) {
return 'Positive'
} else if (a == 0) {
return 'Zero'
}
}
console.log(task6(1))
console.log(task6(-1))
console.log(task6(0))

//seventh

function task7 (str) {
str = str.split('')
for (let i = 0; i < str.length; i++) {
if(str[i] === str[i].toUpperCase()){
str[i] = str[i].toLowerCase()
}
else {
str[i] = str[i].toUpperCase()
 }
 }
 return str.join('')
}
console.log(task7('hello world'))
console.log(task7('HELLO WORLD'))
console.log(task7('hello WORLD'))
console.log(task7('HeLLo WoRLD'))


//eighth

function task8 (item) {
return Object.values(item)
}
console.log(task8({id: 10}))
console.log(task8({id: true}))


////ninth

const task9 = (a) => {
if (a.name.length % 2 === 0) {
return 0
}
else {
return 1
}
}
console.log(task9({name: 'Adele'}))
console.log(task9({name: 'Adel'}))


//tenth

function number(a, b) {
if (a > b) {
return 1
} else if (a < b) {
return -1
} else if (a == b) {
 return 0
}
}
console.log(number(5,2))
console.log(number(1,2))
console.log(number(2,2))

//eleventh

function MasterYoda(a) {
if (a % 3 === 0 && a % 5 === 0) {
return 'MasterYoda'
} else if (a % 5 === 0) {
return 'Yoda'
} else if (a % 3 === 0) {
 return 'Master'
}
}
console.log(MasterYoda(9))
console.log(MasterYoda(10))
console.log(MasterYoda(15))
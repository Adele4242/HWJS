//first

//const task1 = (arr,arr2) => {
//return arr.reduce((acc,rec,idx) => {
//return [...acc, rec + arr2[idx]]
//},[])
//}
//console.log(task1([2,4],[1,3]))



//second
//
//const task2 = (arr) => {
//return arr.reduce((acc, rec) => {
//return [...acc, rec *2]
//},[])
//}
//console.log(task2([1,2,3,4,5]))
//console.log(task2([7,14]))


//third
//
//const task3 = (arr) => {
//return arr.reduce((acc, rec) => {
//return [...acc, rec.id]
//}, [])
//}
//console.log(task3([{id: 1}, {id: 2}, {id: 3}, {id: 4}]))


//fourth

//const task4 = (arr) => {
//return arr.reduce((acc,rec) => {
//return [...acc, `<div>${rec}</div>`]
//},[])
//}
//console.log(task4([1,2]))
//console.log(task4(['Anakin']))


//fifth

//const task5 = (arr) => {
//return arr.reduce((acc,rec) => {
//if (rec.length % 2 === 0) {
//return [...acc, rec]
//}
//return acc
//},[])
//}
//console.log(task5(['ab','abc','abcd']))



//sixth

//const task6 = (arr) => {
//return arr.reduce((acc,rec) => {
//if (rec % 10 === 0 ) {
//return [...acc, rec * 2]
//}
//return acc
//},[])
//}
//console.log(task6([1,2,3,7,10,5]))


//seventh

//const task7 = (arr) => {
//return arr.reduce((acc,rec) => {
//if (rec == true) {
//return [...acc, rec]
//}
//return acc
//},[])
//}
//console.log(task7([true,false,true,true]))
//console.log(task7([true,false]))


//eighth

//const task8 = (arr) => {
//return arr.reduce((acc,rec) => {
//if (rec != undefined) {
//return [...acc, rec]
//}
//return acc
//},[])
//}
//console.log(task8([true,false,true,undefined, true, undefined]))
//console.log(task8([undefined, true,undefined]))


//ninth

//const task9 = (arr) => {
//return arr.reduce((acc,rec) => {
//return acc + rec
//}, 0)
//}
//console.log(task9([1,2,3,4,5]))
//console.log(task9([2,11,5]))


//tenth

//const task10 = (arr) => {
//return arr.reduce((acc,rec) => {
//return rec && acc
//},true)
//}
//console.log(task10([true,true,true,true]))
//console.log(task10([true,false,true]))


//eleventh

//const task11 = (arr) => {
//return arr.reduce((acc,rec,idx) => {
//return {...acc, [`field${idx + 1} `]: rec}
//}, {})
//}
//console.log(task11([true,1,'wow','you are smart,bro']))


//twelfth

//const task12 = (obj) => {
//return Object.keys(obj).reduce((acc,rec) => {
//if (typeof obj[rec] === 'string') {
//return {...acc, [rec]: obj[rec]}
//}
//return acc
//},{})
//}
//console.log(task12({name: 'pilot', isActive: true}))



//thirteenth

//const task13 = (obj) => {
//return Object.keys(obj).reduce((acc,rec) => {
//  if (obj[rec] === false) {
//  return [...acc, [rec]]
//  }
//  return acc
//  },[])
//}
//console.log(task13({isActive: false, isPilot: true}))

//fourteenth

//const task14 = (arr) => {
//return arr.reduce((acc, rec) => {
//return acc + rec / 2
//},0)
//}
//console.log(task14([4,6]))
//console.log(task14([2,4]))


//fifteenth

//const task15 = (arr, num) => {
//return arr.reduce((acc,rec) => {
//return rec(acc)
//}, num)
//}
//console.log(task15([(a) => a + 1, (a) => a * 2], 5))











































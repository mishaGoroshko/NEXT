// Дан массив чисел, нужно вернуть строку интервалов из подряд идущих чисел.
// Если подряд идут три и более числа с инкрементом 1, то они связываются "-"


// const arr = [9, 2, 6, 5, 3, 8, 1, 10, 12, 15];
// =>'1-3, 5, 6, 8-10, 12, 15'

// const sameFunc = (arr) => {
//     let newArr = []
//     console.log(arr.sort((a, b) => a - b));
//
//     for (let i = 0; i < arr.length; i++) {
//
//         function recursiveDependents() {
//             if ((arr[i + 1] - arr[i]) === 1)
//
//         }
//
//         if ((arr[i + 1] - arr[i]) === 1) {
//             if ((arr[i + 2] - arr[i + 1]) === 1) {
//
//                 if ((arr[i + 3] - arr[i + 2]) === 1) {
//                     newArr = [...newArr, `${arr[i]}-${arr[i + 3]}`]
//                 } else {
//                     newArr = [...newArr, `${arr[i]}-${arr[i + 2]}`, arr[i + 3]]
//                 }
//             }else{
//                 newArr = [...newArr, arr[i + 3]]
//             }
//         }

// let newArr = []
// console.log(arr.sort((a, b) => a - b));
//
// for (let i = 0; i < arr.length; i++) {
//
//     if ((arr[i + 1] - arr[i]) === 1) {
//         if ((arr[i + 2] - arr[i + 1]) === 1) {
//             if ((arr[i + 3] - arr[i + 2]) === 1) {
//                 newArr = [...newArr, `${arr[i]}-${arr[i + 3]}`]
//             } else {
//                 newArr = [...newArr, `${arr[i]}-${arr[i + 2]}`, arr[i + 3]]
//             }
//         }else{
//             newArr = [...newArr, arr[i + 3]]
//         }
//     }
// }


//     return newArr.join(', ')
//
// }
// console.log(sameFunc([9, 2, 6, 5, 3, 8, 1, 10, 12, 15]));


const arr = [9, 2, 6, 5, 3, 8, 1, 10, 12, 15, 16, 17, 18, 19];

// function SortArray(arr) {
//
//     let sortArr = arr.sort((a, b) => a - b)
//     let newArr = []
//     let tempArr = []
//     let a = 0
//
//     for (let i = 0; i <= sortArr.length; i++) {
//         if (!tempArr.length) {
//             tempArr.push(sortArr[i])
//             a++
//         } else if ((sortArr[i] - tempArr[a - 1]) === 1) {
//             tempArr.push(sortArr[i])
//             a++
//         } else if (tempArr.length > 2) {
//             newArr.push(`${tempArr[0]}-${tempArr[tempArr.length - 1]}`)
//             tempArr = []
//             tempArr.push(sortArr[i])
//             a = 1
//         } else {
//             newArr = newArr.concat(tempArr)
//             tempArr = []
//             tempArr.push(sortArr[i])
//             a = 1
//         }
//     }
//     return newArr.join(', ')
// }
//
// console.log(SortArray([9, 2, 6, 5, 3, 8, 1, 10, 12, 15,16,17,18,19]));


// const getRes = (arr) => {
//     const sortedArr = arr.sort((a,b) => a-b)
//     let consecutiveArr = []
//     let res = ''
//
//     sortedArr.forEach((e, i) =>{e + 1 === sortedArr[i+1] && consecutiveArr.push(e, sortedArr[i+1])})
//     console.log(consecutiveArr)
//
//     const duplicates = consecutiveArr.filter((item, index) => consecutiveArr.indexOf(item) !== index)
//     console.log(duplicates)
//
//     sortedArr.forEach((el, index) => {
//         if (duplicates.includes(el) && duplicates.includes(sortedArr[index+1])) return
//         else if (duplicates.includes(sortedArr[index+1]))  res+=`${el}`
//         else  if (duplicates.includes(el)) res+='-'
//         else res+=`${el}, `
//     })
//
//     return res.trim().slice(0, -1)
// }
//
//
//
//
//
//
//
//
//
const getRes = (arr) => {
    const sortArr = arr.sort((a, b) => a - b)
    let longArr = []

    sortArr.forEach((el, i) => sortArr[i + 1] - el === 1 && longArr.push(el, sortArr[i + 1]))
    console.log(longArr)

    const doubleArr = longArr.filter((el, i) => longArr.indexOf(el) !== i)
    console.log(doubleArr)

    let res = ''
    sortArr.forEach((el, i) => {
        if (doubleArr.includes(el) && doubleArr.includes(sortArr[i + 1])) return
        else if (doubleArr.includes(sortArr[i + 1])) res += `${el}`
        else if (doubleArr.includes(el)) res+= '-'
        else res+=`${el}, `
    })

    return res.trim().slice(0, -1)

}

console.log(getRes([9, 2, 6, 5, 3, 8, 1, 10, 12, 15, 16, 17, 18, 19]));


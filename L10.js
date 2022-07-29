const pr = new Promise((resolve, reject) => {
    console.log('0000000')
    setTimeout(() => {
        resolve(111111111)
        reject('NEW ERROR')
        // throw new Error('ERRORRRRRRRRRRRRRRRRR')
    }, 2000)
})

pr
    .then(res => {
        console.log(res)
        throw new Error('ERRORRRRRRRRRRRRRRRRR')
        return '????????'

    })
    .catch(err => console.log('err', err))
    .then(() => console.log(22222222))
    .then(res => console.log(res))
    .finally(() => {})
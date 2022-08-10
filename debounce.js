// window.addEventListener('resize', debounce((event) => {}, 500))

const f = throttle(console.log, 1000)

f(1)
f(2)
setTimeout(() => f(3), 100)
setTimeout(() => f(4), 500)
setTimeout(() => f(5), 1100)

function debounce(cb, delay) {

    let timer
    return function (...args) {
        clearTimeout(timer)

        // console.log(args)

        timer = setTimeout(() => {
            cb.apply(this, args)
        }, delay)

    }
}

function throttle(cb, delay) {
    let isWaiting

    return function (...args) {
        if (isWaiting) return
        cb.apply(this, args)
        isWaiting = true

        setTimeout(() => {
            isWaiting = false
        }, delay)
    }
}
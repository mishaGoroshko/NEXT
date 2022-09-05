// window.addEventListener('resize', debounce((event) => {}, 500))

const f = debounce(console.log, 600)

f(1)
f(2)
setTimeout(() => f(3), 100)
setTimeout(() => f(4), 500)
setTimeout(() => f(5), 900)

function debounce(cb, delay) {

    let timer
    return function (...args) {
        clearTimeout(timer)

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

//  throttle Plus: ----> Last Argument should be executed

function throttlePlusLastArgument(cb, delay) {
    let isWaiting
    let savedArgs = null
    let savedThis = null

    return function wrapper(...args) {
        if (isWaiting) {
            savedArgs = args
            savedThis = this
            return
        }

        cb.apply(this, args)
        isWaiting = true

        setTimeout(() => {
            isWaiting = false
            if (savedArgs){
                wrapper.apply(savedThis, savedArgs)
                savedArgs = null
                savedThis = null
            }
        }, delay)
    }
}
const classNames = [
    'header', 'menu', 'menu', 'menu-item', 'menu-item', 'menu-item', 'link', 'link', 'link', 'link', 'footer', 'navbar'
]

function sortByRise(arr) {
    let map = {}

    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) map[arr[i]] = 1
        else map[arr[i]]++
    }

    // return Object.entries(map)
    //     .sort((a, b) => b[1] - a[1])
    //     .map(el => el[0])

    return Object.keys(map).sort((a, b) => map[b] - map[a])
}

console.log(sortByRise(classNames))
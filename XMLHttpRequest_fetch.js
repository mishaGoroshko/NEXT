//-----------------------------XMLHttpRequest---------------------------------

const req = new XMLHttpRequest()

req.open('GET', 'https://goole.com')
req.send()

req.onload = function () {
    console.log(req.response)
}

//-----------------------------fetch---------------------------------

const req = fetch('https://google.com', {
    method: 'GET',
})

req.then(res => req.json().then(r => r))

//------------async
async function func() {
    const req2 = await fetch('https://google.com', {
        method: 'GET',
    })

    const data = await req2.json()

    console.log(data)
}
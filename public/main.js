const sayHi = () => {
    axios.get('/say-hi').then(res => {
        console.log(res)
        let text = document.createElement('p')
        text.textContent = res.data
        document.body.appendChild(text)
    })
}



document.addEventListener('click', (e) => {
    const el = e.target
    if(el.tagName === 'IMG'){
        const body = document.querySelector('body')
        body.style.backgroundColor = "red"
    }
})
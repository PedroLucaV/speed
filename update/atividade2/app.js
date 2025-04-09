const add = document.querySelector('.addA')

add.addEventListener('click', () => {
    const container = document.querySelector('.container')
    const counter = document.createElement('div')
    let count = 0;
    container.appendChild(counter)
    counter.innerHTML = `
        <div class='counter'>
            <h1 class='count'>${count}</h1>
            <div class='btns'>
                <button class='dec'>Decrease</button>
                <button class='inc'>Increase</button>
            </div>
        </div>
    `

    const countD = counter.querySelector('.count')
    const dec = counter.querySelector('.dec')
    const inc = counter.querySelector('.inc')

    dec.addEventListener('click', () => {
        count--
        countD.textContent = count
    })

    inc.addEventListener('click', () => {
        count++
        countD.textContent = count
    })
})
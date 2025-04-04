const btnAdd = document.getElementById('add');

btnAdd.addEventListener('click', () => {
    const counters = document.getElementById('counters');
    const counter = document.createElement('div');
    let count = 0;
    counters.appendChild(counter);
    counter.innerHTML = `
        <div class='counter'>
            <h1 class='count'>${count}</h1>
            <div class="buttons">
                <button class='dec'>Decrease</button>
                <button class='inc'>Increase</button>
            </div>
        </div>
    `;

    const countDisplay = counter.querySelector('.count');
    const btnDec = counter.querySelector('.dec');
    const btnInc = counter.querySelector('.inc');

    btnDec.addEventListener('click', () => {
        count--;
        countDisplay.textContent = count;
    });

    btnInc.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
    });
});
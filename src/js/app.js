
const people = ['Andre T', 'André W.', 'Anita', 'Calvin', 'Daniel', 'Emanuel', 'Karin', 'Lea', 'Maize', 'Mali', 'Nicole', 'Philipp', 'Simon', 'Sophie', 'Stefan', 'Verena'];

const buddyContainer = document.querySelector('.buddyContainer')

people.forEach((person, i) => {
    const buddy = document.createElement('section')
    buddyContainer.appendChild(buddy)
    buddy.classList.add('buddy')
    buddy.innerHTML = `
            <div class="buddy__content">
                <p class="name">${people[i]}</p>
                <p class="name">${people[i++]}</p>
                <svg width="21px" height="21px" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Plus</title>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Plus" fill="#193251" fill-rule="nonzero">
            <path d="M10.1666667,-7.10542736e-15 C11.2210285,-7.10542736e-15 12.0848318,0.815877791 12.1611809,1.85073766 L12.1666667,2 L12.1666667,8.16566667 L18.3333333,8.16666667 C19.4379028,8.16666667 20.3333333,9.06209717 20.3333333,10.1666667 C20.3333333,11.2210285 19.5174555,12.0848318 18.4825957,12.1611809 L18.3333333,12.1666667 L12.1666667,12.1656667 L12.1666667,18.3333333 C12.1666667,19.4379028 11.2712362,20.3333333 10.1666667,20.3333333 C9.11230487,20.3333333 8.24850154,19.5174555 8.1721524,18.4825957 L8.16666667,18.3333333 L8.16666667,12.1656667 L2,12.1666667 C0.8954305,12.1666667 3.01980663e-14,11.2712362 3.01980663e-14,10.1666667 C3.01980663e-14,9.11230487 0.815877791,8.24850154 1.85073766,8.1721524 L2,8.16666667 L8.16666667,8.16566667 L8.16666667,2 C8.16666667,0.8954305 9.06209717,-7.10542736e-15 10.1666667,-7.10542736e-15 Z" id="Path"></path>
        </g>
    </g>
</svg>
            </div>`
})


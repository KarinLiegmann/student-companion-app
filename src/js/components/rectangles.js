const rectangleContainer = document.querySelector('.journal__rectanglecontainer');


for (let i = 0; i < 10; i++) {

    const rectangle = document.createElement('div')
    rectangleContainer.appendChild(rectangle)
    rectangle.classList.add('rectangle')
    rectangle.innerHTML =
        `<svg class="rectangles" width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Rectangle@2x</title>
    <g id="Symbols" stroke="#193251" stroke-width="0.5" fill-rule="evenodd">
        <g id="Rectangle">
            <rect id="Rectangle-Copy-6"
                transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) "
                x="0" y="0" width="22" height="22" rx="4"></rect>
        </g>
    </g>
    </svg>`

    rectangle.addEventListener('click', () => {
        selectRectangles(i)
    })

}

function selectRectangles(myLength) {

    const rectangles = document.querySelectorAll('.rectangles')

    for (let i = 0; i < rectangles.length; i++) {
        rectangles[i].classList.remove('clicked')
    }

    for (let i = 0; i <= myLength; i++) {
        rectangles[i].classList.add('clicked')
    }
}


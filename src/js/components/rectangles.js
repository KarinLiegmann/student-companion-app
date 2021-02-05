const container = document.querySelector('.journal__rectanglecontainer');

const rectangles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

rectangles.forEach((rectangle, index) => {

    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('rectangle');

    div.innerHTML = `

    <svg class="rectangles" width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Rectangle@2x</title>
    <g id="Symbols" stroke="#193251" stroke-width="1" fill-rule="evenodd">
        <g id="Rectangle">
            <rect id="Rectangle-Copy-6"
                transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) "
                x="0" y="0" width="22" height="22" rx="4"></rect>
        </g>
    </g>
</svg>
  `

    div.addEventListener('click', () => {

        let newArray = rectangles.slice(0, rectangles[index])
        rectangleSelect(newArray)

    })
})

function rectangleSelect(newArray) {
    const rectangles = document.querySelectorAll('.rectangles')

    rectangles.forEach((rectangle) => {
        rectangle.classList.remove('clicked')
    })

    newArray.forEach((_, i) => {
        rectangles[i].classList.add('clicked')
    })
}


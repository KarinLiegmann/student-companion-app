const rectangleContainer = document.querySelector('.journal__rectanglecontainer');

const starContainer = document.querySelector('.jsheet__starcontainer');


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


for (let i = 0; i < 5; i++) {

    const star = document.createElement('div')
    starContainer.appendChild(star)
    star.classList.add('star')
    star.innerHTML = `

  <svg class="stars" width="25px" height="24px" viewBox="0 0 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" transform=scale(1.43)>
                    <title>Star@2x</title>
                    <g id="Symbols" stroke="#193251" stroke-width="0.5" fill-rule="evenodd">
                        <g id="Star">
                            <path
                                d="M8.23458443,7.2288 L0.825542795,8.30177333 L0.715980417,8.32378638 C0.00767592863,8.50741356 -0.252463118,9.41029168 0.291855842,9.93923898 L5.65288072,15.14976 L4.3876206,22.5059207 L4.37507497,22.6116336 C4.32751461,23.3425174 5.11048682,23.8713631 5.78483118,23.5179301 L12.4119178,20.0448 L19.0390043,23.5179301 L19.1359768,23.5624921 C19.8185371,23.833441 20.5650032,23.2545037 20.4362149,22.5059207 L19.1699918,15.14976 L24.5319797,9.93923898 L24.6076386,9.85722905 C25.0724025,9.29362162 24.750523,8.41074247 23.9982927,8.30177333 L16.5882881,7.2288 L13.2754414,0.535136917 C12.9222134,-0.178378972 11.9016221,-0.178378972 11.5483941,0.535136917 L8.23458443,7.2288 Z"
                                id="Path"></path>
                        </g>
                    </g>
                </svg>
  `

    star.addEventListener('click', () => {
        selectStars(i)
    })

}

function selectStars(myLength) {

    const stars = document.querySelectorAll('.stars')

    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove('clicked')
    }

    for (let i = 0; i <= myLength; i++) {
        stars[i].classList.add('clicked')
    }
}


const saveButton = document.querySelector('.jsheet__save')

saveButton.addEventListener('click', () => {
    const rating = Array.from(document.querySelectorAll('.stars.clicked')).length
    const comprehension = Array.from(document.querySelectorAll('.rectangles.clicked')).length
    const motto = document.querySelector('.jsheet__mottobox').value
    const notes = document.querySelector('.jsheet__notebox').value

    let newEntry = { rating: rating, comprehension: comprehension, motto: motto, notes: notes }

    localStorage.setItem("journalentry", JSON.stringify(newEntry))
    localStorage.getItem(JSON.parse("journalentry"))
})

let posts = []

const journalpage = document.querySelector('.journal')

fetch('https://muc-2020-w1-student-api.vercel.app/api/journals')
    .then(res => res.json())
    .then(journals => {
        posts = journals
        posts.forEach(renderPosts)
        console.log(posts)
    })
    .catch(error => console.error(error.message))


function renderPosts(post, index) {
    const journalEntry = createElement('article', 'journal__entry')
    console.log(journalpage)
    journalpage.appendChild(journalEntry)
    journalEntry.innerHTML += `
    <h2>YESTERDAY</h2>
    <h3 class="mrg-b-0.625">Rating:</h3>
    <div class="journal__starcontainer">
        <svg width="25px" height="24px" viewBox="0 0 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Star@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Star" fill="#193251">
                    <path
                        d="M8.23458443,7.2288 L0.825542795,8.30177333 L0.715980417,8.32378638 C0.00767592863,8.50741356 -0.252463118,9.41029168 0.291855842,9.93923898 L5.65288072,15.14976 L4.3876206,22.5059207 L4.37507497,22.6116336 C4.32751461,23.3425174 5.11048682,23.8713631 5.78483118,23.5179301 L12.4119178,20.0448 L19.0390043,23.5179301 L19.1359768,23.5624921 C19.8185371,23.833441 20.5650032,23.2545037 20.4362149,22.5059207 L19.1699918,15.14976 L24.5319797,9.93923898 L24.6076386,9.85722905 C25.0724025,9.29362162 24.750523,8.41074247 23.9982927,8.30177333 L16.5882881,7.2288 L13.2754414,0.535136917 C12.9222134,-0.178378972 11.9016221,-0.178378972 11.5483941,0.535136917 L8.23458443,7.2288 Z"
                        id="Path"></path>
                </g>
            </g>
        </svg>
        <svg width="25px" height="24px" viewBox="0 0 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Star@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Star" fill="#193251">
                    <path
                        d="M8.23458443,7.2288 L0.825542795,8.30177333 L0.715980417,8.32378638 C0.00767592863,8.50741356 -0.252463118,9.41029168 0.291855842,9.93923898 L5.65288072,15.14976 L4.3876206,22.5059207 L4.37507497,22.6116336 C4.32751461,23.3425174 5.11048682,23.8713631 5.78483118,23.5179301 L12.4119178,20.0448 L19.0390043,23.5179301 L19.1359768,23.5624921 C19.8185371,23.833441 20.5650032,23.2545037 20.4362149,22.5059207 L19.1699918,15.14976 L24.5319797,9.93923898 L24.6076386,9.85722905 C25.0724025,9.29362162 24.750523,8.41074247 23.9982927,8.30177333 L16.5882881,7.2288 L13.2754414,0.535136917 C12.9222134,-0.178378972 11.9016221,-0.178378972 11.5483941,0.535136917 L8.23458443,7.2288 Z"
                        id="Path"></path>
                </g>
            </g>
        </svg>
        <svg width="25px" height="24px" viewBox="0 0 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Star@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Star" fill="#193251">
                    <path
                        d="M8.23458443,7.2288 L0.825542795,8.30177333 L0.715980417,8.32378638 C0.00767592863,8.50741356 -0.252463118,9.41029168 0.291855842,9.93923898 L5.65288072,15.14976 L4.3876206,22.5059207 L4.37507497,22.6116336 C4.32751461,23.3425174 5.11048682,23.8713631 5.78483118,23.5179301 L12.4119178,20.0448 L19.0390043,23.5179301 L19.1359768,23.5624921 C19.8185371,23.833441 20.5650032,23.2545037 20.4362149,22.5059207 L19.1699918,15.14976 L24.5319797,9.93923898 L24.6076386,9.85722905 C25.0724025,9.29362162 24.750523,8.41074247 23.9982927,8.30177333 L16.5882881,7.2288 L13.2754414,0.535136917 C12.9222134,-0.178378972 11.9016221,-0.178378972 11.5483941,0.535136917 L8.23458443,7.2288 Z"
                        id="Path"></path>
                </g>
            </g>
        </svg>
        <svg width="25px" height="24px" viewBox="0 0 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Star@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Star" fill="#193251">
                    <path
                        d="M8.23458443,7.2288 L0.825542795,8.30177333 L0.715980417,8.32378638 C0.00767592863,8.50741356 -0.252463118,9.41029168 0.291855842,9.93923898 L5.65288072,15.14976 L4.3876206,22.5059207 L4.37507497,22.6116336 C4.32751461,23.3425174 5.11048682,23.8713631 5.78483118,23.5179301 L12.4119178,20.0448 L19.0390043,23.5179301 L19.1359768,23.5624921 C19.8185371,23.833441 20.5650032,23.2545037 20.4362149,22.5059207 L19.1699918,15.14976 L24.5319797,9.93923898 L24.6076386,9.85722905 C25.0724025,9.29362162 24.750523,8.41074247 23.9982927,8.30177333 L16.5882881,7.2288 L13.2754414,0.535136917 C12.9222134,-0.178378972 11.9016221,-0.178378972 11.5483941,0.535136917 L8.23458443,7.2288 Z"
                        id="Path"></path>
                </g>
            </g>
        </svg>
        <svg width="25px" height="24px" viewBox="0 0 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Star@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Star" fill="#193251">
                    <path
                        d="M8.23458443,7.2288 L0.825542795,8.30177333 L0.715980417,8.32378638 C0.00767592863,8.50741356 -0.252463118,9.41029168 0.291855842,9.93923898 L5.65288072,15.14976 L4.3876206,22.5059207 L4.37507497,22.6116336 C4.32751461,23.3425174 5.11048682,23.8713631 5.78483118,23.5179301 L12.4119178,20.0448 L19.0390043,23.5179301 L19.1359768,23.5624921 C19.8185371,23.833441 20.5650032,23.2545037 20.4362149,22.5059207 L19.1699918,15.14976 L24.5319797,9.93923898 L24.6076386,9.85722905 C25.0724025,9.29362162 24.750523,8.41074247 23.9982927,8.30177333 L16.5882881,7.2288 L13.2754414,0.535136917 C12.9222134,-0.178378972 11.9016221,-0.178378972 11.5483941,0.535136917 L8.23458443,7.2288 Z"
                        id="Path"></path>
                </g>
            </g>
        </svg>
    </div>
    <h3 class="mrg-b-0.625">Comprehension:</h3>
    <div class="journal__rectanglecontainer">
        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Rectangle@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Rectangle" fill="#193251">
                    <rect id="Rectangle-Copy-6"
                        transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) "
                        x="0" y="0" width="22" height="22" rx="4"></rect>
                </g>
            </g>
        </svg>
        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Rectangle@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Rectangle" fill="#193251">
                    <rect id="Rectangle-Copy-6"
                        transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) "
                        x="0" y="0" width="22" height="22" rx="4"></rect>
                </g>
            </g>
        </svg>
        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Rectangle@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Rectangle" fill="#193251">
                    <rect id="Rectangle-Copy-6"
                        transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) "
                        x="0" y="0" width="22" height="22" rx="4"></rect>
                </g>
            </g>
        </svg>
        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Rectangle@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Rectangle" fill="#193251">
                    <rect id="Rectangle-Copy-6"
                        transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) "
                        x="0" y="0" width="22" height="22" rx="4"></rect>
                </g>
            </g>
        </svg>
        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Rectangle@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Rectangle" fill="#193251">
                    <rect id="Rectangle-Copy-6"
                        transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) "
                        x="0" y="0" width="22" height="22" rx="4"></rect>
                </g>
            </g>
        </svg>
        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Rectangle@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Rectangle" fill="#193251">
                    <rect id="Rectangle-Copy-6"
                        transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) "
                        x="0" y="0" width="22" height="22" rx="4"></rect>
                </g>
            </g>
        </svg>
        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Rectangle@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Rectangle" fill="#193251">
                    <rect id="Rectangle-Copy-6"
                        transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) "
                        x="0" y="0" width="22" height="22" rx="4"></rect>
                </g>
            </g>
        </svg>
        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Rectangle@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Rectangle" fill="#193251">
                    <rect id="Rectangle-Copy-6"
                        transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) "
                        x="0" y="0" width="22" height="22" rx="4"></rect>
                </g>
            </g>
        </svg>
        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Rectangle@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Rectangle" fill="#193251">
                    <rect id="Rectangle-Copy-6"
                        transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) "
                        x="0" y="0" width="22" height="22" rx="4"></rect>
                </g>
            </g>
        </svg>
        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Rectangle@2x</title>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Rectangle" fill="#193251">
                    <rect id="Rectangle-Copy-6"
                        transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) "
                        x="0" y="0" width="22" height="22" rx="4"></rect>
                </g>
            </g>
        </svg>
    </div>
    <h3>Motto:</h3>
    <p class="quote">"Thats life in the city"</p>
    <h3>Notes:</h3>
    <p class="copy">Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem
        se
        repellere, idque
        instituit docere sic omne animal, simul atque.</p>`

    function createElement(type, classe) {
    const element = document.createElement(type);
    element.classList.add(classe);
    return element;
    }

    const container = document.querySelector('.jsheet__starcontainer');

    const stars = [1, 2, 3, 4, 5];

    stars.forEach((star, index) => {
  
    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('star');

    div.innerHTML = `

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
  
  newArray.forEach((_, i) => {
    stars[i].classList.add('clicked')
  })
}
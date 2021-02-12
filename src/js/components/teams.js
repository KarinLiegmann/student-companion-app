let people = [];

const teamsection = document.body.querySelector('.teams');

fetch('https://muc-2020-w1-student-api.vercel.app/api/teams')
    .then(res => res.json())
    .then(persons => {
        people = persons
        people.forEach(renderPerson)
        console.log(persons)
    })
    .catch(error => console.error(error.message))




function renderPerson(person, index) {
        const teamList = createElement('section', 'list');
        teamsection.appendChild(teamList)
        const teamHeadline = createElement('h2', 'list__headline');
        teamList.appendChild(teamHeadline)
        const teamUnList = createElement('ul', 'list__content');
        teamList.appendChild(teamUnList)
       
        teamHeadline.innerText = 'Team ' + (index + 1)
        person.forEach((pers) => {
            const teamListItem = createElement('li', 'name');
            teamUnList.appendChild(teamListItem)
            teamListItem.innerText = pers
          })
    }

function createElement(type, classe) {
    const element = document.createElement(type);
    element.classList.add(classe);
    return element;
}
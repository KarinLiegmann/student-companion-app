
/* const people = ['Andre T', 'André W.', 'Anita', 'Calvin', 'Daniel', 'Emanuel', 'Karin', 'Lea', 'Maize', 'Mali', 'Nicole', 'Philipp', 'Simon', 'Sophie', 'Stefan', 'Verena'];
const teamsection = document.body.querySelector('.teams'); */

const people = [];

fetch('https://muc-2020-w1-student-api.vercel.app/api/teams')
    .then(res => res.json())
    .then(persons => {
        people.push(persons)
    })
    .catch(error => console.error(error.message))

console.log(people)



function renderPerson(people, index) {




    const teamsection = document.body.querySelector('.teams');
    const listSection = document.createElement('section')
    listSection.classList.add('list')
    teamsection.appendChild(listSection)
    const listHeadline = document.createElement('h2')
    listHeadline.classList.add('list__headline')
    listSection.appendChild(listHeadline)
    listHeadline.innerText = 'Team ' + index
    const listContent = document.createElement('ul')
    listContent.classList.add('list__content')
    listHeadline.appendChild(listContent)


    element.innerHTML = `<section class="list">
    <h2 class="list__headline">Team 1</h2>
    <ul class="list__content">
        <li class="name">${people[0]}</li>
       
    </ul>
    </section>


    `
    todoList.appendChild(element)
}












teamsection.innerHTML = `
<section class="list">
<h2 class="list__headline">Team 2</h2>
<ul class="list__content">
    <li class="name">${people[5]}</li>
    <li class="name">${people[6]}</li>
    <li class="name">${people[7]}</li>
    <li class="name">${people[8]}</li>
    <li class="name">${people[9]}</li>
</ul>
</section>`













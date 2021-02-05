
const people = ['Andre T', 'André W.', 'Anita', 'Calvin', 'Daniel', 'Emanuel', 'Karin', 'Lea', 'Maize', 'Mali', 'Nicole', 'Philipp', 'Simon', 'Sophie', 'Stefan', 'Verena'];
const teamsection = document.body.querySelector('.teams');


teamsection.innerHTML = `<section class="list">
<h2 class="list__headline">Team 1</h2>
<ul class="list__content">
    <li class="name">${people[0]}</li>
    <li class="name">${people[1]}</li>
    <li class="name">${people[2]}</li>
    <li class="name">${people[3]}</li>
    <li class="name">${people[4]}</li>
</ul>
</section>
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













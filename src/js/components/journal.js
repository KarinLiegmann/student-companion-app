let people = [];

const journalsection = document.querySelector('.journal');

fetch('https://muc-2020-w1-student-api.vercel.app/api/journals')
    .then(res => res.json())
    .then(posts => {
        posts.forEach(renderPosts)
        console.log(posts)
    })
    .catch(error => console.error(error.message))

function renderPosts(post, index) { }


const container = document.querySelector('.container');


const stars = [1, 2, 3, 4, 5]
               
stars.forEach((star, index) => {
  
  const div = document.createElement('div');
  container.appendChild(div);
  div.classList.add('star');
  
  div.addEventListener('click', () => {
    
    let newArray = stars.slice(0, stars[index])
    starSelect(newArray)
       
  }) 
}) 

function starSelect(newArray) {
  const stars = document.querySelectorAll('.star')
  
  stars.forEach((star) => {
    star.classList.remove('clicked')
  })
  
  newArray.forEach((_, i) => {
    stars[i].classList.add('clicked')
  })
}


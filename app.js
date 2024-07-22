const reviews = [
    {
        name: 'Lachlan Gan',
        position: 'Graphic Designer',
        description: 'Likes Matcha',
        img : 'image/profile-1.jpg',
    },
    {
        name: 'Vishaakh',
        position: 'Accountant',
        description: 'Number 1 Palmer Fan',    
        img: 'image/profile-2.jpg',
    },
    {
        name: 'Ivan Lau ',
        position: 'Professional Volleyball Player',
        description: 'Hates Maths',
        img: 'image/profile-3.jpg',
    }
]

const name = document.querySelector('.name');
const position = document.querySelector('.position');
const description = document.querySelector('.description');
const previous = document.querySelector('.previous-button');
const next = document.querySelector('.next-button');
const random = document.querySelector('.random-button');
const img = document.querySelector('.img');

let number = 0 ; 



function showReview(x){
    let item = reviews[x];
    img.src = item.img;
    name.textContent = item.name;
    position.textContent = item.position;
    description.textContent = item.description;
}

window.addEventListener('DOMContentLoaded',function(){
    showReview(number);
})

previous.addEventListener('click', function(){
    number --; 
    if (number<0){
        number = reviews.length;

    }
    showReview(number);
});

next.addEventListener('click', function(){
    number ++; 
    if (number>reviews.length){
        number = 0;

    }
    showReview(number);
});

random.addEventListener('click', function(){
    number = Math.floor(Math.random() * reviews.length); 
    console.log(number  ); 
    showReview(number);
});
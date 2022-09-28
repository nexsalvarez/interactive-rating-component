const ratingCard = document.querySelector('.rating-card-container');
const thanksCard = document.querySelector('.inactive');
const scoreList = document.querySelector('.rating--score');
const button = document.querySelector('#share-score');
const userSelect = document.querySelector('#user-select');

let score = 0;

scoreList.childNodes.forEach((elements) => {
    elements.addEventListener('click', (i) => {
        i.target.classList.toggle('score-active');
        score = Number(i.target.outerText);
        userSelect.innerHTML = score;
    });
});

button.addEventListener('click', () => {
    if (0 < score) {
        ratingCard.classList.replace('rating-card-container', 'inactive');
        thanksCard.classList.replace('inactive', 'thanks-card-container');
    } else {
        alert('You need to select a score.');
    }
});
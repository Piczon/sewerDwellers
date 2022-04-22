console.log('elo');

//reviews
const allReviewsArray = document.querySelectorAll('.review_author');
allReviewsArray.forEach(reviewTitle => {
    reviewTitle.addEventListener('click', () => {
        if(reviewTitle.nextElementSibling.classList.contains('active')) {
            reviewTitle.nextElementSibling.classList.remove('active');
        }
        else {
            reviewTitle.nextElementSibling.classList.add('active');
        }
        
        console.dir(reviewTitle.nextElementSibling);
    })
})


document.querySelector("footer .year").innerHTML = new Date().getFullYear();
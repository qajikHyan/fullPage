
// video section -------------------------------
let card = document.querySelector('.card');
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);

    function startRotate(event) {
        const cardItem = this.querySelector('.card-item');
        const halfHeight = cardItem.offsetHeight / 2;

        cardItem.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 30
         + 'deg) rotateY(' + (event.offsetX - halfHeight) / 30 + 'deg)'
    }

    function stopRotate(event){
        const cardItem = this.querySelector('.card-item');
        cardItem.style.transform = 'rotate(0)'
    }
// video section -------------------------------

// slider range ----------------------------------
let input = document.getElementById('myRange');
let slider = document.getElementById('slider');
let img = document.getElementById('img');
document.addEventListener('input', function(){
    input.max = slider.offsetWidth-img.offsetWidth;
    slider.style.transform = 'translateX(-'+input.value+'px)';
})
// slider range ----------------------------------

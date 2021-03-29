
const [cartContentEl] = document.getElementsByClassName('cartcontent');
cartContentEl.addEventListener('click', (event) => {
    console.log(event.target.classList);
    if(event.target.classList.contains('cartitemimg'))
    {   
        const productImgEl = event.target;
        const cartItemEl = productImgEl.closest('.cartitem');
        const [expandedImageEl] = cartItemEl.getElementsByClassName('productexpandedimg');
        const [downArrow] = cartItemEl.getElementsByClassName('fa-angle-down');
        if(productImgEl.style.display === 'none'){
            productImgEl.style.display = 'block';
            expandedImageEl.style.display = 'none';
            downArrow.style.display = 'none';
        }
        else{
            productImgEl.style.display = 'none';
            expandedImageEl.style.display = 'block';
            downArrow.style.display = 'block';
        }

    }
});




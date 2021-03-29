
const [cartContentEl] = document.getElementsByClassName('cartcontent');
cartContentEl.addEventListener('click', (event) => {
    if(event.target.classList.contains('productimg'))
    {   
        const productImgEl = event.target;
        const cartItemEl = productImgEl.closest('.cartitem');
        const [expandedImageEl] = cartItemEl.getElementsByClassName('productexpandedimg');
        const [downArrow] = cartItemEl.getElementsByClassName('fa-angle-down');
        if(productImgEl.style.display === 'block'){
            productImgEl.style.display = 'none';
            expandedImageEl.style.display = 'block';
            downArrow.style.display = 'block';
        }
        else{
            productImgEl.style.display = 'block';
            expandedImageEl.style.display = 'none';
            downArrow.style.display = 'none';

        }
   

    }
});




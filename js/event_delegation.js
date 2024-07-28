const productConatainer = document.querySelector("[product-cards]");
productConatainer.addEventListener('click',
    function(event){
        const card = event.target.closest('.product_card');
        if(card){
            const productName = card.querySelector("[card-name]").textContent;
            const imageSrc = card.querySelector("img").src;
            var productClasses = card.getAttribute('class')
            productClasses = productClasses.split(' ');
            const category = productClasses[1];
            const subCategory = productClasses[2];
            const currentCard = {
                "heading" : productName,
                "src" : imageSrc,
                "category" : category,
                "subCategory" : subCategory
            }
            sessionStorage.setItem('currentCard', JSON.stringify(currentCard));z
        }
    }
)
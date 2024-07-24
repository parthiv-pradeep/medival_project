const productCards = document.getElementsByClassName("product_card");

for (let index = 0; index < productCards.length; index++) {
    productCards[index].addEventListener('click', 
        function(){
            const imageSrc = productCards[index].querySelector('img').src;
            const productName = productCards[index].querySelector('h1').textContent;
            const currentCard = {
                "heading" : productName,
                "src" : imageSrc,
            }
            sessionStorage.setItem('currentCard', JSON.stringify(currentCard));
        }
    )
}
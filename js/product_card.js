const productCards = document.getElementsByClassName("product_card");
const cardContainer = document.querySelector("[search-bar]");


for (let index = 0; index < productCards.length; index++) {
    productCards[index].addEventListener('click', 
        function(){
            const imageSrc = productCards[index].querySelector('img').src;
            const productName = productCards[index].querySelector('h1').textContent;
            var productClasses = productCards[index].getAttribute('class');
            productClasses = productClasses.split(' ');
            const category = productClasses[1];
            const subCategory = productClasses[2];
            sessionStorage.setItem("imageSrc", imageSrc);
            sessionStorage.setItem("heading", productName);
            sessionStorage.setItem("category", category);
            sessionStorage.setItem("subCategory", subCategory);
        }
    )
}
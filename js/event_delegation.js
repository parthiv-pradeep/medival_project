const productContainer = document.querySelector("[product-cards]");
var productName;


productContainer.addEventListener('click',
    function(event){
        const card = event.target.closest('.product_card');
        if(card){
            productName = card.querySelector(".card-name").textContent;
            sessionStorage.setItem('name',productName);
            fetch("./json/products.json").then(res => res.json()).then(data => {
                const cardDetails = data.find(product => product.name === productName);
                if(cardDetails){
                    sessionStorage.setItem("cardDetails", JSON.stringify(cardDetails));
                }
            }).catch(error => console.error('Error fetching products:', error));
        }
    }
)

const cardTemplate = document.querySelector("[product-card-template]");
const productCardContainer = document.querySelector("[product-cards]");
const searchInput = document.querySelector("[search-bar]");

let products = [];

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase().trim('');
    products.forEach(product => {
    const isMatch = (product.name.includes(value) || product.category.includes(value)) || product.subCategory.includes(value);
    product.Element.classList.toggle('hide', !isMatch);
    });

})

fetch("./json/products.json").then(res => res.json()).then(data => {
    products = data.map(product => {
        const productCard = cardTemplate.content.cloneNode(true).children[0];
        const name = productCard.querySelector("[card-name]");
        const image = productCard.querySelector("[card-img]");
        image.src = product.image;
        name.textContent = product.name;
        sessionStorage.setItem('category', product.category);
        sessionStorage.setItem('subcategory', product.subCategory);
        sessionStorage.setItem('imageSrc', product.image);
        sessionStorage.setItem('heading', product.name);
        productCardContainer.append(productCard);
        return {name:product.name, category:product.category, subCategory:product.subCategory, Element:productCard};
    });
})
const cardTemplate = document.querySelector("[product-card-template]");
const productCardContainer = document.querySelector("[product-cards]");

// medical section
const medicalHeading = document.querySelector("[medical-heading]")
const medicalContainer = document.querySelector("[medical-cards]")

// dental section
const dentalHeading = document.querySelector("[dental-heading]")
const dentalContainer = document.querySelector("[dental-cards]")

// cssd section
const cssdHeading = document.querySelector("[cssd-heading]")
const cssdContainer = document.querySelector("[cssd-cards]")

// house keeping section
const houseKeepingHeading = document.querySelector("[house-keeping-heading]")
const houseKeepingContainer = document.querySelector("[house-keeping-cards]")

// search bar and icon
const searchInput = document.querySelector("[search-bar]");
const searchGlass = document.getElementById("search-glass");

// div for showing not found
const notFound = document.querySelector("[not-found]");
var productNotFound = true;

// for storing the products in between for searching dynamically
let products = [];


searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase().trim('').split(" ").join("");
    
    // card count for each sections
    var cardCountingArray = [
        {
            "currentHeading" : medicalHeading,
            "currentSection" : medicalContainer,
            "cardCount" : 0
        },
        {
            "currentHeading" : dentalHeading,
            "currentSection" : dentalContainer,
            "cardCount" : 0
        },
        {
            "currentHeading" : cssdHeading,
            "currentSection" : cssdContainer,
            "cardCount" : 0
        },
        {
            "currentHeading" : houseKeepingHeading,
            "currentSection" : houseKeepingContainer,
            "cardCount" : 0
        }
    ];

    if(value){
        searchGlass.style.display = 'none';
    }
    else{
        searchGlass.style.display = 'block';
    }
    products.forEach(product => {
    const isMatch = (product.name.toLowerCase().split(" ").join("").includes(value) || product.category.toLowerCase().split(" ").join("").includes(value) || product.subCategory.toLowerCase().split("").join().includes(value));
    product.Element.classList.toggle('hide', !isMatch);
    if(isMatch){
        if(product.category === 'medical'){
            cardCountingArray[0].cardCount++;
        }
        else if(product.category === 'dental'){
            cardCountingArray[1].cardCount++;
        }
        else if(product.category === 'cssd'){
            cardCountingArray[2].cardCount++;
        }
        else if(product.category === 'house keeping'){
            cardCountingArray[3].cardCount++;
        }
    }
    });
    productNotFound = true;
    cardCountingArray.forEach((sectionCardCount) => {
        if(sectionCardCount.cardCount === 0){
            sectionCardCount.currentHeading.style.display = sectionCardCount.currentSection.style.display = 'none';
        }
        else{
            sectionCardCount.currentHeading.style.display = 'flex';
            sectionCardCount.currentSection.style.display = 'grid';
            productNotFound = false;
        }
    })
    if(productNotFound){
        notFound.style.display = 'flex';
    }
    else{
        notFound.style.display = 'none';
    }
})

fetch("./json/products.json").then(res => res.json()).then(data => {
    products = data.map(product => {
        const productCard = cardTemplate.content.cloneNode(true).children[0];
        const name = productCard.querySelector("[card-name]");
        const image = productCard.querySelector("[card-img]");
        image.src = product.image;
        name.textContent = product.name;
        if(product.category === "medical"){
            medicalContainer.append(productCard);
        }
        else if(product.category === "dental"){
            dentalContainer.append(productCard);
        }
        else if(product.category === "cssd"){
            cssdContainer.append(productCard);
        }
        else if(product.category === "house keeping"){
            houseKeepingContainer.append(productCard);
        }
        return {name:product.name, category:product.category, subCategory:product.subCategory, Element:productCard};
    });
}).catch(error => console.error('Error fetching products:', error));
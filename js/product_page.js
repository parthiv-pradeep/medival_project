const currentCard = sessionStorage.getItem('currentCard');
const productData = JSON.parse(currentCard);

const mainHeading = productData.heading;
const imageSrc = productData.src;

document.getElementById('product-page-heading').textContent = mainHeading;
document.getElementById('product-page-image').src = imageSrc;   

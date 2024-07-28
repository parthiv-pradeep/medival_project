document.addEventListener('DOMContentLoaded', () => {
    fetch('./json/medical_products.json')
        .then(response => response.json())
        .then(data => {
            populateProducts('medical', data.medical);
            populateProducts('disposable', data.disposable);
            populateProducts('dressing', data.dressing);
            populateProducts('syringe', data.syringe);
        })
        .catch(error => console.error('Error fetching products:', error));
});

function populateProducts(category, products) {
    const section = document.getElementById(`${category}_section`);
    const container = section.querySelector('.medical_disposibles_card_container');
    container.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('a');
        card.href = 'product1.html';
        card.classList.add('medical_disposible_card');

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('med_disposible_image');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.classList.add('med_disposible_img');

        imgDiv.appendChild(img);

        const nameDiv = document.createElement('div');
        nameDiv.classList.add('med_disposible_name');

        const h4 = document.createElement('h4');
        h4.classList.add('med_disposible_name_h4');
        h4.textContent = product.name;

        nameDiv.appendChild(h4);
        card.appendChild(imgDiv);
        card.appendChild(nameDiv);
        container.appendChild(card);
    });
}

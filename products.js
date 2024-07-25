  // Fetch the JSON data
  fetch('products.json')
  .then(response => response.json())
  .then(data => {
      // Get the container where the products will be displayed
      const container = document.getElementById('product-container');

      // Loop through the data and create HTML elements for each product
      data.forEach(product => {
          // Create a div to hold the product details
          const product_link = document.createElement('a');
          product_link.classList.add('product_page_link');
          product_link.addEventListener('click', (event) => {
            // event.preventDefault(); // Prevent the default anchor behavior
            console.log(`Product ${product.name} clicked!`);
            // You can add more actions here, like navigating to a different page or showing a modal
          });
          

          const productDiv = document.createElement('div');
          productDiv.classList.add('medical_disposible_card'); // Add class to the div
          product_link.appendChild(productDiv);

          // Create an image element
          const img = document.createElement('img');
          img.classList.add('med_disposible_img');
          img.src = product.image;
          img.alt = product.name;

          // Create a paragraph element for the product name
          const name = document.createElement('h4');
          name.classList.add('med_disposible_name_h4');
          name.textContent = product.name;


          // Append the image and name to the product div
          
          productDiv.appendChild(img);
          productDiv.appendChild(name);

          // Append the product div to the container
          container.appendChild(product_link);
          product_link.href = "product1.html";
      });
  })
  .catch(error => console.error('Error fetching products:', error));

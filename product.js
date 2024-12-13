function fetchProducts(category) {
    const container = document.getElementById('productContainer');
    container.innerHTML = ''; // Очищаем контейнер перед загрузкой новых товаров

    fetch(`https://dummyjson.com/products`)
        .then(res => res.json())
        .then(data => {
            // Перебираем продукты и добавляем их на страницу
            data.products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');

                const img = document.createElement('img');
                img.src = product.thumbnail;
                img.alt = product.title;
                productDiv.appendChild(img);

                const title = document.createElement('h3');
                title.textContent = product.title;
                productDiv.appendChild(title);

                const categoryText = document.createElement('p');
                categoryText.textContent = `Категория: ${product.category}`;
                productDiv.appendChild(categoryText);

                const price = document.createElement('p');
                price.textContent = `Цена: ${product.price}$`;
                productDiv.appendChild(price);

                container.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error:', error));
}

function fetchAllProducts() {
    const categories = ['womens-watches', 'womens-bags', 'womens-dresses', 'beauty', 'skin-care'];
    const container = document.getElementById('productContainer');
    container.innerHTML = ''; // Очищаем контейнер перед загрузкой новых товаров

    categories.forEach(category => {
        fetchProducts(category);
    });
}


fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const title = product.title;
      const price = product.price;

      // Создать карточку продукта
      const card = document.createElement("div");
      card.classList.add("product-card");
      
      // Добавить наименование и цену в карточку
      const titleElement = document.createElement("h3");
      titleElement.textContent = title;
      
      const priceElement = document.createElement("p");
      priceElement.textContent = "Цена: $" + price;
      
      card.appendChild(titleElement);
      card.appendChild(priceElement);
      
      // Добавить карточку на страницу
      const productsContainer = document.getElementById("products-container");
      productsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.log("Произошла ошибка при получении данных:", error);
  });

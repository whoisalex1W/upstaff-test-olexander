const insertNewProduct = () => {
    const productsList = document.querySelector('.product-items');
    const newProduct = document.createElement('li');
    productsList.insertBefore(newProduct, productsList.children[4]);

    const cardInfo = document.createElement('div');
    const cardPrice = document.createElement('div');

    cardInfo.innerHTML = 'New product';
    cardPrice.innerHTML = 'Price';

    newProduct.appendChild(cardInfo);
    newProduct.appendChild(cardPrice);

    newProduct.style.width = '50%';
    newProduct.style.margin = '1rem 0';
    newProduct.style.padding = '0.5rem';
    newProduct.style.boxSizing = 'border-box';
    newProduct.style.display = 'flex';
    newProduct.style.flexDirection = 'column';
    newProduct.style.minHeight = '400px';
    newProduct.style.gap = '3px';
    
    cardInfo.style.width = '100%';
    cardInfo.style.height = '100%';
    cardInfo.style.boxShadow = '1px 1px 5px 5px #f1f1f1';
    cardInfo.style.borderRadius = '10px';
    cardInfo.style.background = '#fff';
    cardInfo.style.display = 'flex';
    cardInfo.style.alignItems = 'center';
    cardInfo.style.justifyContent = 'center';

    cardPrice.style.font = 'inherit';
    cardPrice.style.fontSize = '0.7rem';
    cardPrice.style.padding = '0.25rem 0';

    cardPrice.style.textAlign = 'center';
    
    window.addEventListener('resize', () => {
        const screenWidth = window.innerWidth;
      
        if (screenWidth >= 1200) {
            newProduct.style.width = '50%';
        } else if (screenWidth >= 768) {
            newProduct.style.width = '66.66%';
        } else {
            newProduct.style.width = '100%';
        }
      });
}

insertNewProduct();

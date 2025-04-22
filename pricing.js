const pricingData = [
    {
      id:1,
      title: 'FREE',
      price: '0',
      subtitle: 'Organize across all apps by hand',
      features: ['Pricing Feature', 'Pricing Feature', 'Pricing Feature', 'Pricing Feature', 'Pricing Feature']
    },
    {
      id:2,
      title: 'STANDARD',
      price: '10',
      subtitle: 'Organize across all apps by hand',
      features: ['Pricing Feature', 'Pricing Feature', 'Pricing Feature', 'Pricing Feature', 'Pricing Feature']
    },
    {
      id:3,
      title: 'BUSINESS',
      price: '99',
      subtitle: 'Organize across all apps by hand',
      features: ['Pricing Feature', 'Pricing Feature', 'Pricing Feature', 'Pricing Feature', 'Pricing Feature']
    }
  ];

  const Pricecontainer = document.getElementById('pricing-container');

  pricingData.forEach(plan => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
    <div class="card-text">
      <h3>${plan.title}</h3>
      <p>${plan.subtitle}</p></div>
      <div class="price-container">
        <span class="price-number">${plan.price}</span>
        <div class="price-right">
          <span class="price-symbol">$</span>
          <span class="per-month">Per Month</span>
        </div>
      </div><div class="card-content">
      ${plan.features.map(f => `<p>${f}</p>`).join('')}</div>
      <button class="order-btn">Order Now</button>
    `;
    
    // Add hover effect to increase padding in y-direction
    // card.addEventListener('mouseenter', () => {
    //   card.style.paddingTop = '25px';
    //   card.style.paddingBottom = '25px';
    //   card.classList.add('card-active');
    // });
    
    // card.addEventListener('mouseleave', () => {
    //   card.style.paddingTop = '';
    //   card.style.paddingBottom = '';
    //   card.classList.remove('card-active');
    // });
    

    Pricecontainer.appendChild(card);
  });

  // const cards = document.querySelectorAll('.card');

  // cards.forEach(card => {
  //   card.addEventListener('mouseenter', () => {
  //     card.style.padding = '40px';
  //   });
  
  //   card.addEventListener('mouseleave', () => {
  //     card.style.padding = '20px';
  //   });
  // });
const pricingData = [
    {
      title: 'FREE',
      price: '0',
      subtitle: 'Organize across all apps by hand',
      features: ['Pricing Feature', 'Pricing Feature', 'Pricing Feature', 'Pricing Feature', 'Pricing Feature']
    },
    {
      title: 'STANDARD',
      price: '10',
      subtitle: 'Organize across all apps by hand',
      features: ['Pricing Feature', 'Pricing Feature', 'Pricing Feature', 'Pricing Feature', 'Pricing Feature']
    },
    {
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
      </div><div class=card-content>
      ${plan.features.map(f => `<p>${f}</p>`).join('')}</div>
      <button class="order-btn">Order Now</button>
    `;
    // card.addEventListener('hover', () => {
    //   document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
    //   card.classList.add('active');
    // });
    Pricecontainer.appendChild(card);
  });
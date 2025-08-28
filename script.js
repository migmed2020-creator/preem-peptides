// Product catalog for Preem Peptides
// Each product has a name and an array of available sizes with their prices.
const products = [
  {
    category: "Weight Loss & Appetite Control",
    items: [
      {
        name: "Retatrutide",
        options: [
          { size: "5mg", price: 60 },
          { size: "10mg", price: 90 },
          { size: "15mg", price: 110 },
          { size: "20mg", price: 135 },
          { size: "30mg", price: 200 },
        ],
      },
      {
        name: "Semaglutide",
        options: [
          { size: "5mg", price: 55 },
          { size: "10mg", price: 75 },
          { size: "15mg", price: 95 },
          { size: "20mg", price: 120 },
          { size: "30mg", price: 155 },
        ],
      },
      {
        name: "Tirzepatide",
        options: [
          { size: "10mg", price: 80 },
          { size: "15mg", price: 120 },
          { size: "20mg", price: 170 },
          { size: "30mg", price: 220 },
          { size: "40mg", price: 255 },
          { size: "60mg", price: 300 },
        ],
      },
      {
        name: "Cagrilintide",
        options: [
          { size: "5mg", price: 90 },
          { size: "10mg", price: 150 },
        ],
      },
      {
        name: "AOD9604",
        options: [
          { size: "2mg", price: 45 },
          { size: "5mg", price: 80 },
        ],
      },
    ],
  },
  {
    category: "Muscle Growth, Strength & Performance",
    items: [
      {
        name: "IGF-1 LR3",
        options: [ { size: "1mg", price: 85 } ],
      },
      {
        name: "GDF-8 (Myostatin Inhibitor)",
        options: [ { size: "1mg", price: 80 } ],
      },
      {
        name: "Ipamorelin",
        options: [
          { size: "5mg", price: 40 },
          { size: "10mg", price: 75 },
        ],
      },
      {
        name: "CJC-1295",
        options: [
          { size: "2mg", price: 30 },
          { size: "5mg", price: 70 },
        ],
      },
      {
        name: "Tesamorelin",
        options: [
          { size: "2mg", price: 35 },
          { size: "5mg", price: 50 },
          { size: "10mg", price: 90 },
        ],
      },
      {
        name: "Sermorelin",
        options: [
          { size: "2mg", price: 25 },
          { size: "5mg", price: 60 },
        ],
      },
    ],
  },
  {
    category: "Healing, Recovery & Anti-Inflammatory",
    items: [
      {
        name: "BPC-157",
        options: [
          { size: "10mg", price: 95 },
        ],
      },
      {
        name: "BPC-157 5mg + TB 5mg",
        options: [ { size: "5mg + 5mg", price: 135 } ],
      },
      {
        name: "TB-500",
        options: [
          { size: "5mg", price: 60 },
          { size: "10mg", price: 105 },
        ],
      },
      {
        name: "GLOW Blend (BPC-157 10mg / GHK-CU 50mg / TB-500 10mg)",
        options: [ { size: "GLOW Blend", price: 110 } ],
      },
      {
        name: "Thymosin Alpha-1",
        options: [
          { size: "5mg", price: 65 },
          { size: "10mg", price: 100 },
        ],
      },
    ],
  },
  {
    category: "Anti-Aging/Longevity & Cosmetic",
    items: [
      {
        name: "Epitalon",
        options: [
          { size: "10mg", price: 40 },
          { size: "50mg", price: 90 },
        ],
      },
      {
        name: "GHK-CU",
        options: [
          { size: "50mg", price: 55 },
          { size: "100mg", price: 90 },
        ],
      },
      {
        name: "NAD+",
        options: [
          { size: "100mg", price: 50 },
          { size: "500mg", price: 100 },
        ],
      },
      {
        name: "Glutathione",
        options: [ { size: "1500mg", price: 65 } ],
      },
      {
        name: "SNAP-8 (Anti-Wrinkle Peptide)",
        options: [ { size: "10mg", price: 45 } ],
      },
    ],
  },
  {
    category: "Cognitive & Neurological Support",
    items: [
      {
        name: "Semax",
        options: [
          { size: "5mg", price: 45 },
          { size: "10mg", price: 85 },
        ],
      },
      {
        name: "MOTS-C",
        options: [
          { size: "10mg", price: 75 },
          { size: "40mg", price: 105 },
        ],
      },
      {
        name: "SS-31",
        options: [
          { size: "10mg", price: 80 },
          { size: "50mg", price: 100 },
        ],
      },
    ],
  },
  {
    category: "Libido & Sexual Health",
    items: [
      {
        name: "PT-141 (Bremelanotide)",
        options: [ { size: "10mg", price: 70 } ],
      },
      {
        name: "HCG",
        options: [
          { size: "2000iu", price: 45 },
          { size: "5000iu", price: 65 },
          { size: "10000iu", price: 120 },
        ],
      },
    ],
  },
  {
    category: "Reconstitution",
    items: [
      {
        name: "BAC Water",
        options: [ { size: "10ml", price: 10 } ],
      },
    ],
  },
];

// Cart state
let cart = [];

// Tax and shipping constants
const TAX_RATE = 0.07;
const SHIPPING_FEE = 15;

// Initialize age verification modal
function initAgeModal() {
  const ageModal = document.getElementById('ageModal');
  const ageConfirmBtn = document.getElementById('ageConfirmBtn');
  const ageVerified = localStorage.getItem('ageVerified');
  if (ageVerified) {
    ageModal.classList.add('hidden');
  } else {
    ageModal.classList.remove('hidden');
  }
  ageConfirmBtn.addEventListener('click', () => {
    localStorage.setItem('ageVerified', 'true');
    ageModal.classList.add('hidden');
  });
}

// Render products on the page
function renderProducts() {
  const container = document.getElementById('productContainer');
  products.forEach((category) => {
    const section = document.createElement('section');
    section.className = 'category';
    // Category title
    const title = document.createElement('h3');
    title.className = 'category-title';
    title.textContent = category.category;
    section.appendChild(title);
    // Grid for products
    const grid = document.createElement('div');
    grid.className = 'products-grid';
    category.items.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      // Product name
      const nameEl = document.createElement('div');
      nameEl.className = 'product-name';
      nameEl.textContent = item.name;
      card.appendChild(nameEl);
      // Size select
      const select = document.createElement('select');
      select.className = 'option-select';
      item.options.forEach((opt) => {
        const optionEl = document.createElement('option');
        optionEl.value = opt.size;
        optionEl.dataset.price = opt.price;
        optionEl.textContent = `${opt.size} – $${opt.price}`;
        select.appendChild(optionEl);
      });
      card.appendChild(select);
      // Quantity input
      const qtyInput = document.createElement('input');
      qtyInput.className = 'quantity-input';
      qtyInput.type = 'number';
      qtyInput.min = 1;
      qtyInput.value = 1;
      card.appendChild(qtyInput);
      // Add to cart button
      const addBtn = document.createElement('button');
      addBtn.className = 'btn';
      addBtn.textContent = 'Add to cart';
      addBtn.addEventListener('click', () => {
        const selectedOption = select.options[select.selectedIndex];
        const size = selectedOption.value;
        const price = parseFloat(selectedOption.dataset.price);
        const quantity = parseInt(qtyInput.value, 10);
        addToCart(item.name, size, price, quantity);
      });
      card.appendChild(addBtn);
      grid.appendChild(card);
    });
    section.appendChild(grid);
    container.appendChild(section);
  });
}

// Add item to cart; combine if same product and size
function addToCart(name, size, price, quantity) {
  // find existing item
  const existing = cart.find((it) => it.name === name && it.size === size);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ name, size, price, quantity });
  }
  updateCartUI();
}

// Remove item from cart by index
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

// Calculate total price
function calculateSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// Calculate overall total including tax and shipping
function calculateTotal() {
  const subtotal = calculateSubtotal();
  const tax = subtotal * TAX_RATE;
  const shipping = cart.length > 0 ? SHIPPING_FEE : 0;
  return subtotal + tax + shipping;
}

// Update cart UI elements
function updateCartUI() {
  const cartCountEl = document.getElementById('cartCount');
  cartCountEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartItemsEl = document.getElementById('cartItems');
  cartItemsEl.innerHTML = '';
  cart.forEach((item, idx) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    const details = document.createElement('div');
    details.className = 'cart-item-details';
    const nameLine = document.createElement('div');
    nameLine.className = 'cart-item-name';
    nameLine.textContent = item.name;
    const sizeLine = document.createElement('div');
    sizeLine.className = 'cart-item-size';
    sizeLine.textContent = `Size: ${item.size}`;
    const qtyLine = document.createElement('div');
    qtyLine.className = 'cart-item-qty';
    qtyLine.textContent = `Qty: ${item.quantity}`;
    details.appendChild(nameLine);
    details.appendChild(sizeLine);
    details.appendChild(qtyLine);
    const priceLine = document.createElement('div');
    priceLine.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-item-btn';
    removeBtn.textContent = '×';
    removeBtn.addEventListener('click', () => removeFromCart(idx));
    itemEl.appendChild(details);
    itemEl.appendChild(priceLine);
    itemEl.appendChild(removeBtn);
    cartItemsEl.appendChild(itemEl);
  });
  // Update price breakdown
  const subtotalEl = document.getElementById('cartSubtotal');
  const taxEl = document.getElementById('cartTax');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');
  const subtotal = calculateSubtotal();
  const tax = subtotal * TAX_RATE;
  const shipping = cart.length > 0 ? SHIPPING_FEE : 0;
  subtotalEl.textContent = subtotal.toFixed(2);
  taxEl.textContent = tax.toFixed(2);
  shippingEl.textContent = shipping.toFixed(2);
  totalEl.textContent = (subtotal + tax + shipping).toFixed(2);
}

// Toggle cart sidebar visibility
function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  sidebar.classList.toggle('open');
}

// Show checkout modal
function showCheckout() {
  if (cart.length === 0) return;
  // Populate order summary in the modal
  const summaryDiv = document.getElementById('orderSummary');
  summaryDiv.innerHTML = '';
  let summaryHtml = '<h3>Order Summary</h3><ul style="list-style:none;padding-left:0;">';
  cart.forEach((item) => {
    summaryHtml += `<li>${item.name} (${item.size}) x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</li>`;
  });
  summaryHtml += '</ul>';
  const subtotal = calculateSubtotal();
  const tax = subtotal * TAX_RATE;
  const shipping = cart.length > 0 ? SHIPPING_FEE : 0;
  const total = subtotal + tax + shipping;
  summaryHtml += `<p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>`;
  summaryHtml += `<p><strong>Tax (7%):</strong> $${tax.toFixed(2)}</p>`;
  summaryHtml += `<p><strong>Shipping:</strong> $${shipping.toFixed(2)}</p>`;
  summaryHtml += `<p><strong>Total:</strong> $${total.toFixed(2)}</p>`;
  summaryDiv.innerHTML = summaryHtml;
  const modal = document.getElementById('checkoutModal');
  modal.classList.remove('hidden');
}

// Hide checkout modal
function hideCheckout() {
  const modal = document.getElementById('checkoutModal');
  modal.classList.add('hidden');
}

// Prepare and launch order email
function submitOrder(event) {
  event.preventDefault();
  if (cart.length === 0) return;
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const zip = document.getElementById('zip').value;
  // Build order summary for email
  let orderSummary = '';
  cart.forEach((item) => {
    orderSummary += `${item.name} (${item.size}) x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
  });
  const subtotal = calculateSubtotal();
  const tax = subtotal * TAX_RATE;
  const shipping = cart.length > 0 ? SHIPPING_FEE : 0;
  const total = subtotal + tax + shipping;
  orderSummary += `Subtotal: $${subtotal.toFixed(2)}\n`;
  orderSummary += `Tax (7%): $${tax.toFixed(2)}\n`;
  orderSummary += `Shipping: $${shipping.toFixed(2)}\n`;
  orderSummary += `Total: $${total.toFixed(2)}\n\n`;
  orderSummary += `Customer Name: ${fullName}\nEmail: ${email}\nAddress: ${address}\nZIP Code: ${zip}\n\n`;
  orderSummary += `Please attach a screenshot of your Venmo payment as proof of payment.`;
  // Prepare mailto for vendor
  const subject = encodeURIComponent('New Order via Venmo');
  const body = encodeURIComponent(orderSummary);
  const mailtoLink = `mailto:preem.peptides.research@gmail.com?subject=${subject}&body=${body}`;
  // Prepare Venmo payment link
  const venmoAmount = total.toFixed(2);
  const note = encodeURIComponent('Preem Peptides order');
  // Use venmo.com payment link (non-deep link to avoid issues)
  const venmoLink = `https://venmo.com?txn=pay&audience=friends&recipients=Preem-Peptides-3&amount=${venmoAmount}&note=${note}`;
  // Open Venmo payment in new tab
  window.open(venmoLink, '_blank');
  // Trigger automatic email to vendor in current tab
  window.location.href = mailtoLink;
  // Clear cart and close checkout
  cart = [];
  updateCartUI();
  hideCheckout();
  toggleCart();
}

// Setup event listeners after DOM load
document.addEventListener('DOMContentLoaded', () => {
  initAgeModal();
  renderProducts();
  updateCartUI();
  // Cart toggle button
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  cartToggleBtn.addEventListener('click', toggleCart);
  // Close cart button
  const closeCartBtn = document.getElementById('closeCartBtn');
  closeCartBtn.addEventListener('click', toggleCart);
  // Checkout button in cart
  const paymentBtn = document.getElementById('paymentBtn');
  paymentBtn.addEventListener('click', showCheckout);
  // Cancel checkout button
  const cancelCheckoutBtn = document.getElementById('cancelCheckoutBtn');
  cancelCheckoutBtn.addEventListener('click', hideCheckout);
  // Submit order form
  const checkoutForm = document.getElementById('checkoutForm');
  checkoutForm.addEventListener('submit', submitOrder);
});
const categories = [
  {
  name: "Adapter",
  icon: "🔌",
  image: "https://images.unsplash.com/photo-1564517945244-d371c925640b?auto=format&fit=crop&w=800"
  },
  {
    name: "Keyboard",
    icon: "⌨️",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800"
  },
  {
    name: "Mouse",
    icon: "🖱️",
    image: "https://images.unsplash.com/photo-1613141412501-9012977f1969?auto=format&fit=crop&w=800"
  },
  {
    name: "Headset",
    icon: "🎧",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800"
  },
  {
  name: "Drive",
  icon: "💾",
  image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800"
  },
  {
  name: "Power Bank",
  icon: "🔋",
  image: "https://images.unsplash.com/photo-1585995603413-eb35b5f4a50b?auto=format&fit=crop&w=800"
  },
  {
  name: "Speakers",
  icon: "🔊",
  image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=800"
},
];

// Products

const products = [
  {
    id:2,
    name:'Corsair K65 Mini RGB',
    category:'Keyboard',
    price:'Rs 4,500',
    oldPrice: 'Rs 6,000',
    img:'images/Categoryimages/Keyboards/Corsair k65 mini rgb/Corsair1.jpeg',
    images:[
      'images/Categoryimages/Keyboards/Corsair k65 mini rgb/Corsair1.jpeg',
      'images/Categoryimages/Keyboards/Corsair k65 mini rgb/Corsair2.jpeg',
      'images/Categoryimages/Keyboards/Corsair k65 mini rgb/Corsair3.jpeg',
      'images/Categoryimages/Keyboards/Corsair k65 mini rgb/Corsair4.jpeg',
      'images/Categoryimages/Keyboards/Corsair k65 mini rgb/Corsair5.jpeg',
    ],
    description:'Mechanical RGB keyboard.'
  },
  {
    id:5,
    name:'HyperX Allow Origin',
    category:'Keyboard',
    price:'Rs 6,500',
    oldPrice: 'Rs 10,000',
    img:'images/Categoryimages/Keyboards/HyperX Allow Origin/HyperX1.jpeg',
    images:[
      'images/Categoryimages/Keyboards/HyperX Allow Origin/HyperX1.jpeg',
      'images/Categoryimages/Keyboards/HyperX Allow Origin/HyperX2.jpeg',
      'images/Categoryimages/Keyboards/HyperX Allow Origin/HyperX3.jpeg',
    ],
    description:'Mechanical RGB keyboard.'
  },
  {
    id:6,
    name:'Logitech Wireless K480',
    category:'Keyboard',
    price:'Rs 3,000',
    oldPrice: 'Rs 7,000',
    img:'images/Categoryimages/Keyboards/Logitech Wireless K480/Logitech1.jpeg',
    images:[
      'images/Categoryimages/Keyboards/Logitech Wireless K480/Logitech1.jpeg',
      'images/Categoryimages/Keyboards/Logitech Wireless K480/Logitech2.jpeg',
      'images/Categoryimages/Keyboards/Logitech Wireless K480/Logitech3.jpeg',
      'images/Categoryimages/Keyboards/Logitech Wireless K480/Logitech4.jpeg',
      'images/Categoryimages/Keyboards/Logitech Wireless K480/Logitech5.jpeg',
    ],
    description:'Mechanical RGB keyboard.'
  },
  {
    id:7,
    name:'Redragon K688 Pro',
    category:'Keyboard',
    price:'Rs 6,500',
    oldPrice: 'Rs 8,000',
    img:'images/Categoryimages/Keyboards/Redragon k688 pro/Redragon1.jpeg',
    images:[
      'images/Categoryimages/Keyboards/Redragon k688 pro/Redragon1.jpeg',
      'images/Categoryimages/Keyboards/Redragon k688 pro/Redragon2.jpeg',
      'images/Categoryimages/Keyboards/Redragon k688 pro/Redragon3.jpeg',
      'images/Categoryimages/Keyboards/Redragon k688 pro/Redragon4.jpeg',
      'images/Categoryimages/Keyboards/Redragon k688 pro/Redragon5.jpeg',
    ],
    description:'Mechanical RGB keyboard.'
  },
  {
    id:8,
    name:'Jabra Evolve 2 65',
    category:'Headset',
    price:'Rs 8,000',
    oldPrice: 'Rs 12,000',
    img:'images/Categoryimages/headset/Jabra Evolve 2 65/Jabra1.jpeg',
    images:[
      'images/Categoryimages/headset/Jabra Evolve 2 65/Jabra1.jpeg',
      'images/Categoryimages/headset/Jabra Evolve 2 65/Jabra2.jpeg',
      'images/Categoryimages/headset/Jabra Evolve 2 65/Jabra3.jpeg',
    ],
    description:'Surround sound headset.'
  },
  {
    id:9,
    name:'Plantronics Voyager Focus 1',
    category:'Headset',
    price:'Rs 3,500',
    oldPrice: 'Rs 4,500',
    img:'images/Categoryimages/headset/Plantronics Voyager Focus 1/Plantronics1.jpeg',
    images:[
      'images/Categoryimages/headset/Plantronics Voyager Focus 1/Plantronics1.jpeg',
      'images/Categoryimages/headset/Plantronics Voyager Focus 1/Plantronics2.jpeg',
      'images/Categoryimages/headset/Plantronics Voyager Focus 1/Plantronics3.jpeg',
      'images/Categoryimages/headset/Plantronics Voyager Focus 1/Plantronics4.jpeg',
      'images/Categoryimages/headset/Plantronics Voyager Focus 1/Plantronics5.jpeg',
    ],
    description:'Surround sound headset.'
  },
  {
    id:10,
    name:'Plantronics Voyager Focus 2',
    category:'Headset',
    price:'Rs 5,500',
    oldPrice: 'Rs 6,500',
    img:'images/Categoryimages/headset/Plantronics Voyager Focus 2/Plantronics1.jpeg',
    images:[
      'images/Categoryimages/headset/Plantronics Voyager Focus 2/Plantronics1.jpeg',
      'images/Categoryimages/headset/Plantronics Voyager Focus 2/Plantronics2.jpeg',
      'images/Categoryimages/headset/Plantronics Voyager Focus 2/Plantronics3.jpeg',
      'images/Categoryimages/headset/Plantronics Voyager Focus 2/Plantronics4.jpeg',
    ],
    description:'Surround sound headset.'
  },
  {
    id:11,
    name:'MSI Clutch G08',
    category:'Mouse',
    price:'Rs 2,000',
    oldPrice: 'Rs 4,500',
    img:'images/Categoryimages/Mouse/Msi clutch g08/MSI1.jpeg',
    images:[
      'images/Categoryimages/Mouse/Msi clutch g08/MSI1.jpeg',
      'images/Categoryimages/Mouse/Msi clutch g08/MSI2.jpeg',
      'images/Categoryimages/Mouse/Msi clutch g08/MSI3.jpeg',
      'images/Categoryimages/Mouse/Msi clutch g08/MSI4.jpeg',
      'images/Categoryimages/Mouse/Msi clutch g08/MSI5.jpeg',
    ],
    description:'High precision mouse.'
  },
  {
    id:12,
    name:'Samsung 25w Adapter',
    category:'Adapter',
    price:'Rs 1,200',
    oldPrice: 'Rs 2,000',
    img:'images/Categoryimages/Adaptors/Samsung 25w adaptor/Samsung25w1.jpeg',
    images:[
      'images/Categoryimages/Adaptors/Samsung 25w adaptor/Samsung25w1.jpeg',
      'images/Categoryimages/Adaptors/Samsung 25w adaptor/Samsung25w2.jpeg',
      'images/Categoryimages/Adaptors/Samsung 25w adaptor/Samsung25w3.jpeg',
      'images/Categoryimages/Adaptors/Samsung 25w adaptor/Samsung25w4.jpeg',
      'images/Categoryimages/Adaptors/Samsung 25w adaptor/Samsung25w5.jpeg',
      'images/Categoryimages/Adaptors/Samsung 25w adaptor/Samsung25w6.jpeg',
    ],
    description:'Reliable adapter for fast, safe, and stable power connections.'
  },
  {
    id:13,
    name:'Green NVME SSD',
    category:'Drive',
    price:'Rs 4,000',
    oldPrice: 'Rs 5,000',
    img:'images/Categoryimages/drives/Green Nvme ssd/Green1.jpeg',
    images:[
      'images/Categoryimages/drives/Green Nvme ssd/Green1.jpeg',
      'images/Categoryimages/drives/Green Nvme ssd/Green2.jpeg',
      'images/Categoryimages/drives/Green Nvme ssd/Green3.jpeg',
    ],
    description:'Fast NVMe SSD for quick booting, loading, and reliable storage.'
  },
  {
    id:14,
    name:'Anker Power House 90',
    category:'Power Bank',
    price:'Rs 15,000',
    oldPrice: 'Rs 20,000',
    img:'images/Categoryimages/Powerbanks/Anker power house 90/Anker1.jpeg',
    images:[
      'images/Categoryimages/Powerbanks/Anker power house 90/Anker1.jpeg',
      'images/Categoryimages/Powerbanks/Anker power house 90/Anker2.jpeg',
      'images/Categoryimages/Powerbanks/Anker power house 90/Anker3.jpeg',
      'images/Categoryimages/Powerbanks/Anker power house 90/Anker4.jpeg',
    ],
    description:'Fast NVMe SSD for quick booting, loading, and reliable storage.'
  },
  {
    id:15,
    name:'XSound Bluetooth',
    category:'Speakers',
    price:'Rs 6,000',
    oldPrice: 'Rs 8,000',
    img:'images/Categoryimages/speakers/XSound Bluetooth/Xsound1.jpeg',
    images:[
      'images/Categoryimages/speakers/XSound Bluetooth/Xsound1.jpeg',
      'images/Categoryimages/speakers/XSound Bluetooth/Xsound2.jpeg',
      'images/Categoryimages/speakers/XSound Bluetooth/Xsound3.jpeg',
      'images/Categoryimages/speakers/XSound Bluetooth/Xsound4.jpeg',
    ],
    description:'Powerful speakers with clear sound and rich bass for everyday use and entertainment.'
  },
  {
    id:16,
    name:'HyperX Elite Alloy',
    category:'Keyboard',
    price:'Rs 9,000',
    oldPrice: 'Rs 12,000',
    img:'images/Categoryimages/keyboards/HyperX Elite Alloy/HyperXElite1.jpeg',
    images:[
      'images/Categoryimages/keyboards/HyperX Elite Alloy/HyperXElite1.jpeg',
      'images/Categoryimages/keyboards/HyperX Elite Alloy/HyperXElite2.jpeg',
      'images/Categoryimages/keyboards/HyperX Elite Alloy/HyperXElite3.jpeg',
      'images/Categoryimages/keyboards/HyperX Elite Alloy/HyperXElite4.jpeg',
      'images/Categoryimages/keyboards/HyperX Elite Alloy/HyperXElite5.jpeg',
    ],
    description:'RGB Mechanical Keyboard'
  },
  
];

// STATE
let state = {
  activeCategory: 'all',
  search: ''
};

let cart = [];

// LOAD SAVED CART
const savedCart = localStorage.getItem('techhub_cart');

if(savedCart){
  cart = JSON.parse(savedCart);
}

// DOM
const grid = document.getElementById('grid');
const catsContainer = document.getElementById('categories');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');
const productControls = document.getElementById('productControls');
const backBtn = document.getElementById('backBtn');

// INIT
function init() {
  initNav();
  bindEvents();
  renderCategories();
  renderFooterCategories();
  renderProducts();
  renderCart();
}

/* ================= NAV ================= */
function initNav() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('active');
    }
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });
}

/* ================= EVENTS ================= */
function bindEvents() {
  searchInput.addEventListener('input', (e) => {
  state.search = e.target.value.toLowerCase();
  state.activeCategory = 'all';

  // SHOW/HIDE BACK BUTTON
  if (state.search.trim() !== '') {
    backBtn.style.display = 'block';
  } else {
    backBtn.style.display = 'none';
  }

  renderProducts();

  // 🔥 AUTO SCROLL TO PRODUCTS
  const grid = document.getElementById('grid');

  window.scrollTo({
    top: grid.offsetTop - 120,
    behavior: 'smooth'
  });
});

  filterSelect.addEventListener('change', (e) => {
  state.activeCategory = e.target.value;
  state.search = '';

  searchInput.value = '';

  // 🔥 SHOW/HIDE BACK BUTTON
  if (state.activeCategory !== 'all') {
    backBtn.style.display = 'block';
  } else {
    backBtn.style.display = 'none';
  }

  // 🔥 RE-RENDER CATEGORY BUTTONS
  renderCategories();

  renderProducts();

  // 🔥 AUTO SCROLL
  const grid = document.getElementById('grid');

  window.scrollTo({
    top: grid.offsetTop - 120,
    behavior: 'smooth'
  });
});

  document.getElementById('backBtn').onclick = () => {
    state.activeCategory = 'all';
    state.search = '';
    searchInput.value = '';
    filterSelect.value = 'all';
    backBtn.style.display = 'none';
    renderProducts();
  };
}

/* ================= CATEGORIES ================= */
function renderCategories() {
  catsContainer.innerHTML = categories.map(cat => `
    <div class="cat ${state.activeCategory === cat.name ? 'active' : ''}" data-cat="${cat.name}">
      <div style="font-size:2rem;">${cat.icon}</div>
      <div>${cat.name}</div>
    </div>
  `).join('');

  catsContainer.onclick = (e) => {
  const box = e.target.closest('.cat');
  if (!box) return;

  state.activeCategory = box.dataset.cat;
  backBtn.style.display = 'block';
  state.search = '';
  searchInput.value = '';
  productControls.style.display = 'flex';

  renderCategories();
  renderProducts();

  // 🔥 AUTO SCROLL TO PRODUCTS
  const grid = document.getElementById('grid');

  window.scrollTo({
    top: grid.offsetTop - 120,
    behavior: 'smooth'
  });
};

  filterSelect.innerHTML = `
    <option value="all">All Categories</option>
    ${categories.map(c => `<option value="${c.name}">${c.name}</option>`).join('')}
  `;
}

function renderFooterCategories() {
  const footer = document.getElementById('footerCategories');

  footer.innerHTML = categories.map(cat => `
    <li><a href="#" data-cat="${cat.name}">${cat.name}</a></li>
  `).join('');

  footer.onclick = (e) => {
  e.preventDefault();

  const link = e.target.closest('a');
  if (!link) return;

  state.activeCategory = link.dataset.cat;
  backBtn.style.display = 'block';
  state.search = '';

  searchInput.value = '';
  filterSelect.value = link.dataset.cat;

  productControls.style.display = 'flex';

  renderCategories();
  renderProducts();

  // 🔥 AUTO SCROLL TO PRODUCTS
  const grid = document.getElementById('grid');

  window.scrollTo({
    top: grid.offsetTop - 120,
    behavior: 'smooth'
  });
};
}

/* ================= PRODUCTS ================= */
function renderProducts() {

  // HOME (CATEGORY VIEW)
  if (state.activeCategory === 'all' && state.search === '') {
    grid.innerHTML = categories.map(cat => `
      <div class="card" data-cat="${cat.name}">
        <img src="${cat.image}" />
        <div class="card-body">
          <h3>${cat.name}</h3>
        </div>
      </div>
    `).join('');

    grid.onclick = (e) => {
  const card = e.target.closest('.card');
  if (!card) return;

  state.activeCategory = card.dataset.cat;
  backBtn.style.display = 'block';
  productControls.style.display = 'flex';

  renderCategories();
  renderProducts();

  // 🔥 AUTO SCROLL
  const grid = document.getElementById('grid');

  window.scrollTo({
    top: grid.offsetTop - 120,
    behavior: 'smooth'
  });
};

    return;
  }

  // PRODUCT VIEW
  const filtered = products.filter(p => {
    const matchCategory =
      state.activeCategory === 'all' || p.category === state.activeCategory;

    const matchSearch =
      p.name.toLowerCase().includes(state.search) ||
      p.category.toLowerCase().includes(state.search);

    return matchCategory && matchSearch;
  });

  grid.innerHTML = filtered.map(p => `
    <div class="card" onclick="openProduct(${p.id})">
      <img src="${p.img}" />
      <div class="card-body">
        <small>${p.category}</small>
        <h3>${p.name}</h3>
        <div class="price-wrap">
          ${p.oldPrice ? `<span class="old-price">${p.oldPrice}</span>` : ''}
          <div class="price">${p.price}</div>
        </div>
        <button class="cart-btn"
          onclick="event.stopPropagation(); addToCart(${p.id})">
          Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

function addToCart(id){
  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);

  if(existing){
    existing.qty += 1;
  } else {
    cart.push({
      ...product,
      qty: 1
    });
  }

  renderCart();
}

function renderCart(){

  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');

  // SAVE CART
  localStorage.setItem('techhub_cart', JSON.stringify(cart));

  // UPDATE COUNT
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);

  if(cart.length === 0){
    cartItems.innerHTML = '<p>Your cart is empty</p>';
    cartTotal.innerHTML = '';
    return;
  }

  let total = 0;

  cartItems.innerHTML = cart.map(item => {

    const price = parseInt(item.price.replace(/[^0-9]/g, ''));
    total += price * item.qty;

    return `
      <div class="cart-item">

        <img src="${item.img}" alt="${item.name}">

        <div class="cart-info">
          <strong>${item.name}</strong>
          <div>${item.price}</div>

          <div class="qty-controls">
            <button onclick="decreaseQty(${item.id})">−</button>

            <span>${item.qty}</span>

            <button onclick="increaseQty(${item.id})">+</button>
          </div>
        </div>

        <button class="remove-btn" onclick="removeItem(${item.id})">
          ×
        </button>

      </div>
    `;

  }).join('');

  cartTotal.innerHTML = `
    <div class="cart-total">
      Total: Rs ${total.toLocaleString()}
    </div>
  `;

  const message = cart.map(item => {

  const price = parseInt(item.price.replace(/[^0-9]/g, ''));

  return `${item.name}
  Qty: ${item.qty}
  Price: Rs ${price.toLocaleString()}
  Subtotal: Rs ${(price * item.qty).toLocaleString()}
  `;
  }).join('\n------------------\n');

document.getElementById('cartWhatsApp').href =
  `https://wa.me/923164183931?text=${encodeURIComponent(
    'Hello, I want to order:\n\n' +
    message +
    '\n\n==================\n' +
    'TOTAL: Rs ' + total.toLocaleString()
  )}`;
}

function increaseQty(id){

  const item = cart.find(x => x.id === id);

  if(item){
    item.qty += 1;
    renderCart();
  }
}

function decreaseQty(id){

  const item = cart.find(x => x.id === id);

  if(!item) return;

  item.qty -= 1;

  if(item.qty <= 0){
    cart = cart.filter(x => x.id !== id);
  }

  renderCart();
}

function removeItem(id){
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

function toggleCart(){

  document.getElementById('cart').classList.toggle('active');

  document.getElementById('cartOverlay').classList.toggle('active');
}

/* ================= MODAL ================= */
function openProduct(id) {
  event.stopPropagation(); // prevents weird bubbling

  const p = products.find(x => x.id === id);
  if (!p) return;

  window.currentProductId = id;

  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalCategory').textContent = p.category;
  document.getElementById('modalPrice').innerHTML = `
  ${p.oldPrice ? `<span class="old-price">${p.oldPrice}</span>` : ''}
  <span class="new-price">${p.price}</span>
`;
  document.getElementById('modalDescription').textContent = p.description;

  document.getElementById('modalAddToCart').onclick = () => {
  addToCart(p.id);
  };

  document.getElementById('modalBuyNow').href =
  `https://wa.me/923164183931?text=${encodeURIComponent(
    `I want to buy:\n\n${p.name}\n${p.price}`
  )}`;

  const mainImage = document.getElementById('mainImage');
  const thumbs = document.getElementById('thumbs');

  mainImage.src = p.images[0];

  thumbs.innerHTML = p.images.map((img, i) => `
    <img src="${img}" class="thumb ${i === 0 ? 'active' : ''}"
      onclick="changeImage(event, '${img}')">
  `).join('');

  document.getElementById('productModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function changeImage(e, src) {
  e.stopPropagation();
  document.getElementById('mainImage').src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
}

/* CLOSE MODAL */
document.getElementById('closeModal').onclick = () => {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = 'auto';
};

/* START */
init();
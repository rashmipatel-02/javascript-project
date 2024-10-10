const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

let products = [
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/I/4193g0Lz6aL._SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Samsung Galaxy S24',
        description: 'Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 512GB Storage)',
        price: 1679
    },
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/I/516LU0H963L._SL1500_.jpg',
        title: 'Wireless Mouse',
        description: 'Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black',
        price: 7
    },
    {
        id: 3,
        image: 'https://m.media-amazon.com/images/I/412CKVTe8dL._SY445_SX342_QL70_FMwebp_.jpg',
        title: 'Apple iPhone 15 Pro ',
        description: 'Apple iPhone 15 Pro Max (256 GB) - Natural Titanium',
        price: 1786
    },
    {
        id: 4,
        image: 'https://m.media-amazon.com/images/I/51HP7GfLsSL._SL1400_.jpg',
        title: ' Wireless Earbuds',
        description: 'Jabra Elite 4 Wireless Earbuds, Active Noise Cancelling, Comfortable Bluetooth Earphones with Spotify Tap Playback, Google Fast Pair, Microsoft Swift Pair and Dual Pairing - Navy',
        price: 119
    },
    {
        id: 5,
        image: 'https://m.media-amazon.com/images/I/41gI9yYlgQL._MCnd_AC_.jpg',
        title: ' Xiaomi 14',
        description: 'Xiaomi 14 (White, 12GB RAM, 512GB Storage) | 50MP Leica Professional Optics | 120 Hz 1.5K LTPO AMOLED | SD 8 Gen 3 Hyper OS',
        price: 839
    },
    {
        id: 6,
        image: 'https://m.media-amazon.com/images/I/71PWPoS+NtL._SL1500_.jpg',
        title: 'Samsung Galaxy Tab',
        description: 'Samsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch), S-Pen in Box, Slim and Light, Dolby Atmos Sound, 4 GB RAM, 64 GB ROM, Wi-Fi Tablet, Black',
        price: 120
    },
    {
        id: 7,
        image: 'https://m.media-amazon.com/images/I/616pwixz+YL._SL1500_.jpg',
        title: 'HP Laptop 15s',
        description: 'HP Laptop 15s, 12th Gen Intel Core i3, 15.6-inch (39.6 cm), 8GB DDR4, 512GB SSD, Thin & Light, Dual Speakers (Win 11, MSO 2021, Silver, 1.69 kg), fq5007TU / FQ5327TU',
        price: 443
    },
    {
        id: 8,
        image: 'https://m.media-amazon.com/images/I/61js9jPC5GL._SL1100_.jpg',
        title: 'Electric Nutri Blender',
        description: 'Glen Active Electric Nutri Blender 350 Watt | 2 Interchangeable Jars | Stainless Steel Blades, 2 Years Warranty - Black (Sa4048N), 350 Watt',
        price: 25
    }
];

const product = products.find(p => p.id === productId);

if (product) {
    document.getElementById('product-name').textContent = product.title;
    document.getElementById('product-des').textContent = product.description;

    const productImage = document.createElement('img');
    console.log(productImage)
    productImage.src = product.image;

    document.getElementById('img').appendChild(productImage);
    document.getElementById('product-price').textContent = `price: $${product.price}`;


    document.getElementById('add-to-cart-btn').addEventListener('click', function () {
        alert(` ${product.title} added to cart!`);
        window.location.href = 'cart.html'
    });
    
}
else {
    window.location.href = 'cart.html'
}

let counter = 0;

function updateDisplay(value) {
    document.getElementById("num").innerHTML = value;
    document.getElementById("subtotal").textContent = `Total Price: $${product.price * value}`
}

function Increment() {
    counter++;
    updateDisplay(counter);
}

function Decrement() {
    if (counter > 1) {
        counter--;
        updateDisplay(counter);
    }
}





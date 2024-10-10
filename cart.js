let product = [
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/I/4193g0Lz6aL._SX300_SY300_QL70_FMwebp_.jpg',
        title: 'Samsung Galaxy S24',
        price: 1679
    },
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/I/516LU0H963L._SL1500_.jpg',
        title: 'Wireless Mouse',
        price: 7
    },
    {
        id: 3,
        image: 'https://m.media-amazon.com/images/I/412CKVTe8dL._SY445_SX342_QL70_FMwebp_.jpg',
        title: 'Apple iPhone 15 Pro ',
        price: 1786
    },
    {
        id: 4,
        image: 'https://m.media-amazon.com/images/I/51HP7GfLsSL._SL1400_.jpg',
        title: ' Wireless Earbuds',
        price: 119
    },
    {
        id: 5,
        image: 'https://m.media-amazon.com/images/I/41gI9yYlgQL._MCnd_AC_.jpg',
        title: ' Xiaomi 14',
        price: 839
    },
    {
        id: 6,
        image: 'https://m.media-amazon.com/images/I/71PWPoS+NtL._SL1500_.jpg',
        title: 'Samsung Galaxy Tab',
        price: 120
    },
    {
        id: 7,
        image: 'https://m.media-amazon.com/images/I/616pwixz+YL._SL1500_.jpg',
        title: 'HP Laptop 15s',
        price: 443
    },
    {
        id: 8,
        image: 'https://m.media-amazon.com/images/I/61js9jPC5GL._SL1100_.jpg',
        title: 'Electric Nutri Blender',
        price: 25
    }
];

document.getElementById("search").addEventListener("keyup", (e) => {
    const searchdata = e.target.value.toLowerCase();
    const filterdata = product.filter((item) => {
        return (
            item.title.toLocaleLowerCase().includes(searchdata)
        )
    })
    displayitem(filterdata)
})

let i = 0;

const displayitem = (item) => {

    document.getElementById("root").innerHTML =
        item.map((item) => {
            var { image, title, price, id } = item;
            // console.log(title);
            // console.log(image);
            // console.log(price);

            return (
                `<div class="box">
                    <div class="image-box">
                        <a href="singleproduct.html?id=${id}">
                            <img src=${image}>
                        </a>
                    </div>
                    <div class="title">${title}</div>

                    <div class="priceorbtn"> 
                    <div class="price">$ ${price}.00</div>
                    
                    <a href="#" onclick= "add(${i++})"><i class="fa-solid fa-plus"></i></a>
                    </div>
                   
                </div>`
            )
        }).join('')
}
displayitem(product)

var cart = [];

function add(a) {
    cart.push({ ...product[a] })
    display()
}

function del(a) {
    cart.splice(a, 1)
    display();
}

function display() {
    let j = 0; total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById("cartitem").innerHTML = "<div>Your cart is empty</div>";
        document.getElementById("total").innerHTML = "$" + 0 + ".00";
    } else {
        document.getElementById("cartitem").innerHTML = cart.map((item) => {
            var { image, title, price } = item;
            total = total + price;
            document.getElementById("total").innerHTML = "$" + total + ".00";

            return (
                `<div class="cart">
                    <div class="cart-img">
                    <img  src="${image}">
                    </div>
                        <p style="font-size:18px;">${title}</p>
                        <h2 style="font-size:18px;">$ ${price}.00</h2>
                        ` +
                '<i class="fa-solid fa-trash del" onClick="del(' + (j++) + ')"></i> ' +
                '</div>'
            )
        }).join('')

        console.log(total);
    }
}


let counter = 0;

function updateDisplay(value) {
    document.getElementById("num").innerHTML = value;
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
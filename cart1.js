let product = [
    {
        id: 1,
        image: 'https://assets.ajio.com/medias/sys_master/root/20220323/iadl/623b12eef997dd03e2285335/-473Wx593H-4923681880-13plumsnroses-MODEL.jpg',
        brand: 'SUGAR COSMETICS',
        title: 'Matte Attack Transferproof Lipstick',
        price: 697
    },
    {
        id: 2,
        image: 'https://assets.ajio.com/medias/sys_master/root/20211026/jpSY/617822e0aeb2690110aa39cc/-473Wx593H-4919419160-softandgentle-MODEL.jpg',
        brand: 'INSIGHT COSMETICS',
        title: 'Mineralize Skinfinish Highlighter-Soft and Gentle',
        price: 355
    },
    {
        id: 3,
        image: 'https://assets.ajio.com/medias/sys_master/root/20211228/8asz/61ca4b1caeb26901101fa0f8/-473Wx593H-4919437880-siennasunset-MODEL.jpg',
        brand: 'BLUE HEAVEN',
        title: 'Powder Matte -Sienna Sunset N03',
        price: 165
    },
    {
        id: 4,
        image: 'https://assets.ajio.com/medias/sys_master/root/20211231/aVgh/61ce4356f997dd66230a76a9/-473Wx593H-4908449340-black-MODEL.jpg',
        brand: 'MAYBELLINE NEW YORK',
        title: 'Hyper Curl Waterproof Mascara Very Black',
        price: 108
    },
    {
        id: 5,
        image: 'https://assets.ajio.com/medias/sys_master/root/20220317/uiJJ/62332e83aeb26921afe13a2f/-473Wx593H-4924944190-ivory-MODEL.jpg',
        brand: 'INSIGHT COSMETICS',
        title: 'Hd Finishing Loose Powder-Ivory',
        price: 124
    },
    {
        id: 6,
        image: 'https://assets.ajio.com/medias/sys_master/root/20211228/cgq4/61ca4621f997ddf8f164b93c/-473Wx593H-4924928280-brownie-MODEL.jpg',
        brand: 'MISS CLAIRE',
        title: 'Butter Lip Balm - Brownie Bl08',
        price: 150
    },
    {
        id: 7,
        image: 'https://assets.ajio.com/medias/sys_master/root/20220317/kJTQ/62332ad1aeb26921afe127bf/-473Wx593H-4924944330-beige-MODEL.jpg',
        brand: 'INSIGHT COSMETICS',
        title: 'Blemish Free Concealer - Beige',
        price: 90
    },
    {
        id: 8,
        image: 'https://assets.ajio.com/medias/sys_master/root/20220617/E7zu/62ac471ff997dd03e2874f3a/-473Wx593H-4916532930-15lover-MODEL.jpg',
        brand: 'MAYBELLINE NEW YORK',
        title: '40 Believer Super Stay Matte Ink Liquid Lipstick',
        price: 559
    },
    {
        id: 9,
        image: 'https://assets.ajio.com/medias/sys_master/root/20230810/xNmc/64d4e650a9b42d15c9a0f50c/-473Wx593H-466442686-wine-MODEL.jpg',
        brand: 'NEUDIS',
        title: 'V-Neck Blouson Top with Cap Sleeves',
        price: 450
    },
    {
        id: 10,
        image: 'https://assets.ajio.com/medias/sys_master/root/20240404/KbWs/660ebf1516fd2c6e6a9d726d/-473Wx593H-466930041-grey-MODEL.jpg',
        brand: 'IVES',
        title: 'Women Floral Print 2-Piece Co-Ord Set',
        price: 719
    },
    {
        id: 11,
        image: 'https://assets.ajio.com/medias/sys_master/root/20230120/KgsD/63ca3854f997dd708e1473ef/-473Wx593H-443006718-olive-MODEL.jpg',
        brand: 'DNMX',
        title: 'Checked Shirt with Roll-Up Sleeves',
        price: 240
    },
    {
        id: 12,
        image: 'https://assets.ajio.com/medias/sys_master/root/20221031/dn93/635f6de8f997ddfdbd4ac672/-473Wx593H-443003440-ltpink-MODEL.jpg',
        brand: 'DNMX',
        title: 'Typographic Print Crew-Neck T-Shirt',
        price: 719
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
            var { image, title, price, brand } = item;
            // console.log(title);
            // console.log(image);
            // console.log(price);

            return (
                `<div class="box">
                    <div class="image-box">
                        <img src=${image}>
                    </div>
                    <div class="brand">${brand}</div>
                    <div class="title">${title}</div>
                    <div class="price">₹${price}</div>
                    <button onclick = "add(${i++})"><i class="fa-solid fa-bag-shopping"></i> Add To Bag</button>
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
    let j = 0; total = 0
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById("cartitem").innerHTML = "<div>Your cart is empty</div>";
        document.getElementById("total").innerHTML = "₹" + 0;

    } else {
        document.getElementById("cartitem").innerHTML = cart.map((item) => {
            var { image, title, price } = item;
            total = total + price;
            document.getElementById("total").innerHTML = "₹" + total + ".00";
            return (
                `<div class="cart">
                    <div class="cart-img">
                        <img  src="${image}">
                    </div>
                        <p style="font-size:12px;">${title}</p>
                        <h2 style="font-size:15px;"> ₹${price}.00</h2>` +
                '<i class="fa-solid fa-trash del" onClick="del(' + (j++) + ')" style="cursor:pointer"></i> ' +

                '</div>'
            )
        }).join('')

        console.log(total);
    }
}
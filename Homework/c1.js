const products = [
    {
        name:"Keyboard",
        price:25.50
    },
    {
        name:"Mouse",
        price:12.00
    },
    {
        name:"Monitor",
        price:149.99
    },
    {
        name:"USB Hub",
        price:18.75
    }
];

const cart = [];

const productDiv = document.getElementById("products");

products.forEach((product,index)=>{

    productDiv.innerHTML+=`
        <div class="card">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>

            <button onclick="addToCart(${index})">
                Add to cart
            </button>

        </div>
    `;
});

function addToCart(index){

    const product=products[index];

    const found=cart.find(item=>item.name===product.name);

    if(found){

        found.qty++;

    }else{

        cart.push({
            ...product,
            qty:1
        });
    }

    updateCart();
}

function removeItem(index){

    if(cart[index].qty>1){

        cart[index].qty--;

    }else{

        cart.splice(index,1);
    }

    updateCart();
}

function updateCart(){

    const cartItems=document.getElementById("cartItems");

    cartItems.innerHTML="";

    let total=0;

    let count=0;

    cart.forEach((item,index)=>{

        total+=item.price*item.qty;

        count+=item.qty;

        cartItems.innerHTML+=`

        <div class="item">

            <div>

                ${item.name} x ${item.qty}

            </div>

            <div>

                $${(item.price*item.qty).toFixed(2)}

                <button
                class="remove"
                onclick="removeItem(${index})">

                -

                </button>

            </div>

        </div>

        `;
    });

    document.getElementById("cartCount").innerHTML=count;

    document.getElementById("total").innerHTML=
    `Total: $${total.toFixed(2)}`;
}
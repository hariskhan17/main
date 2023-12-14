const arr = [];
let data;
const div = document.querySelector('.render-phones');
const checkout = document.querySelector('#checkout');


axios.get('https://api.escuelajs.co/api/v1/products')
.then((res)=>{
    // console.log(res.data);
    data = res.data
    for (let i = 0; i < res.data.length; i++) {
        // console.log(res.data[i].images[0]);
        // console.log(res.data[i]);  
        div.innerHTML += `
        <div style="border: 1px solid black;" class="m-5 p-5 rounded">
     
        <img width="200px" src="${res.data[i].images[1]}" alt="product-image">
        <h1>title: ${res.data[i].title}</h1> <br/>
        <h3>discription : ${res.data[i].description}
        <h3>price: ${res.data[i].price}</h3>
        <button onclick="addToCart(${i})" class="btn btn-primary m-2 btn-lg">Add to cart</button>
        </div>
        `
    }
}).catch((err)=>{
    console.log(err);
})

function addToCart (index){
    // console.log(data[index]);
    arr.push(data[index]);
    console.log(arr);
    Swal.fire({
        title: "Good job!",
        text: "Product added to cart successfully",
        icon: "success"
      });
}



checkout.addEventListener('click' , ()=>{
    localStorage.setItem('items' , JSON.stringify(arr));
    window.location = 'checkout.html';
    // localStorage.removeItem('items')
})



// axios.get('https://api.escuelajs.co/api/v1/products')
// .then((res)=>{
//     console.log(res.data);
// })
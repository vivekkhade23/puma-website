//store the products array in localstorage as "products"
function storedata(e){
    e.preventDefault();
    let form=document.getElementById("products");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
     
    let p1=new Product(type,desc,price,image);
    let data=JSON.parse(localStorage.getItem("products"))||[];
    data.push(p1);
    localStorage.setItem("products",JSON.stringify(data));
    console.log(p1);
}
function Product(type,desc,price,image){
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;
}
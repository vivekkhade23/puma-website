function append(){
    let data=JSON.parse(localStorage.getItem("products"))||[];
    let container=document.getElementById("all_products");
    data.forEach(function(el,index){
        let div=document.createElement("div");
        div.setAttribute("class","box")
        let img=document.createElement("img");
        img.src=el.image;
        img.setAttribute("class","img")
        let p=document.createElement("p");
        p.innerText=el.type;
        p1=document.createElement("p");
        p1.innerText=el.desc;
        p2=document.createElement("p");
        p2.innerText=el.price;
        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.setAttribute("id","remove_product")
        btn.addEventListener("click",function(){
           remove(index);
        //    el.splice(index,1);
        //    localStorage.setItem("products",JSON.stringify(index));
        })
        div.append(img,p,p1,p2,btn);
        container.append(div);
    });

}
append();

function remove(index){
   

    let data=JSON.parse(localStorage.getItem("products"))||[];
   
 let x=  data.splice(index,1);
 console.log(x)
    let data2=data.filter(function(ind){
     
                 return ind!==index;
                 
        
    })
    console.log(data);

    
    localStorage.setItem("products",JSON.stringify(data));


    let container=document.getElementById("all_products");
    container.innerText=null;
    data.forEach(function(el,index){
    let div=document.createElement("div");
    div.setAttribute("class","box")
    let img=document.createElement("img");
    img.src=el.image;
    img.setAttribute("class","img")
    let p=document.createElement("p");
    p.innerText=el.type;
    p1=document.createElement("p");
    p1.innerText=el.desc;
    p2=document.createElement("p");
    p2.innerText=el.price;
    let btn=document.createElement("button");
    btn.innerText="Remove";
    btn.addEventListener("click",function(){
        remove(index);
    })
    div.append(img,p,p1,p2,btn);
    container.append(div);
});
 
    console.log(data2,data);
}
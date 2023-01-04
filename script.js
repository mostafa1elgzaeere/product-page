let collape_btn=document.getElementsByTagName("button")[0]
let right_side_nav=document.getElementsByClassName("right-side-nav")[0]
let cursors=document.getElementsByClassName("cursors")[0]


// hide profile image and cart when nav is active and toggle cursors
collape_btn.onclick=()=>{
    right_side_nav.classList.toggle("hide")
    if(cursors.classList.contains("hide")){
        setTimeout(()=>{
            cursors.classList.remove("hide")
        },800)
    }
    else{
        cursors.classList.add("hide")
    }
}


// add and minus count of items textContent
let plus = document.getElementsByClassName("plus")[0]
let minus = document.getElementsByClassName("minus")[0]
let count = document.getElementsByClassName("count")[0]

plus.onclick=()=>{
    count.textContent=parseInt(count.textContent)+1
}
minus.onclick=()=>{
    if(count.textContent>0){
        count.textContent=parseInt(count.textContent)-1
    }
}


// for desktop modal 
let images_thubniles2=document.getElementsByClassName("images-small-two")[0]
let images2=images_thubniles2.children
let modal_image2=document.getElementById("modal_image")

for (let index = 0; index < images2.length; index++) {
    const element = images2[index];
    element.classList.remove("active")
    element.onclick=()=>{
        for (let index = 0; index < images2.length; index++) {
            const element2 = images2[index];
            element2.classList.remove("active")
        }
        modal_image2.src=element.src
        element.classList.add("active")
    }
}


// for open desktop modal
let images_thubniles=document.querySelector(".images-small")
let images=images_thubniles.children
let modal_image=document.getElementById("modal_image")


for (let index = 0; index < images.length; index++) {
    const element = images[index];

    element.onclick=()=>{
        for (let index = 0; index < images2.length; index++) {
            const element2 = images2[index];
            element2.classList.remove("active")
        }
        modal_image.src=element.src
    }
}



// curosrs in mobile modal
let mobile_image=document.getElementById("image-mobile")
let desk_modal_prev_btn=document.getElementById("dsk-modal-prev")
let desk_modal_next_btn=document.getElementById("dsk-modal-next")


var current_src=1


desk_modal_next_btn.onclick=()=>{
    if (current_src<images2.length) {
        mobile_image.src=images2[current_src].src
        current_src+=1
        console.log(current_src);
    }
    else{
        current_src=0
        mobile_image.src=images2[current_src].src
        current_src+=1
    }
}

desk_modal_prev_btn.onclick=()=>{
    if (current_src>=2){
        current_src-=1
        mobile_image.src=images2[current_src-1].src
    }
    else{
        current_src=images2.length
        mobile_image.src=images2[current_src-1].src
    }
}



// toggle showing cart 
let cart=document.getElementById("cart")
let cart_items=document.getElementsByClassName("cart-items")[0]
let cart_header=document.getElementsByClassName("cart-header")[0]
let cart_content_items=document.getElementsByClassName("cart-content-items")[0]

cart.onclick=()=>{
    cart_items.classList.toggle("show-cart")
    cart_header.classList.toggle("hide")
    cart_content_items.classList.toggle("hide")
}



// add to cart action
let Addtocart=document.getElementById("add-to-cart")
let price=parseInt(document.getElementById("price-cost").textContent)
let quantity_in_cart=document.getElementById("count-in-cart")
let total_price=document.getElementsByClassName("total-price")[0]

// check if cart is empty show text " Your Cart is Empty"
let is_empty=document.getElementById("is-empty")
let not_empty=document.getElementById("not-empty")

Addtocart.onclick=()=>{
    total_price.textContent="$"+(count.textContent*price);
    quantity_in_cart.textContent=count.textContent
    if(count.textContent>0){
        is_empty.style.display="none"
        not_empty.style.display="block"
    }
    else{
        not_empty.style.display="none"
        is_empty.style.display="block"
    }
}




// delete in cart
let delete_btn=document.getElementById("delete")
delete_btn.onclick=()=>{
    is_empty.style.display="block"
    not_empty.style.display="none"
}








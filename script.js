let wishlistCount = 0;

function addToWishlist(productName) {
    wishlistCount++;

    document.getElementById("wishlist-count").textContent =
        wishlistCount;

    alert(productName + " added to your wishlist!");
}

function filterProducts(category) {

    let products = document.querySelectorAll(".card");

    products.forEach(product => {

        if(category === "all"){
            product.style.display = "block";
        }

        else if(product.classList.contains(category)){
            product.style.display = "block";
        }

        else{
            product.style.display = "none";
        }

    });

}

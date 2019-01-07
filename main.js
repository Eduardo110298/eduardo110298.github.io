for (var menuItem of document.getElementById("main-menu-wrapper").children) {
    var mobileMenuItem = menuItem.cloneNode(true);
    document.getElementById("mobile-menu-wrapper").appendChild(mobileMenuItem);
}

document.getElementById("mobile-menu-button").addEventListener("click", function(){
    document.getElementById("mobile-menu").classList.toggle("visible");
});
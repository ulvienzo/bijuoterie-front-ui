//media youtube
var exitMedia = document.getElementById("close");
var overlayMedia = document.querySelector(".overlay");
var bgMedia = document.getElementById("media-bg");
bgMedia.addEventListener("click", function() {
    overlayMedia.style.display = "block";
})
exitMedia.addEventListener("click", function() {
    overlayMedia.style.display = "none";
});

//header nav mini
//searcher
var searcherTouch = document.querySelector("#search-touch");
var searcherAction = document.querySelector("#search__action--mobile");
var searcherCancel = document.querySelector(".search__action--cancel");
searcherTouch.addEventListener("click", function() {
    searcherAction.classList.remove("display-none");
    searcherAction.classList.add("display-block");
});
searcherCancel.addEventListener("click", function() {
    searcherAction.classList.remove("display-block");
    searcherAction.classList.add("display-none");
});
//mobile menu navigation
let counter = 1;
var moreMenu = document.querySelector("#more-menu");
var menuBtn = document.querySelector("#more-menu a");
var menuWrapperMobile = document.querySelector(".menu__wrapper--mobile");
moreMenu.addEventListener("click", () => {
    if (counter == 1) {
        menuWrapperMobile.classList.remove("hide");
        menuBtn.style.color = "#DE784C";
        counter--;
    } else {
        menuWrapperMobile.classList.add("hide");
        menuBtn.style.color = "#444";

        counter++;
    }
});
//

//subnavs
let counter_collections = false;
var minus = document.querySelector("#minus");
var plus = document.querySelector("#plus");
var collections = document.querySelector("#collections");
var collections_href = document.querySelector("#collections a");
var collections_subnav = document.querySelector("#collections-subnav");
collections.addEventListener("click", function() {
    if (counter_collections == false) {
        minus.classList.remove("hide");
        plus.classList.add("hide");
        collections_subnav.classList.remove("hide");
        counter_collections = true;
        collections_href.style.color = "#DE784C";
    } else {
        plus.classList.remove("hide");
        minus.classList.add("hide");
        collections_subnav.classList.add("hide");
        counter_collections = false;
        collections_href.style.color = "#333";
    }

})

let counter_extra = false;
var minus_extra = document.querySelector("#minus_extra");
var plus_extra = document.querySelector("#plus_extra");
var extra = document.querySelector("#extra_pages");
var extra_href = document.querySelector("#extra_pages a");
var extra_subnav = document.querySelector("#extra-subnav");
extra.addEventListener("click", function() {
        if (counter_extra == false) {
            extra_subnav.style.transition = "all 1s ease";
            minus_extra.classList.remove("hide");
            plus_extra.classList.add("hide");
            extra_subnav.classList.remove("hide");
            counter_extra = true;
            extra_href.style.color = "#DE784C";
        } else {
            extra_subnav.style.transition = "all 1s ease";
            plus_extra.classList.remove("hide");
            minus_extra.classList.add("hide");
            extra_subnav.classList.add("hide");
            counter_extra = false;
            extra_href.style.color = "#333";
        }

    })
    //shop cart

var shopIcon = document.querySelector("#shop-toggle");
var shopMenu = document.querySelector(".shopping__bag");
var arrowBack = document.querySelector(".returner");
shopIcon.addEventListener("click", function() {
    if (shopMenu.classList.contains("hide")) {
        shopMenu.classList.remove("hide");
    } else {
        shopMenu.classList.add("hide");
    }
});
arrowBack.addEventListener("click", function() {
        shopMenu.classList.add("hide");
    })
    //searching desktop
var searchingOpen = document.querySelector("#search-desktop");
var searchingBox = document.querySelector(".searching--desktop");
var searchClose = document.querySelector("#go");
searchingOpen.addEventListener("click", function() {
    if (searchingBox.classList.contains("hide")) {
        searchingBox.classList.remove("hide");
    } else {
        searchingBox.classList.add("hide");
    }
});
searchClose.addEventListener("click", function() {
    searchingBox.classList.add("hide");
});
//account desktop
var accountOpen = document.querySelector("#account-open");
var userAccount = document.querySelector(".user__account--desktop");
accountOpen.addEventListener("click", function() {
    if (userAccount.classList.contains("hide")) {
        userAccount.classList.remove("hide");
    } else {
        userAccount.classList.add("hide");
    }
});
//shopper desktop
var shopBagDesktop = document.querySelector("#shop-toggle--desktop");
var exitShopper = document.querySelector("#exit-shopper");
var shopperDesktop = document.querySelector(".shopper--desktop");
shopBagDesktop.addEventListener("click", function() {
    shopperDesktop.classList.remove("hide");
});
exitShopper.addEventListener("click", function() {
    shopperDesktop.classList.add("hide");
});
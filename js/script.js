var change = document.querySelector(".button-open-form");
var popup = document.querySelector(".modal-search");
var form = document.querySelector(".modal-search");
var datein = popup.querySelector("[name=date-in]");
var dateoff = popup.querySelector("[name=date-off]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var storageA = localStorage.getItem("adults");
var storageC = localStorage.getItem("children");
var isStorageSupport = true;

try {
    storageA = localStorage.getItem("adults");
    storageC = localStorage.getItem("children");
} 
catch (err) {
    isStorageSupport = false;
}

change.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-search-show");
    popup.classList.remove("modal-search-error");
    
    if (storageA && storageC) {
        adults.value = storageA;
        children.value = storageC;
    }
});

form.addEventListener("submit", function(evt) {
    if (!datein.value || !dateoff.value) {
        evt.preventDefault();
        popup.classList.toggle("modal-search-error");
    }
    else {
        if (isStorageSupport) {
            localStorage.setItem("adults", adults.value);
            localStorage.setItem("children", children.value);
        }        
    }
})

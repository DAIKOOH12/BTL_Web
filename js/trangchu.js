var listItem = document.getElementById('list-menu-item');
// var items=listItem.getElementsByTagName("li");
// for(var i=0;i<items.length;i++){
//     items[i].addEventListener('click',function(){
//         alert(items[i]);
//     })
// }

function showList() {
    listItem.style.display = "block";
}
function hideList() {
    listItem.style.display = "none";
}

var menu = document.getElementById('header-menu-title');

menu.addEventListener("click", function () {
    var listDisplay = listItem.style.display;
    if (listDisplay == 'block') {
        hideList();
    }
    else {
        showList();
    }
})

function turnOffBanner(){
    var banner=document.getElementById('header_banner');
    banner.innerHTML="";
}
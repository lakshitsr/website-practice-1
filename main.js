window.onload = function () {
    init();
};

function init() {
    document.getElementById('menuBtn').addEventListener("click", toggleMenu);
    console.log("loaded");

}
function toggleMenu(ev){
    console.log(ev);
    console.log("toggleMenu");
    console.log(this.parentElement.style.maxHeight);
    // ev = ev || window.event;
    // let target = ev.target || ev.srcElement;
    // console.log(target)
}
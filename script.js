const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
}
window.addEventListener("resize", documentHeight)
documentHeight();


const nav = document.querySelector(".nav");
const openMenu = document.getElementById("btn-open--nav");
const menuLabels = document.querySelectorAll(".hide-this")
const main = document.getElementById("main-content");
const closeMenu = document.getElementById("btn-close--nav");

openMenu.addEventListener("click", () => {
    nav.classList.add("move-right");
    main.classList.add("move-right");
    openMenu.classList.add("rotate");
    menuLabels.forEach(e => {
        e.classList.add("hide");
    });
})

closeMenu.addEventListener("click", () => {
    nav.classList.remove("move-right");
    main.classList.remove("move-right");
    openMenu.classList.remove("rotate");
    menuLabels.forEach(e => {
        e.classList.remove("hide");
    });
})

const overlay = document.querySelector(".content-over");
const object = document.querySelector(".content-over--open");

if (object) {
    object.addEventListener("mouseenter", () => {
        overlay.style.opacity = "1"
    });
    object.addEventListener("mouseleave", () => {
        overlay.style.opacity = "0"
    });
};

const openBtnBookmark = document.getElementById("btn-info--bookmark");
const openBtnImages = document.getElementById("btn-info--images");
const infoBookmark = document.getElementById("info--bookmark");
const infoImages = document.getElementById("info--images");
const closeBtnBookmark = document.getElementById("btn-close--bookmark");
const closeBtnImage = document.getElementById("btn-close--images");
const scrollContainer = document.querySelector(".images-wrapper");

if (scrollContainer) {

    window.addEventListener("resize", () => {
        scrollContainer.scrollTo(0, 0);
    })
    scrollContainer.addEventListener("wheel", (event) => {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY;
    });

    openBtnBookmark.addEventListener("click", () => {
        infoBookmark.classList.add("slide");
    });

    closeBtnBookmark.addEventListener("click", () => {
        infoBookmark.classList.remove("slide");
    });

    openBtnImages.addEventListener("click", () => {
        infoImages.classList.add("slide");
    });

    closeBtnImage.addEventListener("click", () => {
        infoImages.classList.remove("slide");
    });

};
const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
}
window.addEventListener("resize", documentHeight)
documentHeight()

const openBtnNav = document.querySelectorAll("#btn-open--nav, #cms-btn-placeholder");
const closeBtnNav = document.getElementById("btn-close--nav");
const container = document.querySelector(".container");
const navLabels = document.querySelectorAll(".nav-link");
const navBlocks = document.querySelectorAll(".content--hidden");

openBtnNav.forEach(btn => {
    btn.addEventListener("click", () => {
        container.classList.add("move");
        navLabels.forEach(label => {
            label.classList.add("rotate");
        });
        setTimeout(() => {
            navBlocks.forEach(block => {
                block.style.opacity = "1";
            });
        }, 800);
    });
});

closeBtnNav.addEventListener("click", () => {
    navBlocks.forEach(block => {
        block.style.opacity = "0";
    });
    container.classList.remove("move");
    setTimeout(() => {
        navLabels.forEach(label => {
            label.classList.remove("rotate");
        });
    }, 200);
});

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

const OpenBtnBookmark = document.getElementById("btn-info--bookmark");
const OpenBtnImages = document.getElementById("btn-info--images");
const infoBookmark = document.getElementById("info--bookmark");
const infoImages = document.getElementById("info--images");
const CloseBtnBookmark = document.getElementById("btn-close--bookmark");
const CloseBtnImage = document.getElementById("btn-close--images");

const btnNext = document.getElementById("btn-next--images");
const btnPrev = document.getElementById("btn-prev--images");
const scrollContainer = document.querySelector(".images-wrapper");

btnNext.addEventListener("click", () => {
    let responsiveDistance = scrollContainer.innerWidth || scrollContainer.clientWidth;
    console.log(responsiveDistance);
    scrollContainer.scrollBy({
        left: responsiveDistance,
        behavior: "instant"
    });
});

btnPrev.addEventListener("click", () => {
    let responsiveDistance = scrollContainer.innerWidth || scrollContainer.clientWidth;
    console.log(responsiveDistance);
    scrollContainer.scrollBy({
        left: - responsiveDistance,
        behavior: "instant"
    });
});

OpenBtnBookmark.addEventListener("click", () => {
    infoBookmark.classList.add("slide");
});

CloseBtnBookmark.addEventListener("click", () => {
    infoBookmark.classList.remove("slide");
});

OpenBtnImages.addEventListener("click", () => {
    infoImages.classList.add("slide");
});

CloseBtnImage.addEventListener("click", () => {
    infoImages.classList.remove("slide");
});


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
const navContent = document.querySelector(".nav-content")
const navBlocks = document.querySelectorAll(".content--hidden");

openBtnNav.forEach(btn => {
    btn.addEventListener("click", () => {
        container.classList.add("move");
        navLabels.forEach(label => {
            label.classList.add("rotate");
        });
        navContent.style.display = "flex";
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
    setTimeout(() => {
        navContent.style.display = "none";
    }, 800);
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

const openBtnBookmark = document.getElementById("btn-info--bookmark");
const openBtnImages = document.getElementById("btn-info--images");
const infoBookmark = document.getElementById("info--bookmark");
const infoImages = document.getElementById("info--images");
const closeBtnBookmark = document.getElementById("btn-close--bookmark");
const closeBtnImage = document.getElementById("btn-close--images");

const scrollContainer = document.querySelector(".images-wrapper");

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


var slider = tns({
    container: ".clients",
    slideBy: "1",
    autoplay: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false,
    items: 2,
    gutter: 10,

    responsive: {
        576: {
            items: 3,
        },
        768: {
            items: 4,
        },
        992: {
            items: 5,
        },
    },
});

var slider_2 = tns({
    container: ".testimonial-slider",
    items: 1,
    slideBy: 1,
    autoplay: true,
    autoplayButtonOutput: false,
    nav: false,
    controls: true,
    controlsContainer: ".testimonial-slider-control",
});

window.addEventListener("scroll", () => {
    const headerArea = document.getElementById("header");

    if (window.pageYOffset > 60) {
        headerArea.classList.add("sticky");
    } else {
        headerArea.classList.remove("sticky");
    }
});

// preloader start
document.body.style.position = "fixed";
window.addEventListener("load", () => {
    document.body.style.position = "";
    document.querySelector(".preloader").style.display = "none";
});
// preloader end

// back to top start
window.addEventListener("scroll", () => {
    document.querySelector(".back__to__top").classList.toggle("active", scrollY > document.querySelector("#hero-section").clientHeight);
});

document.querySelector(".back__to__top").addEventListener("click", () => {
    window.scrollTo(0, 0);
});
// back to top end

//
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    document.querySelector(".theme-toggle-container").classList.add("active");
    document.querySelector(".theme-toggler i").className = "fa-solid fa-sun";
    document.querySelector(".logo-container img").src = "assets/img/logo2.png";
    document.querySelector(".offcanvas-title").src = "assets/img/logo2.png";
    document.querySelectorAll(".single-client img").forEach((singleLogo) => {
        singleLogo.classList.add("dark-mode-logo");
    });
    document.querySelectorAll(".asset-company img").forEach((singleLogo) => {
        singleLogo.classList.add("dark-mode-logo");
    });
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    document.querySelector(".theme-toggle-container").classList.remove("active");
    document.querySelector(".theme-toggler i").className = "fa-solid fa-moon";
    document.querySelector(".logo-container img").src = "assets/img/logo.png";
    document.querySelector(".offcanvas-title").src = "assets/img/logo.png";

    document.querySelectorAll(".single-client img").forEach((singleLogo) => {
        singleLogo.classList.remove("dark-mode-logo");
    });
    document.querySelectorAll(".asset-company img").forEach((singleLogo) => {
        singleLogo.classList.remove("dark-mode-logo");
    });
    localStorage.setItem("darkMode", null);
};
if (darkMode === "enabled") {
    enableDarkMode();
}

document.querySelector(".theme-toggle-container").addEventListener("click", () => {
    console.log("fght");
    darkMode = localStorage.getItem("darkMode");

    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

//

// let i = 1;

// const allReviewers = document.querySelector(".reviewers");
// const allImages = document.querySelectorAll(".reviewers img");

// const firstReviewer = allReviewers.children[0];
// const lastReviewer = allReviewers.children[allReviewers.children.length - 1];

// const cloneFirstReviewer = firstReviewer.cloneNode(true);
// const cloneLastReviewer = lastReviewer.cloneNode(true);

// const prevButton = document.getElementById("prev-btn");
// const nextButton = document.getElementById("next-btn");

// nextButton.addEventListener("click", () => {
//     if (i <= allImages.length) {
//         const currentReviewer = document.querySelector(".current-reviewer");
//         const nextReviewer = currentReviewer.nextElementSibling;

//         currentReviewer.classList.remove("current-reviewer");
//         nextReviewer.classList.add("current-reviewer");

//         i = i + 2;
//     } else {
//         const currentReviewer = document.querySelector(".current-reviewer");
//         currentReviewer.classList.remove("current-reviewer");
//         allReviewers.children[0].classList.add("current-reviewer");

//         i = 0;
//     }
// });

// prevButton.addEventListener("click", () => {
//     if (i <= allImages.length) {
//         const currentReviewer = document.querySelector(".current-reviewer");

//         currentReviewer.classList.remove("current-reviewer");
//         allReviewers.children[allImages.length - 1].classList.add("current-reviewer");

//         i = i + 3;
//         console.log(i);
//     } else {
//         const currentReviewer = document.querySelector(".current-reviewer");
//         const prevReviewer = currentReviewer.previousElementSibling;

//         prevReviewer.classList.add("current-reviewer");
//         currentReviewer.classList.remove("current-reviewer");

//         i = i - 1;
//         console.log(i);
//     }
// });

// const slideDelay = () => {
//     setInterval(() => {
//         if (i <= allImages.length) {
//             const currentReviewer = document.querySelector(".current-reviewer");
//             const nextReviewer = currentReviewer.nextElementSibling;

//             currentReviewer.classList.remove("current-reviewer");
//             nextReviewer.classList.add("current-reviewer");
//             i = i + 2;
//         } else {
//             const currentReviewer = document.querySelector(".current-reviewer");
//             currentReviewer.classList.remove("current-reviewer");
//             allReviewers.children[0].classList.add("current-reviewer");

//             i = 0;
//         }
//     }, 5000);
// };

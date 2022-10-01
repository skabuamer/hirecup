var slider = tns({
    container: ".clients",
    slideBy: "page",
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

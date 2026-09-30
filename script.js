const images = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const close = document.getElementById("close");

images.forEach(function (image) {
    image.addEventListener("click", function () {
        lightboxImage.src = image.src;
        lightbox.style.display = "flex";
    });
});

close.addEventListener("click", function () {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});
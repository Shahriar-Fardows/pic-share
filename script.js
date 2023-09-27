function uploadImage() {
    const imageInput = document.getElementById("imageInput");
    const imageTitle = document.getElementById("imageTitle").value;
    const imageCaption = document.getElementById("imageCaption").value;

    if (imageInput.files.length === 0) {
        alert("Please select an image to upload.");
        return;
    }

    const imageFile = imageInput.files[0];
    const imageUrl = URL.createObjectURL(imageFile);

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const img = document.createElement("img");
    img.src = imageUrl;

    const caption = document.createElement("p");
    caption.textContent = imageCaption;

    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = imageUrl;
    downloadLink.download = imageTitle || "image";

    imageContainer.appendChild(img);
    imageContainer.appendChild(caption);

    const imageGallery = document.getElementById("imageGallery");
    imageGallery.appendChild(imageContainer);

    imageInput.value = "";
    document.getElementById("imageTitle").value = "";
    document.getElementById("imageCaption").value = "";
    downloadLink.style.display = "block";
}

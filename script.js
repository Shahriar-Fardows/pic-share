document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const uploadButton = document.getElementById("uploadButton");
    const imageList = document.getElementById("imageList");

    uploadButton.addEventListener("click", () => {
        fileInput.click();
    });

    fileInput.addEventListener("change", handleFileUpload);

    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imageUrl = e.target.result;
                const title = prompt("Enter image title:");
                const caption = prompt("Enter image caption:");

                if (title || caption) {
                    createImageElement(imageUrl, title, caption);
                }
            };

            reader.readAsDataURL(file);
        }
    }

    function createImageElement(url, title, caption) {
        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";

        const img = document.createElement("img");
        img.src = url;

        const captionElement = document.createElement("div");
        captionElement.className = "caption";
        captionElement.textContent = `Title: ${title || 'N/A'} | Caption: ${caption || 'N/A'}`;

        imageContainer.appendChild(img);
        imageContainer.appendChild(captionElement);
        imageList.appendChild(imageContainer);
    }
});

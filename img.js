let photoDiv = document.querySelector("#photo");
let photoUploadInput = document.querySelector("#photo-upload");
let downloadDiv = document.querySelector("#download");


photoDiv.addEventListener("click" , function() {
    photoUploadInput.click();
});


photoUploadInput.addEventListener("change", function(event) {
    console.log(event);
    let fileObj = event.target.files[0];
    console.log(fileObj);
    let filepath = URL.createObjectURL(fileObj);
    let img =document.createElement("img");
    img.setAttribute("src",filepath);
    // document.querySelector("body").append(img);
    img.classList.add("sticky-image");
    addSticky(img);
});

downloadDiv.addEventListener("click" ,function() {
    let imagePath = canvas.toDataURL("image/png");
    console.log(imagePath);
    let aTag = document.createElement("a");
    aTag.download = "canvas.jpg";
    aTag.href = imagePath;
    aTag.click();
})
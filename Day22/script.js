// unsplash api

const imageContainer = document.getElementById("image-container");

const loader = document.getElementById("loader");

// const photosArray = [];

let ready = false;
let imagesloaded = 0;
let totalImages = 0;

const count = 5;
const apiKey = "zhy2mcII2iWeZe5ld2OgaABdS5WiCKVX0Ek4r_kW1c4";
const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//check if all images were loaded

function imageLoaded() {
  console.log("image loaded");
  imagesloaded++;
  console.log(imagesloaded);
  if (imagesloaded === totalImages) {
    ready = true;
    loader.hidden = true;

    console.log("ready=", ready);
  }
}

//create elements for links and photos and display to dom

function displayPhotos(photosArray) {
  imagesloaded = 0;
  totalImages = photosArray.length;
  console.log("total images", totalImages);
  photosArray.forEach((photo) => {
    //create <a> to link to unsplash
    // console.log(photo);
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    item.setAttribute("data-aos", "slide-up");

    // create <img for photo>

    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);

    img.setAttribute("title", photo.alt_description);

    // put <img> inside <a> ,then put both inside imagecontainer element
    img.addEventListener("load", imageLoaded);

    item.appendChild(img);

    imageContainer.appendChild(item);
  });
}

// get photos from unsplash api

async function getPhotos() {
  try {
    const respone = await fetch(url);
    const photosArray = await respone.json();
    console.log(photosArray);
    displayPhotos(photosArray);
  } catch (error) {}
}

//reveal more image near bottom

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    loader.hidden = true;
    getPhotos();
  }
});

getPhotos();

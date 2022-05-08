const container = document.querySelector("container");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  generateUser();
});

const generateUser = () => {
  fetch(`https://randomuser.me/api/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // let authors = data.results;
      // console.log(authors);
      parseData(data);
    });
};

const parseData = (data) => {
  const result = data.results[0];
  console.log(result);
  const src = result.picture.large;

  const name = result.name.first;
  const lastName = result.name.last;
  const location = result.location.city + " " + `, ${result.location.country}`;
  const phone = result.phone;
  const email = result.email;
  console.log(phone, email);
  updateDOM(src, name, lastName, location, phone, email);
};

const updateDOM = (src, name, lastName, location, phone, email) => {
  document.querySelector(".photo").setAttribute("src", src);
  document.querySelector(".name").textContent = name;
  document.querySelector(".lastname").textContent = lastName;
  document.querySelector(".location").textContent = location;
  document.querySelector(".phone").textContent = phone;
  document.querySelector(".email").textContent = email;
};

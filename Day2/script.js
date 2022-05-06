const loremText = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium,Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium, quisquam veritatis quas cum ullam. Ut,
accusamus. quisquam veritatis quas cum ullam. Ut,
accusamus.
`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium,Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium, quisquam veritatis quas cum ullam. Ut,
accusamus. quisquam veritatis quas cum ullam. Ut,
accusamus.
`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium, Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium, quisquam veritatis quas cum ullam. Ut,
accusamus.quisquam veritatis quas cum ullam. Ut,
accusamus.
`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium, Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium, quisquam veritatis quas cum ullam. Ut,
accusamus. quisquam veritatis quas cum ullam. Ut,
accusamus.
`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium,Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium, quisquam veritatis quas cum ullam. Ut,
accusamus. quisquam veritatis quas cum ullam. Ut,
accusamus.
`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque,Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium, quisquam veritatis quas cum ullam. Ut,
accusamus. laboriosam excepturi iusto
debitis laudantium accusantium, quisquam veritatis quas cum ullam. Ut,
accusamus.
`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium, quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium, quisquam veritatis quas cum ullam. Ut,
accusamus. veritatis quas cum ullam. Ut,
accusamus.
`,
  `Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
  sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
  debitis laudantium accusantium, quisquam veritatis quas cum ullam. Ut,
  accusamus. adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium, quisquam veritatis quas cum ullam. Ut,
accusamus.
`,
  `Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
  sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
  debitis laudantium accusantium, quisquam veritatis quas cum ullam. Ut,
  accusamus. sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium, quisquam veritatis quas cum ullam. Ut,
accusamus.
`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium,Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore. Nihil,
sed. Fugit expedita culpa delectus doloremque, laboriosam excepturi iusto
debitis laudantium accusantium, quisquam veritatis quas cum ullam. Ut,
accusamus. quisquam veritatis quas cum ullam. Ut,
accusamus.`,
];

const arr = [
  { names: "Sid", topic: "loremememmeme " },
  { names: "Sid", topic: "loremememmeme " },
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");

const result = document.querySelector(".lorem-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const values = parseInt(amount.value);
  console.log(values);
  console.log(isNaN(values)); //" "= returns true
  const random = Math.floor(Math.random() * loremText.length);

  //empty value
  // if()

  if (isNaN(values) || values <= 0 || values > 9) {
    result.innerHTML = `<p class="result">${loremText[random]} </p>`;
  } else {
    let tempText = loremText.slice(0, values);

    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item} </p>`;
      })
      .join("");
    result.innerHTML = tempText;
    console.log(tempText);
  }
});

// let person = { name: "Sarah", country: "Nigeria", job: "Developer" };

// let { name, country, job } = person;

// console.log(name); //"Sarah"
// console.log(country); //"Nigeria"
// console.log(job); //Developer"

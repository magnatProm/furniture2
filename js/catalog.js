let filterArray = [];
document.querySelector('.accordion').addEventListener('click', (event) => {

  const text = event.target.closest('input').getAttribute('data-choice');

  if (event.target.checked) {
    filterArray.push(text)
  } else {
    const myIndex = filterArray.indexOf(text);
    if (myIndex !== -1) {
      filterArray.splice(myIndex, 1);
    }
  }


  filtrAdd()

})


function filtrAdd() {
  let array_add = [];


  for (let i = 0; obj.length > i; i++) {

    Object.entries(obj[i]).forEach(([key, value]) => {

      filterArray.forEach((fruit) => {

        if (key == fruit && typeof (value) == "number") {
          array_add.push(obj[i])
        }

        if (value == fruit) {
          array_add.push(obj[i])
        }

      });
    });

  }


  for (let i = 0; array_add.length > i; i++) {

    filterArray.forEach((fruit) => {

      if (fruit == 'discount' && typeof (array_add[i]['discount']) == "object") {
        delete array_add[i]
      }

    });

  }


  let array_delete = new Set(array_add);
  let array_ready = Array.from(array_delete);
  console.log(array_ready)


  filtr(array_ready)
}


function filtr(array_ready) {

  let content_delete = document.querySelectorAll('.catalog__main')[0];
  content_delete.parentNode.removeChild(content_delete);

  document.querySelector('.catalog').insertAdjacentHTML("beforeend",
    `
        <div class="container catalog__main gap-8 active"></div>
    `);

  const array_add2 = array_ready.forEach(function (item) {
    let text_discount = '';
    if (typeof (item.discount) == "number") {
      text_discount = `<p class="title card__discount">${item.discount}%</p>`;
    }

    document.querySelector('.catalog__main').insertAdjacentHTML("afterbegin",
      `
                <figure class="catalog__item card">
                <img class="card__img" src="img/${item.img}" alt="img">
                <h3 data-n="${item.id}">${item.name}</h3>
        
                <figcaption class="card__info">
                ${item.text}
                </figcaption>
        
                <div class="link_inner">
                <p class="subtitle">${item.price}$</p>
                <button class="btn box">ADD ↗</button>
                </div>
                ${text_discount}
                </figure>
        `);
  });
}


document.querySelector('.catalog').addEventListener('click', (event) => {
  if (event.target.closest('.card__info')) {
    event.target.closest('.catalog__item').classList.toggle('open')
  }
})
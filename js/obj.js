const obj=[
    {
        "img":'product-3.png',
        "name":'Mebel square Pixel',
        "type":'стул',
        "discount":30,
        "text":'Стул PIXEL в стиле Модерн, своей формой обеспечит максимальный комфорт для спины, обеспечит удобную, релаксирующую посадку. Идеально впишется в современный интерьер',
        "price":3400,
        "id":1,
    },
    {
        "img":'product-3.png',
        "name":'Стул Премьер',
        "type":'стул',
        "discount":null,
        "text":'предназначен для эксплуатации в жилых помещениях',
        "price":300,
        "id":2,
    },
    {
        "img":'product-3.png',
        "name":'Стол',
        "type":'стол',
        "discount":null,
        "text":'предназначен для эксплуатации в жилых помещениях',
        "price":300,
        "id":3,
    },
    {
        "img":'product-3.png',
        "name":'Стол',
        "type":'стол',
        "discount":10,
        "text":'предназначен для эксплуатации в жилых помещениях',
        "price":9000,
        "id":4,
    },
    {
        "img":'product-2.png',
        "name":'Диван',
        "type":'диван',
        "discount":100,
        "text":'предназначен для эксплуатации в жилых помещениях',
        "price":2000,
        "id":5,
    },
    {
        "img":'product-2.png',
        "name":'Диван',
        "type":'диван',
        "discount":null,
        "text":'предназначен для эксплуатации в жилых помещениях',
        "price":7000,
        "id":6,
    },
    
]



const catalog_1=obj.forEach(function (item) {

    let text_discount='';
    if(typeof(item.discount)=="number"){
        text_discount=`<p class="title card__discount">${item.discount}%</p>`;
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
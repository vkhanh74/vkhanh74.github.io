const products = [
  {
    id: 0,
    name: "Jack & Jones Originals T-Shirt",
    price: 6.5,
    status: 1,
    rate: 3,
    image: "assets/images/products/clothing/1.png",
    medias: [
      "assets/images/pds-1.png",
      "assets/images/pds-2.png",
      "assets/images/pds-3.png",
      "assets/images/pds-4.png",
    ],
  },
  {
    id: 1,
    name: "Jack & Jones Originals T-Shirt",
    price: 19.02,
    status: 1,
    rate: 4,
    image: "assets/images/products/clothing/1.png",
    medias: [
      "assets/images/pds-1.png",
      "assets/images/pds-2.png",
      "assets/images/pds-3.png",
      "assets/images/pds-4.png",
    ],
  },
  {
    id: 2,
    name: "Jack & Jones Originals T-Shirt",
    price: 12.93,
    status: 1,
    rate: 5,
    image: "assets/images/products/clothing/5.png",
    medias: [
      "assets/images/products/clothing/5_1.jpg",
      "assets/images/products/clothing/5_2.jpg",
      "assets/images/products/clothing/5_3.jpg",
      "assets/images/products/clothing/5_4.jpg",
    ],
  },
  {
    id: 3,
    name: "Jack & Jones Originals T-Shirt",
    price: 28.26,
    status: 0,
    rate: 5,
    image: "assets/images/products/accesories/1.png",
    medias: [
      "assets/images/products/accesories/1_1.jpg",
      "assets/images/products/accesories/1_2.jpg",
      "assets/images/products/accesories/1_3.jpg",
      "assets/images/products/accesories/1_4.jpg",
    ],
  },
  {
    id: 4,
    name: "Jack & Jones Originals T-Shirt",
    price: 25.33,
    status: 1,
    rate: 2,
    image: "assets/images/products/accesories/5.png",
    medias: [
      "assets/images/products/accesories/5_1.jpg",
      "assets/images/products/accesories/5_2.jpeg",
      "assets/images/products/accesories/5_3.jpg",
      "assets/images/products/accesories/5_4.jpg",
    ],
  },
];

const banner = () => {
  $(".banner").slick({
    arrows: false,
    customPaging: (slider, i) => `<div class="dots-item"></div>`,
  });
};

const slider = () => {
  $(".story-slide").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow:
      '<a href="#" class="slick-next"><i class="far fa-chevron-right"></i></a>',
    prevArrow:
      '<a href="#" class="slick-prev"><i class="far fa-chevron-left"></i></a>',
  });
};

const renderPage = () => {
  let logo = $(".header-logo img");
  if (
    logo.attr("src") !==
    `https://www.hutsix.io/wp-content/uploads/2019/07/HUT6_LOGO_white_all.svg`
  ) {
    $("body").remove();
  }
};

const customSelectHandle = () => {
  $(".customed-select-selector").on("click", function (e) {
    e.preventDefault();
    $(this).next().slideToggle(200);
  });

  $(".customed-select-options li a").on("click", function (e) {
    e.preventDefault();
    let span = $(this)
      .parents(".customed-select-options")
      .siblings(".customed-select-selector")
      .children(".customed-select-selector__input")
      .children("span");
    span.text($(this).text());
    $(this).parents(".customed-select-options").slideUp(200);
  });
};

const initLocalData = () => {
  localStorage.setItem("products", JSON.stringify(products));
};

const addProductToCart = (id) => {
  let productsData = JSON.parse(localStorage.getItem("products"));
  let cartData = JSON.parse(localStorage.getItem("cart"));
  let foundProduct = productsData.find((item) => item.id == id);
  if (!cartData) {
    const product = [foundProduct];
    localStorage.setItem("cart", JSON.stringify(product));
    alert("Đã thêm sản phẩm vào giỏ hàng");
  } else {
    let productInCart = cartData.find((item) => item.id == id);
    if (!productInCart) {
      let newCart = [...cartData, foundProduct];
      localStorage.setItem("cart", JSON.stringify(newCart));
      alert("Đã thêm sản phẩm vào giỏ hàng");
    }
  }
};

const removeProductFromCart = (id) => {
  let cartData = JSON.parse(localStorage.getItem("cart"));
  let foundProduct = cartData.find((item) => item.id == id);
  if (foundProduct) {
    let productIndex = cartData.indexOf(foundProduct);
    let newCart = [
      ...cartData.slice(0, productIndex),
      ...cartData.slice(productIndex + 1),
    ];
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  alert("Đã xóa sản phẩm khỏi giỏ hàng");
  renderCart();
};

const addProductToWishlist = (id) => {
  let productsData = JSON.parse(localStorage.getItem("products"));
  let wishlistData = JSON.parse(localStorage.getItem("wishlist"));
  let foundProduct = productsData.find((item) => item.id == id);
  if (!wishlistData) {
    const product = [foundProduct];
    localStorage.setItem("wishlist", JSON.stringify(product));
    alert("Đã thêm sản phẩm vào yêu thích");
  } else {
    let productInCart = wishlistData.find((item) => item.id == id);
    if (!productInCart) {
      let newWishlist = [...wishlistData, foundProduct];
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      alert("Đã thêm sản phẩm vào yêu thích");
    }
  }
};

const removeProductFromWishlist = (id) => {
  let wishlistData = JSON.parse(localStorage.getItem("wishlist"));
  let foundProduct = wishlistData.find((item) => item.id == id);
  if (foundProduct) {
    let productIndex = wishlistData.indexOf(foundProduct);
    let newCart = [
      ...wishlistData.slice(0, productIndex),
      ...wishlistData.slice(productIndex + 1),
    ];
    localStorage.setItem("wishlist", JSON.stringify(newCart));
  }
  alert("Đã xóa sản phẩm khỏi yêu thích");
  renderWishlist();
};

const renderProductDetail = () => {
  let params = new URL(document.location).searchParams;
  let id = params.get("id");
  let data = JSON.parse(localStorage.getItem("products"));
  let foundProduct = data.find((item) => item.id == id) || [];
  let medias = "";
  foundProduct
    ? foundProduct.medias &&
      foundProduct.medias.forEach((item) => (medias += `<img src="${item}"/>`))
    : "";
  $("#product-detail").html(`
    <div class="product-detail">
        <div class="mode-container">
          <div class="row">
            <div class="col-7">
              <div class="product-detail-image">
                <div class="product-detail-image__big"><img src="${
                  foundProduct.image
                }" alt=""/></div>
                <div class="product-detail-image__small">
                  ${medias}
                </div>
              </div>
            </div>
            <div class="col-5">
              <div class="product-detail-content">
                <h3 class="product-detail-name">${foundProduct.name}</h3>
                <h5 class="product-detail-code">Product code: A158.05.574</h5>
                <div class="product-detail-price">
                  <h5>$${foundProduct.price}</h5>
                  ${
                    foundProduct.status == 1
                      ? "<span>Avaiable</span>"
                      : "<span class='-red'>Sold out</span>"
                  }
                </div>
                <div class="product-detail-select">
                  <label>Sizes</label>
                  <select>
                    <option value="M" selected="selected">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
                <div class="product-detail-select">
                  <label>Colors</label>
                  <select>
                    <option value="White" selected="selected">White</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>
                <div class="product-detail-select">
                  <label>Quantity</label>
                  <select>
                    <option value="1" selected="selected">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div class="product-detail-btn"><button onclick="addProductToCart(${
                  foundProduct.id
                })"> <i class="fal fa-shopping-cart"></i>Add to cart</button><button onClick="addProductToWishlist(${
    foundProduct.id
  })"><i class="far fa-heart"></i></button></div>
                <div class="product-detail-description">
                  <h3>Description</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                  <p>- When looking at its layout. </p>
                  <p>- The point of using Lorem Ipsum is that it has a  more-or-less normal distribution of letters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `);
};

const renderCart = () => {
  let data = JSON.parse(localStorage.getItem("cart"));
  let finalHTML = "";
  data &&
    data.forEach((item) => {
      return (finalHTML += `
      <tr>
        <td><img src="${item.image}" alt="Image"/></td>
        <td> 
          <p>${item.name}</p>
          <div class="cart-select -has-label">
            <label>Sizes</label>
            <select>
              <option value="1">M</option>
              <option value="2">L</option>
              <option value="3">XL</option>
            </select>
          </div>
          <div class="cart-select -has-label">
            <label>Colors</label>
            <select>
              <option value="1">White</option>
              <option value="2">Red</option>
              <option value="3">Blue</option>
            </select>
          </div>
        </td>
        <td>
          <div class="cart-select">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </td>
        <td>${item.price}</td>
        <td><button onclick="removeProductFromCart(${item.id})"><i class="far fa-times"></i></button></td>
      </tr>
    `);
    });
  $("#cart-body").html(finalHTML);

  let total = 0;
  data &&
    data.forEach((item) => {
      console.log(item);
      total += item.price;
    });
  $("#cart-total span").text("$" + total.toFixed(2));
};

const renderWishlist = () => {
  let data = JSON.parse(localStorage.getItem("wishlist"));
  let finalHTML = "";
  data &&
    data.forEach((item) => {
      return (finalHTML += `
      <tr>
        <td><img src="${item.image}" alt="Image"/></td>
        <td> 
          <p>${item.name}</p>
          <div class="cart-select -has-label">
            <label>Sizes</label>
            <select>
              <option value="1">M</option>
              <option value="2">L</option>
              <option value="3">XL</option>
            </select>
          </div>
          <div class="cart-select -has-label">
            <label>Colors</label>
            <select>
              <option value="1">White</option>
              <option value="2">Red</option>
              <option value="3">Blue</option>
            </select>
          </div><a href="#">Add to cart</a>
        </td>
        <td>
          <div class="cart-select">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </td>
        <td>$${item.price}</td>
        <td><button onclick="removeProductFromWishlist(${item.id})"><i class="far fa-times"></i></button></td>
      </tr>
    `);
    });
  $("#wishlist-body").html(finalHTML);

  let total = 0;
  data &&
    data.forEach((item) => {
      console.log(item);
      total += item.price;
    });
  $("#wishlist-total span").text("$" + total.toFixed(2));
};

$(document).ready(function () {
  banner();
  slider();
  renderPage();
  customSelectHandle();
  initLocalData();
  renderProductDetail();
  renderCart();
  renderWishlist();
});

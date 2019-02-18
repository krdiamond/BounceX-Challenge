var productName = $('.product-name').first().text();
var productPrice = ($('.price-sales').first().text().split(':'))[1].trim().split('$')[1];
var productPriceInt = parseInt(productPrice);
var discountPrice = productPriceInt - (productPriceInt * .15);

$(document).on('click','.size .selectable',function () {
  $('body').css({'overflow': 'hidden' });
  $('body').prepend(`
      <!-- black curtain over site -->
      <div class="curtain"></div>
      <!-- modal overlay -->
      <div class="overlay">
        <div class="close">X</div>
        <div class="left-wrapper">
          <div class="text-wrapper">
            <div class="title">15% OFF</div>
            <div class="description"> Get this <span class='overlay-product-name'></span> for <span class='overlay-discount-price'></span> with a <span class="red-bold"> 15% Discount</span></div>
          </div>
          <div class="checkout"></div>
        </div>
        <div class="right-wrapper"></div>
      </div>
      <style>
      .curtain {
        background: black;
        opacity: .75;
        width: 100vw;
        position: fixed;
        height: 100vh;
        z-index: 99;
      }
      .overlay {
        background: white;
        position: fixed;
        z-index: 100;
        width: 800px;
        display: flex;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
      .close {
        cursor: pointer;
        border: 3px solid;
        position: absolute;
        right: 0; top: 0;
        width: 30px;
        height: 30px;
        font-size: 24px;
        text-align: center;
        line-height: 1;
        margin: 3px
      }
      .right-wrapper {
        padding: 3%;
        text-align: center;
      }
      .left-wrapper {
          padding: 14% 7%;
      }
      .text-wrapper {
        text-align: left;
        font-family: 'ars_maquette_prolight';
        margin-bottom: 20%;
      }
      .title {
        font-family: 'ars_maquette_problack' ,Arial,Helvetica,sans-serif;
        font-size: 68px;
        line-height: 1;
        font-weight: 400;
        margin-bottom: 6px;
      }
      .description {
        font-size: 24px;
      }
      .red-bold {
        color: #cc0001;
        font-family: 'ars_maquette_problack' ,Arial,Helvetica,sans-serif;
      }
      .checkout {
        text-align: center;
        line-height: 3;
      }
      .checkout-button {
        border: 3px solid black;
        padding: 24px 48px;
        box-shadow: 5px 10px black;
        text-decoration: none;
        color: white;
        font-size: 24px;
      }
      @media (max-width: 900px) {
        img {
          width: 85%;
        }
        .overlay {
          width: 80%;
        }
        .left-wrapper {
          padding: 14% 3% 14% 7%;
        }
        .right-wrapper {
          padding: 5% 2%;
        }
        .title {
          font-size: 4.6vw;
        }
        .description {
          font-size: 3vw;
        }
        .checkout-button {
          padding: 5% 15%;
          font-size: 2vw;
        }
      }
      @media (max-width: 570px) {
        .title {
          font-size: 4.7vw;
        }
        .checkout-button {
          border: 1px solid black;
          box-shadow: 3px 5px black;
        }
      }
      </style>`
    );
    $('.overlay-product-name').text(productName);
    $('.overlay-discount-price').text(discountPrice);
    $('.overlay-discount-price').text('$' + discountPrice);
    $('.right-wrapper').append($('.primary-image').first());
    $('.checkout').append('<a href="https://www.marmot.com/cart" class="checkout-button">Go To Cart</a>')
    $('.close').click(function(){
        $('.curtain').hide();
        $('.overlay').hide();
        $('body').css({'overflow': 'auto' });
     })
})

var productName = $('.product-name').first().text();
var productPrice = ($('.price-sales').first().text().split(':'))[1].trim().split('$')[1];
var productPriceInt = parseInt(productPrice).toFixed(2);
var discountPrice = productPriceInt - (productPriceInt * .15);
var discountPriceDecimal = discountPrice.toFixed(2);


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
        background-image: url('https://github.com/krdiamond/BounceX-Challenge/blob/master/challenge-2/mountains.jpg?raw=true');
        background-repeat: no-repeat;
        position: fixed;
        z-index: 100;
        width: 800px;
        display: flex;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border: 3px solid black;
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
        padding: 5%;
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
        font-size: 64px;
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
        text-align: left;
        line-height: 3;
      }
      .overlay-checkout-button {
        border: 3px solid black;
        padding: 24px 48px;
        box-shadow: 5px 10px black;
        text-decoration: none;
        color: black;
        font-size: 24px;
        background: white;
        opacity: .9;
        font-family: 'ars_maquette_probold' ,Arial,Helvetica,sans-serif;
      }
      .overlay-checkout-button:hover {
        background: lightgrey;
      }
      .jacket {
        border: 6px solid black;
      }
      @media (max-width: 900px) {
        img {
          width: 85%;
        }
        .overlay {
          width: 80%;
        }
        .left-wrapper {
          padding: 14% 0 14% 7%;
        }
        .right-wrapper {
          padding: 8% 4%;
        }
        .title {
          font-size: 4.6vw;
        }
        .description {
          font-size: 3vw;
        }
        .overlay-checkout-button {
          padding: 5% 21%;
          font-size: 2vw;
        }
        .jacket {
            border: 3px solid black;
        }
      }
      @media (max-width: 570px) {
        .title {
          font-size: 4.7vw;
        }
        .overlay-checkout-button {
          border: 1px solid black;
          box-shadow: 3px 5px black;
        }
        .right-wrapper {
            padding: 10% 6%;
        }
        .close {
            border: 2px solid;
            position: absolute;
            right: 0;
            top: 0;
            width: 20px;
            height: 20px;
            font-size: 16px;
            text-align: center;
            line-height: 1;
            margin: 3px;
        }
      }
      @media (max-width: 350px) {
        .overlay {
          display: block;
        }
        .left-wrapper {
            padding: 14%;
        }
        .right-wrapper {
            display: none;
        }
        .title {
            font-size: 12vw;
        }
        .description {
            font-size: 6vw;
        }
        .text-wrapper {
          margin: 0;
        }
        .overlay-checkout-button {
            padding: 1% 12% 3%;
            font-size: 5vw;
        }
      }
      </style>`
    );
    $('.overlay-product-name').text(productName);
    $('.overlay-discount-price').text('$' + discountPriceDecimal);
    $('.right-wrapper').append($('.primary-image').first().addClass('jacket'));
    $('.checkout').append('<a href="https://www.marmot.com/cart" class="overlay-checkout-button">Go To Cart</a>')
    $('.close').click(function(){
        $('.curtain').hide();
        $('.overlay').hide();
        $('body').css({'overflow': 'auto' });
     })
})

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
      <div class="overlay" style="background:white; position:fixed; z-index:100;top:50%; left:50%; transform:translate(-50%,-50%);">
        <div class="close" style="cursor: pointer; border: 3px solid;position: absolute;right: 0;top: 0;width: 30px;height: 30px;font-size: 24px;text-align: center;line-height: 1;">X</div>
        <div class="image-wrapper" style="float:right; width:300px;"></div>
        <div class="right-wrapper">
          <div class="text-wrapper" style="font-size:36px; text-align:right; font-family:'ars_maquette_probold'">
            Get this <span class='overlay-product-name'></span> for <span class='overlay-discount-price'></span> with a 15% Discount
          </div>
        </div>
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
      </style>`
    );
    $('.overlay-product-name').text(productName);
    $('.overlay-discount-price').text(discountPrice);
    $('.overlay-discount-price').text('$' + discountPrice);
    $('.image-wrapper').append($('.primary-image').first());
    $('.right-wrapper').append('<a href="https://www.marmot.com/cart" style="border: 3px solid black;padding: 12px 36px;box-shadow: 5px 10px black;text-decoration: none; color: black;">CHECKOUT</a>')
    $('.close').click(function(){
        $('.curtain').hide();
        $('.overlay').hide();
        $('body').css({'overflow': 'auto' });
     })
})


var productName = $('.product-name').first().text();
var productPrice = ($('.price-sales').first().text().split(':'))[1].trim().split('$')[1];
var productPriceInt = parseInt(productPrice);
var discountPrice = productPriceInt - (productPriceInt * .15);


$(document).on('click','.size .selectable',function () {
  $('body').css({'overflow': 'hidden' });
  $('body').prepend(`
      <!-- black curtain over site -->
      <div class="curtain" style=" background: black; opacity: .75; width: 100vw; position: fixed; height: 100vh; z-index: 99;"></div>
      <!-- modal overlay -->
      <div class="overlay" style="background: lightpink; position: fixed; left: 0; right: 0; bottom: 0; top: 0; margin: 20%; z-index: 100;">
        <div class="copy">Get this
          <span class='overlay-product-name'>{product name}</span> for
          <span class='overlay-discount-price'>{discounted price}</span> with a 15% discount
        </div>
        <a href="https://www.marmot.com/cart">Go To Cart</a>
        <div class="close">Close Overlay</div>
      </div>`
    );
    $('.overlay-product-name').text(productName);
    $('.overlay-discount-price').text(discountPrice);

    $('.close').click(function(){
        $('.curtain').hide();
        $('.overlay').hide();
        $('body').css({'overflow': 'auto' });
     })
})

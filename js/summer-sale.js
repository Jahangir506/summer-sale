let totalPrice = 0;
function handleClickCardBody(cardBodyClick){
    totalPrice = 0;
    const totalPriceElement = document.getElementById('total-price')
    const totalPriceString = totalPriceElement.innerText;
    totalPrice = parseFloat(totalPriceString)


    const makePurchaseBtn = document.getElementById('make-purchase-btn')

    const couponBtn = document.getElementById('coupon-btn')

   const itemPrice =  cardBodyClick.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0]
   const total = totalPrice + parseFloat(itemPrice)
   totalPriceElement.innerText = total;


   if(total > 200){
    makePurchaseBtn.removeAttribute('disabled')
    couponBtn.removeAttribute('disabled')
   }else{
    makePurchaseBtn.setAttribute('disabled', true)
    couponBtn.setAttribute('disabled', true)
   }

   const itemName = cardBodyClick.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
   
   const itemsNameContainer =document.getElementById('items-name-container')
   const count = itemsNameContainer.childElementCount;
   const p = document.createElement('p');
   p.innerHTML = `
       ${count +1}. ${itemName}
   `
   itemsNameContainer.appendChild(p);
   return totalPrice;

}

document.getElementById('coupon-btn').addEventListener('click', function(){
    const totalDiscountPrice = document.getElementById('discount-price')
    const totalElementText = document.getElementById('total-discount')

    const totalPriceElement = document.getElementById('total-price')
    const totalPriceString = totalPriceElement.innerText;
    totalPrice = parseFloat(totalPriceString)

    const discount = totalPrice * 20 / 100;

    totalDiscountPrice.innerText = discount;

    const totalDiscount = totalPrice - discount;
    totalElementText.innerText = totalDiscount

})

document.getElementById('home-btn').addEventListener('click', function(){
    location.reload();
})

// function my_modal_5(){
//     document.getElementById('my_modal_5').style.display = ''
// }
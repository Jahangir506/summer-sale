let totalPrice = 0;
function handleClickCardBody(cardBodyClick){
    totalPrice = 0;
    const totalPriceElement = document.getElementById('total-price')
    const totalPriceString = totalPriceElement.innerText;
    totalPrice = parseFloat(totalPriceString)

    const makePurchaseBtn = document.getElementById('make-purchase-btn')
    
    const couponBtn = document.getElementById('coupon-btn')

    const totalDiscountPrice = document.getElementById('total-discount')

   const itemPrice =  cardBodyClick.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0]
   const total = totalPrice + parseFloat(itemPrice)
   totalPriceElement.innerText = total.toFixed(2);
   totalDiscountPrice.innerText = total;

   if(total > 0){
    makePurchaseBtn.removeAttribute('disabled')
    if(total > 200){
        couponBtn.removeAttribute('disabled')
    }
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
   if(count < 8){
    itemsNameContainer.appendChild(p);
   }else{
    alert('Please 8 ta items er opop add kora jabe na')
    return;
   }
   return totalPrice;
}

document.getElementById('coupon-btn').addEventListener('click', function(){
    const couponField = document.getElementById('coupon-field')
    const discountPrice = document.getElementById('discount-price')
    const totalDiscountPrice = document.getElementById('total-discount')

    const totalPriceElement = document.getElementById('total-price')
    const totalPriceString = totalPriceElement.innerText;
    totalPrice = parseFloat(totalPriceString)

    const discountTwoDecimal = totalPrice * 20 / 100;
    const discountString = discountTwoDecimal.toFixed(2)
    const discount = parseFloat(discountString)
    const totalDiscount = totalPrice - discount;

    if(couponField.value === '' ){
        alert('Use the discount code from above for 20% discount')
    }

    if(couponField.value === 'SELL200' ){
        discountPrice.innerText = discount.toFixed(2);
        totalDiscountPrice.innerText = totalDiscount.toFixed(2);
        couponField.value = '';
    }
    
    else {
        
    }
})

document.getElementById('home-btn').addEventListener('click', function(){
    location.reload();
})
let total = 0;
function handleClickCardBody(cardBodyClick){
    const totalPrice = document.getElementById('total-price')
    const makePurchaseBtn = document.getElementById('make-purchase-btn')

    const couponBtn = document.getElementById('coupon-btn')

   const itemPrice =  cardBodyClick.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0]
   total = parseFloat(total) + parseFloat(itemPrice)
   totalPrice.innerText = total;

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

}

    document.getElementById('coupon-btn').addEventListener('click', function(){
        const inputField = document.getElementById('coupon-field');
        const coupon = inputField.value;
        if(coupon === 'SELL200'){
            
        }
    })


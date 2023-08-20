function getElementById (elementId){
    const textElement = document.getElementById(elementId)
    const textElementString = textElement.innerText;
    const couponCode = parseFloat(textElementString)
    console.log(couponCode);
}


//remove cart handler
const removeCart = document.getElementById("cartRemove");
removeCart.addEventListener("click",function(){
    document.getElementById("firstCart").style.display="none";
})
const removeCartMain = document.getElementById("cartRemovesnd");
removeCartMain.addEventListener("click",function(){
    document.getElementById("sndCart").style.display="none";
})
//plus event handler
const quantityIncreaser = document.getElementById("plus");
quantityIncreaser.addEventListener("click",function(){
    const currentQuantity = document.getElementById("currentQuantity").value;
    const currentNumber = parseFloat(currentQuantity);
    const totalQuantity = currentNumber + 1;
    document.getElementById("currentQuantity").value=totalQuantity;


    const currentPrice = 1219;//document.getElementById("addPrice").innerText;
    //const priceNumber = parseFloat(currentPrice);
    const totalPrice =  currentPrice * totalQuantity;
    document.getElementById("addPrice").innerText=totalPrice;

    //plusValue("currentQuantity","addPrice",1219);

    const subTotalPrice = document.getElementById("subTotalPrice").innerText;
    const totalNumber = parseFloat(subTotalPrice);
    const subTotal = currentPrice + totalNumber;
    document.getElementById("subTotalPrice").innerText=subTotal;


    document.getElementById("total").innerText=subTotal;

})

//second plus event handler
const quantityIncreaserSnd = document.getElementById("sndPlus");
quantityIncreaserSnd.addEventListener("click",function(){
    const currentQuantitySnd = document.getElementById("currentQuantitySnd").value;
    const currentNumberSnd = parseFloat(currentQuantitySnd);
    const totalQuantitySnd = currentNumberSnd + 1;
    document.getElementById("currentQuantitySnd").value=totalQuantitySnd;


    const currentPriceSnd = 59;//document.getElementById("addPrice").innerText;
    //const priceNumber = parseFloat(currentPrice);
    const totalPriceSnd =  currentPriceSnd * totalQuantitySnd;
    document.getElementById("addPriceSnd").innerText=totalPriceSnd;

    const subTotalPriceSnd = document.getElementById("subTotalPrice").innerText;
    const totalNumberSnd = parseFloat(subTotalPriceSnd);
    const subTotalSnd = currentPriceSnd + totalNumberSnd;
    document.getElementById("subTotalPrice").innerText=subTotalSnd;

    document.getElementById("total").innerText=subTotalSnd;
})


//tax handler








//Minus event handler
const quantityDecreaser = document.getElementById("minus");
quantityDecreaser.addEventListener("click",function(){
    const currentQuantity = document.getElementById("currentQuantity").value;
    const currentNumber = parseFloat(currentQuantity);
    const totalQuantity = currentNumber - 1;
    document.getElementById("currentQuantity").value=totalQuantity;

    const currentPrice = document.getElementById("addPrice").innerText;
    const priceNumber = parseFloat(currentPrice);
    const totalPrice =  priceNumber - 1219;
    document.getElementById("addPrice").innerText=totalPrice;

    const subTotalPrice = document.getElementById("subTotalPrice").innerText;
    const totalNumber = parseFloat(subTotalPrice);
    const subTotal = totalNumber - 1219;
    document.getElementById("subTotalPrice").innerText=subTotal;

    document.getElementById("total").innerText=subTotal;
    
})

//second Minus event handler
const quantityDecreaserSnd = document.getElementById("sndMinus");
quantityDecreaserSnd.addEventListener("click",function(){
    const currentQuantitySnd = document.getElementById("currentQuantitySnd").value;
    const currentNumberSnd = parseFloat(currentQuantitySnd);
    const totalQuantitySnd = currentNumberSnd - 1;
    document.getElementById("currentQuantitySnd").value=totalQuantitySnd;


    const currentPriceSnd = document.getElementById("addPriceSnd").innerText;
    const priceNumberSnd = parseFloat(currentPriceSnd);
    const totalPriceSnd =  priceNumberSnd - 59;
    document.getElementById("addPriceSnd").innerText=totalPriceSnd;

    const subTotalPriceSnd = document.getElementById("subTotalPrice").innerText;
    const totalNumberSnd = parseFloat(subTotalPriceSnd);
    const subTotalSnd = totalNumberSnd - 59;
    document.getElementById("subTotalPrice").innerText=subTotalSnd;

    document.getElementById("total").innerText=subTotalSnd;
})


// function plusValue(id,idd,num){
//     const currentQuantity = document.getElementById(id).value;
//     const currentNumber = parseFloat(currentQuantity);
//     const totalQuantity = currentNumber + 1;
//     document.getElementById(id).value=totalQuantity;


//     const currentPrice = num;//document.getElementById("addPrice").innerText;
//     //const priceNumber = parseFloat(currentPrice);
//     const totalPrice =  currentPrice * totalQuantity;
//     document.getElementById(idd).innerText=totalPrice;
// }
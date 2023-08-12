var add1 = document.querySelectorAll('#add')[0];
var add2 = document.querySelectorAll('#add')[1];
var add3 = document.querySelectorAll('#add')[2];

var minus1 = document.querySelectorAll('#minus')[0];
var minus2 = document.querySelectorAll('#minus')[1];
var minus3 = document.querySelectorAll('#minus')[2];

var count1 = document.querySelectorAll('.count')[0];
var count2 = document.querySelectorAll('.count')[1];
var count3 = document.querySelectorAll('.count')[2];

var price1 = document.querySelectorAll('#Price')[0];
var price2 = document.querySelectorAll('#Price')[1];
var price3 = document.querySelectorAll('#Price')[2];

var like1 = document.querySelectorAll('#like')[0]
var like2 = document.querySelectorAll('#like')[1]
var like3 = document.querySelectorAll('#like')[2]


var quit1 = document.querySelectorAll('.quit')[0];
var quit2 = document.querySelectorAll('.quit')[1];
var quit3 = document.querySelectorAll('.quit')[2];

var item1 = document.querySelectorAll('#item')[0];
var item2 = document.querySelectorAll('#item')[1];
var item3 = document.querySelectorAll('#item')[2];

quit1.addEventListener('click', function(){
    item1.remove()
})

quit2.addEventListener('click', function(){
    item2.remove()
})

quit3.addEventListener('click', function(){
    item3.remove()
})







like1.addEventListener('click', function(){
    if(like1.style.color = '#333'){ 
        like1.style.color = 'red';
    }
    else{
        like1.style.color = '#333'
    }

})


like2.addEventListener('click', function(){
    if(like2.style.color = '#333'){ 
        like2.style.color = 'red';
    }
    else{
        like2.style.color = '#333'
    }
})

like3.addEventListener('click', function(){
    if(like3.style.color = '#333'){ 
        like3.style.color = 'red';
    }
    else{
        like3.style.color = '#333'
    }
})


var DP = 10;

var quantity1 = 1;
var quantity2 = 1;
var quantity3 = 1;
var Total = document.getElementById('Total')

add1.addEventListener('click', function(){
    price1.innerHTML = '$'
    count1.innerHTML = 'X'
    quantity1++;
    count1.innerHTML += quantity1;
    price1.innerHTML += quantity1 * DP;
    total_price = (quantity1 * DP) + (quantity2 * DP) + (quantity3 * DP)
    Total.innerHTML = 'Total: $' + total_price
});

add2.addEventListener('click', function(){
    price2.innerHTML = '$'
    count2.innerHTML = 'X'
    quantity2++
    count2.innerHTML += quantity2;
    price2.innerHTML += quantity2 * DP
    total_price = (quantity1 * DP) + (quantity2 * DP) + (quantity3 * DP)
     Total.innerHTML = 'Total: $' + total_price
});

add3.addEventListener('click', function(){
    price3.innerHTML = '$'
    count3.innerHTML = 'X'
    quantity3++
    count3.innerHTML += quantity3;
    price3.innerHTML += quantity3 * DP
    total_price = (quantity1 * DP) + (quantity2 * DP) + (quantity3 * DP)
    Total.innerHTML = 'Total: $' + total_price
});


minus1.addEventListener('click', function(){
    if(quantity1 > 1){
        price1.innerHTML = '$'
        count1.innerHTML = 'X'
        quantity1--;

        count1.innerHTML += quantity1
        price1.innerHTML += DP * quantity1;
    }
    total_price = (quantity1 * DP) + (quantity2 * DP) + (quantity3 * DP)
    Total.innerHTML = 'Total: $' + total_price
});

minus2.addEventListener('click', function(){
    if(quantity2 > 1){
        price2.innerHTML = '$'
        count2.innerHTML = 'X'
        quantity2--;

        count2.innerHTML += quantity2
        price2.innerHTML += DP * quantity2;
        
    }
    total_price = (quantity1 * DP) + (quantity2 * DP) + (quantity3 * DP)
    Total.innerHTML = 'Total: $' + total_price
});

minus3.addEventListener('click', function(){
    if(quantity3 > 1){
        price3.innerHTML = '$'
        count3.innerHTML = 'X'
        quantity3--;

        count3.innerHTML += quantity3
        price3.innerHTML += DP * quantity3;
    }
    total_price = (quantity1 * DP) + (quantity2 * DP) + (quantity3 * DP)
    Total.innerHTML = 'Total: $' + total_price
});

var total_price = (quantity1 * DP) + (quantity2 * DP) + (quantity3 * DP);
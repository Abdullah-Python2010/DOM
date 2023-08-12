add1 = document.querySelectorAll('#add')[0];
add2 = document.querySelectorAll('#add')[1];
add3 = document.querySelectorAll('#add')[2];

minus1 = document.querySelectorAll('#minus')[0];
minus2 = document.querySelectorAll('#minus')[1];
minus3 = document.querySelectorAll('#minus')[2];

count1 = document.querySelectorAll('.count')[0];
count2 = document.querySelectorAll('.count')[1];
count3 = document.querySelectorAll('.count')[2];

price1 = document.querySelectorAll('#Price')[0];
price2 = document.querySelectorAll('#Price')[1];
price3 = document.querySelectorAll('#Price')[2];

like1 = document.querySelectorAll('#like')[0]
like2 = document.querySelectorAll('#like')[1]
like3 = document.querySelectorAll('#like')[2]


quit1 = document.querySelectorAll('.quit')[0];
quit2 = document.querySelectorAll('.quit')[1];
quit3 = document.querySelectorAll('.quit')[2];

item1 = document.querySelectorAll('#item')[0];
item2 = document.querySelectorAll('#item')[1];
item3 = document.querySelectorAll('#item')[2];

quit1.addEventListener('click', function(){
    item1.style.display = 'none'
})

quit2.addEventListener('click', function(){
    item2.style.display = 'none'
})

quit3.addEventListener('click', function(){
    item3.style.display = 'none'
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
DP = 10;

quantity1 = 1;
quantity2 = 1;
quantity3 = 1;


add1.addEventListener('click', function(){
    price1.innerHTML = '$'
    count1.innerHTML = 'X'
    quantity1++;
    count1.innerHTML += quantity1;
    price1.innerHTML += quantity1 * DP;
});

add2.addEventListener('click', function(){
    price2.innerHTML = '$'
    count2.innerHTML = 'X'
    quantity2++
    count2.innerHTML += quantity2;
    price2.innerHTML += quantity2 * DP
});

add3.addEventListener('click', function(){
    price3.innerHTML = '$'
    count3.innerHTML = 'X'
    quantity3++
    count3.innerHTML += quantity3;
    price3.innerHTML += quantity3 * DP

});


minus1.addEventListener('click', function(){
    if(quantity1 > 1){
        price1.innerHTML = '$'
        count1.innerHTML = 'X'
        quantity1--;

        count1.innerHTML += quantity1
        price1.innerHTML += DP * quantity1;
    }
});

minus2.addEventListener('click', function(){
    if(quantity2 > 1){
        price2.innerHTML = '$'
        count2.innerHTML = 'X'
        quantity2--;

        count2.innerHTML += quantity2
        price2.innerHTML += DP * quantity2;
    }
});

minus3.addEventListener('click', function(){
    if(quantity3 > 1){
        price3.innerHTML = '$'
        count3.innerHTML = 'X'
        quantity3--;

        count3.innerHTML += quantity3
        price3.innerHTML += DP * quantity3;
    }
});


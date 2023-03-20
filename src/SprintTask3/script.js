let choice=document.getElementById('choice')
let amount=document.getElementById('amount')
let kzt_result=document.getElementById('kzt')
let usd_result=document.getElementById('usd')
let eur_result=document.getElementById('eur')

function convert(){
    if (choice.value=="KZT"){
        kzt_result.innerText='-';
        usd_result.innerHTML=(amount.value/431).toFixed(2);
        eur_result.innerHTML=(amount.value/509).toFixed(2);
    }
    else if (choice.value=="USD"){
        kzt_result.innerHTML=(amount.value*429).toFixed(2);
        usd_result.innerText='-';
        eur_result.innerHTML=((amount.value*429)/509).toFixed(2);
    }
    else if (choice.value=="EUR"){
        kzt_result.innerHTML=(amount.value*507).toFixed(2);
        usd.innerHTML=((amount.value*507)/431).toFixed(2);
        eur_result.innerText='-';

    }
}

amount.addEventListener("input", convert);
choice.addEventListener("change", convert);

// вызов функции при загрузке страницы, чтобы начальные значения были правильными
convert();


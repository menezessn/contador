function contar(){

var inicio0 = document.getElementById('inicio');
var fim0 = document.getElementById('fim');
var passo0= document.getElementById('passo');

var inicio = Number(inicio0.value);
var fim = Number(fim0.value);
var passo = Number(passo0.value);
var res = document.getElementById('resultado');

res.innerHTML = '<br>'
res.innerHTML += 'Contagem: ';

if (inicio0.value.length == 0 ){
    window.alert('[ERRO]É necessário colocar um número de inicio.');
    res.innerHTML = '<br>Impossível contar';
} else if (fim0.value.length ==0){
    window.alert('[ERRO]É necessário colocar um número de fim.');
    res.innerHTML = '<br>Impossível contar';
} else if(passo0.value.length==0){
    window.alert('Você não colocou um número de passo, o valor usado na contagem será 1.');
    passo = 1;
} else if(passo<=0){
    window.alert('[ERRO] Passo inválido.')
    res.innerHTML = '<br>Passo inválido';
}

else if(inicio<fim){
for (var c = inicio; c <=fim; c+=passo){
    res.innerHTML += `${c} \u{1F449}`;
    res.innerHTML+= `\u{1F3C1} FIM`
}
} else {

    for (var c = inicio; c >=fim; c-=passo){
        res.innerHTML += `${c} \u{1F449}`;
        res.innerHTML+= `\u{1F3C1} FIM`
}
}



}
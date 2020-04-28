var x = 0;
while (x < 10) {
    document.write('</br> O valor de X é ' + x);
    x++;
}

for (var i = 0; i < 10; i++) {
    document.write('</br> O valor de i é ' + i);
}
document.write('</br> Pedidos');
document.write('</br> 0=suco');
document.write('</br> 1=agua');
document.write('</br> 2=pao');

function pedir() {
    y = prompt('Pedir ?');
    switch (y) {
        case '0':
            document.write('</br> Pedido: suco ' + y);
            break;
        case '1':
            document.write('</br> Pedido: agua ' + y);
            break;
        case '2':
            document.write('</br> Pedido: pao ' + y);
            break;
        default:
            break;
    }
}
console.log('ola');
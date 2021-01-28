var typeoflaptob = prompt("which type of laptob do you want toshiba or hp");
var nooflaptob = prompt("how many laptob do you want");
var youraddres = prompt("what is your adress");

var orderdetails;

if (nooflaptob > 1 && nooflaptob <= 3) {
    orderdetails = "you get 10% discount";
} else if (nooflaptob >= 4 && nooflaptob <= 8) {
    orderdetails = "you get 20% discount";
} else if (nooflaptob >= 9 && nooflaptob <= 20) {
    orderdetails = "you git 35% discount ";
} else {
    orderdetails = "sorry no discount ";
}


document.write(orderdetails);
document.getElementById("order").innerText = typeoflaptob;
document.getElementById("nolaptob").innerText = nooflaptob;
document.getElementById("youradd").innerText = youraddres;




while (typeoflaptob !== 'toshiba' && typeoflaptob !== 'hp') {
    typeoflaptob = prompt('which type of laptob do you want toshiba or hp');
    nooflaptob = prompt('how many laptob do you want')
    youraddres = prompt("what is your adress");
}

var pic = '';
if (typeoflaptob === 'hp') {
    pic = '<img src="image/hp.jpg" /> ';
} else if (typeoflaptob === 'toshiba') {
    pic = '<img src="image/toshiba.jpg" />';
}
var result = '';
for (var i = 0; i < nooflaptob; i++) {
    result = result + pic;
}
confirm("Are you happy with you discount ");
alert("thank you for shopping from our shop");

document.write(result);



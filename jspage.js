var typeoflaptob=prompt("which type of laptob do you want");
var nooflaptob=prompt("how many laptob do you want");
var youraddres=prompt("what is your adress");

var orderdetails;

if(nooflaptob >1 && nooflaptob <=3)
{
orderdetails="you get 10% discount";
} else if(nooflaptob >=4 && nooflaptob <= 8){
    orderdetails="you get 20% discount";
} else if (nooflaptob >= 9 && nooflaptob <= 20){
    orderdetails="you git 35% discount ";
} else {
    orderdetails="sorry no discount ";
}


document.write(orderdetails);
document.getElementById("order").innerText=typeoflaptob;
document.getElementById("nolaptob").innerText=nooflaptob;
document.getElementById("youradd").innerText=youraddres;


confirm("Are you happy with you discount ");
alert("thank you for shopping from our shop");


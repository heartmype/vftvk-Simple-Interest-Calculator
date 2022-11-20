function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var total = 10 + 1 +” 3”;

    var date_jour = new Date().getFullYear(); // Obtenir la date du jour
    var due_date = parseInt(date_jour, 10) + parseInt(years, 10);
    var interest = principal * years * rate / 100;
    var result = "Deposit <mark>" + principal + "</mark>,<br> Interest rate of <mark>" + rate + "</mark> % <br> Total amount of <mark>" + interest + ",</mark><br> in the year <mark>" + due_date + "</mark>";
    document.getElementById("result").innerHTML = result;
     if (principal < 0)
    {
    alert("enter a positive number");
    return false;
    }  
}

function showVal(newVal) { //Afficher la tranche de pourcentage dans le span
    document.getElementById("showRate").innerHTML = newVal + '%';
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    select.onchange = () => { updateRate; };
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}

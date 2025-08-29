// add money featcher

const validPin = 1234;
document.getElementById("add-mpney-btn").addEventListener('click', function(e){
    e.preventDefault();
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("accound-number").value

    const amound = parseInt( document.getElementById("add-ammaun").value)

    const pinNumber = parseInt(document.getElementById("add-pin").value)

    const avileAbleBlance = parseInt(document.getElementById("avilable-balance").innerText)

    if(accountNumber.length <11){
        alert("Invalid Accound Number")
        return;
    }
    if(pinNumber !== validPin){
        alert("Invalid Pin Number")
        return;
    }
    const totalNewavileableBlance = amound + avileAbleBlance;

    document.getElementById("avilable-balance").innerText = totalNewavileableBlance
   
})

// cash out money fetcher 
document.getElementById("withdraw-money-btn").addEventListener('click',function(e){
    e.preventDefault()

    const amount = parseInt(document.getElementById('withdraw-amount').value)

    const availableBlance = parseInt(document.getElementById('avilable-balance').innerText)
    const totaalNewavileableBlance = availableBlance - amount ;
    console.log(totaalNewavileableBlance)

    document.getElementById("avilable-balance").innerText = totaalNewavileableBlance
})

// toggling area secetion 
document.getElementById('add-button').addEventListener('click',function(){
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById('cash-out-button').addEventListener('click',function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block";
})

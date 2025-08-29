// add money featcher
document.getElementById("add-mpney-btn").addEventListener('click', function(e){
    e.preventDefault();
    console.log("oloso belay jodi gan kha ")
    
    const validPin = 1234;
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("accound-number").value
    const ammaunt = parseInt(document.getElementById("add-ammaun").value)

    const pin = document.getElementById("add-pin").value

    if(accountNumber.length <11){
        alert("plse provid valid account number")
        return
    }
    if(pin !== validPin){
        alert("plse provid valid pin Number")
        return
    }
    const avileAbleBlance = parseInt(document.getElementById("avilable-balance").innerText)
    console.log(avileAbleBlance)

    const newAvilableBalance = ammaunt +avileAbleBlance
    
    document.getElementById("avilable-balance").innerText = newAvilableBalance
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

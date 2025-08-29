
// login button functionality
document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault()

    const mobailNumber = 123456789;
    const pinNumber = 1234;

    const mobaileNumberValue = document.getElementById("mobaile-number").value
    const mobaileNumberConverted = parseInt(mobaileNumberValue);
    const pinNumberValue =  document.getElementById("pin-number").value

    const pinNumberValueConverted = parseInt(pinNumberValue)

    if(mobaileNumberConverted === mobailNumber  && pinNumberValueConverted === pinNumber){
        window.location.href = "./home.html"
    }
    else{
        alert("Invalid pin number")
    }
})
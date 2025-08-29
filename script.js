
// login button functionality
document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault()

    const mobailNumber = 123456789;
    const pinNumber = 1234;

    const mobailNumberValue = document.getElementById('mobaile-number').value;

    const mobaileNumbetValueConverter = parseInt(mobailNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberValueConvertor = parseInt(pinNumberValue);

    console.log(mobaileNumbetValueConverter,pinNumberValueConvertor)

    if(mobaileNumbetValueConverter === mobailNumber && pinNumberValueConvertor === pinNumber){
        window.location.href = "./home.html"
        
    }
    else{
        alert("Invalit Number And Password")
    }

})
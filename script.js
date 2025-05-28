var toggle = document.getElementById("billingToggle");
toggle.addEventListener('change', function() {
    var cifraAID = document.getElementById("cifraA");
    var cifraMID = document.getElementById("cifraM");
    var cifraAK1 = document.getElementsByClassName("cifraA")[0];
    var cifraAK2 = document.getElementsByClassName("cifraA")[1];
    var cifraMK1 = document.getElementsByClassName("cifraM")[0];
    var cifraMK2 = document.getElementsByClassName("cifraM")[1];
    if(toggle.checked){
        cifraAID.style.display = 'none';
        cifraMID.style.display ='block';
        cifraAK1.style.display = 'none';
        cifraMK1.style.display = 'block';
        cifraAK2.style.display = 'none';
        cifraMK2.style.display = 'block';
    }else {
        cifraAID.style.display = 'block';
        cifraMID.style.display ='none';
        cifraAK1.style.display = 'block';
        cifraMK1.style.display = 'none';
        cifraAK2.style.display = 'block';
        cifraMK2.style.display = 'none';
    }
})
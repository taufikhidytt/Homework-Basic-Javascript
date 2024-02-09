function inputForm(){
    document.getElementById('validateName').innerHTML = "";
    document.getElementById('nama').classList.remove('is-invalid');

    document.getElementById('validateAge').innerHTML = "";
    document.getElementById('umur').classList.remove('is-invalid');

    document.getElementById('validateMoney').innerHTML = "";
    document.getElementById('uang').classList.remove('is-invalid');

    let inputName = document.getElementById('nama').value;
    let inputAge = document.getElementById('umur').value;
    let inputMoney = document.getElementById('uang').value;

    inputValidate(inputName, inputAge, inputMoney);
}

function inputValidate(inputName, inputAge, inputMoney){
    if(inputName === ""){
        document.getElementById('validateName').innerHTML = "Name required";
        document.getElementById('nama').classList.add('is-invalid');
    } else if(inputName.length < 10){
        document.getElementById('validateName').innerHTML = "Name minimum 10 karakter";
        document.getElementById('nama').classList.add('is-invalid');
    }

    if(inputAge === ""){
        document.getElementById('validateAge').innerHTML = "Age required";
        document.getElementById('umur').classList.add('is-invalid');
    } else if(inputAge < 25){
        document.getElementById('validateAge').innerHTML = "Age minimum 25 year";
        document.getElementById('umur').classList.add('is-invalid');
    }

    if(inputMoney === ""){
        document.getElementById('validateMoney').innerHTML = "Money required";
        document.getElementById('uang').classList.add('is-invalid');
    } else if(inputMoney < 100000 || inputMoney > 1000000){
        document.getElementById('validateMoney').innerHTML = "Money minimal 100000 and maximal 1000000";
        document.getElementById('uang').classList.add('is-invalid');
    }
}